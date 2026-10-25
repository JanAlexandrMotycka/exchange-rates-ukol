package cz.exchange.backend.controller;

import cz.exchange.backend.dto.ExchangeRateDto;
import cz.exchange.backend.service.ExchangeRateService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/exchange-rates")
public class ExchangeRateController {

    private final ExchangeRateService service;

    public ExchangeRateController(ExchangeRateService service) {
        this.service = service;
    }

    @GetMapping
    public List<ExchangeRateDto> getRates(@RequestParam(name = "usedb") boolean useDb) {

        return service.getRates(useDb);
    }
}