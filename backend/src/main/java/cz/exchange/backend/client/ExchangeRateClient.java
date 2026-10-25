package cz.exchange.backend.client;

import cz.exchange.backend.dto.ExchangeRateDto;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.util.Arrays;
import java.util.List;

@Component
public class ExchangeRateClient {

    private static final String API_URL = "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e";

    private final RestClient restClient = RestClient.create();

    public List<ExchangeRateDto> fetchRates() {

    ExchangeRateDto[] rates = restClient
            .get()
            .uri(API_URL)
            .retrieve()
            .body(ExchangeRateDto[].class);

        if (rates == null) 
        {
            return List.of();
        }

        return Arrays.asList(rates);
    }
}