package cz.exchange.backend.repository;

import cz.exchange.backend.entity.ExchangeRateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExchangeRateRepository
        extends JpaRepository<ExchangeRateEntity, Long> {
}