package cz.exchange.backend.service;

import cz.exchange.backend.client.ExchangeRateClient;
import cz.exchange.backend.dto.ExchangeRateDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExchangeRateService 
{
    private final ExchangeRateClient client;

    public ExchangeRateService(ExchangeRateClient client) 
    {
        this.client = client;
    }

    public List<ExchangeRateDto> getRates() 
    {
        return client.fetchRates();
    }
}