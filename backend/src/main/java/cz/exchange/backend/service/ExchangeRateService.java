package cz.exchange.backend.service;

import cz.exchange.backend.client.ExchangeRateClient;
import cz.exchange.backend.dto.ExchangeRateDto;
import cz.exchange.backend.entity.ExchangeRateEntity;
import cz.exchange.backend.repository.ExchangeRateRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ExchangeRateService {

    private final ExchangeRateClient client;
    private final ExchangeRateRepository repository;

    public ExchangeRateService(
            ExchangeRateClient client,
            ExchangeRateRepository repository) {

        this.client = client;
        this.repository = repository;
    }

    @Transactional
    public List<ExchangeRateDto> getRates(boolean useDb) {

        if (useDb) {
            return repository
                    .findAll()
                    .stream()
                    .map(this::toDto)
                    .toList();
        }

        List<ExchangeRateDto> rates = client.fetchRates();

        repository.deleteAll();

        List<ExchangeRateEntity> entities = rates
                .stream()
                .map(this::toEntity)
                .toList();

        repository.saveAll(entities);

        return rates;
    }

    private ExchangeRateEntity toEntity(ExchangeRateDto dto) {

        ExchangeRateEntity entity = new ExchangeRateEntity();

        entity.setShortName(dto.shortName());
        entity.setValidFrom(dto.validFrom());
        entity.setName(dto.name());
        entity.setCountry(dto.country());

        entity.setMove(dto.move());
        entity.setAmount(dto.amount());

        entity.setValBuy(dto.valBuy());
        entity.setValSell(dto.valSell());
        entity.setValMid(dto.valMid());

        entity.setCurrBuy(dto.currBuy());
        entity.setCurrSell(dto.currSell());
        entity.setCurrMid(dto.currMid());

        entity.setVersion(dto.version());

        entity.setCnbMid(dto.cnbMid());
        entity.setEcbMid(dto.ecbMid());

        return entity;
    }

    private ExchangeRateDto toDto(ExchangeRateEntity entity) {

        return new ExchangeRateDto(
                entity.getShortName(),
                entity.getValidFrom(),
                entity.getName(),
                entity.getCountry(),
                entity.getMove(),
                entity.getAmount(),
                entity.getValBuy(),
                entity.getValSell(),
                entity.getValMid(),
                entity.getCurrBuy(),
                entity.getCurrSell(),
                entity.getCurrMid(),
                entity.getVersion(),
                entity.getCnbMid(),
                entity.getEcbMid()
        );
    }
}