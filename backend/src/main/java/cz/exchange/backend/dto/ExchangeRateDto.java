package cz.exchange.backend.dto;

public record ExchangeRateDto(
        String shortName,
        String validFrom,
        String name,
        String country,
        double move,
        int amount,
        double valBuy,
        double valSell,
        double valMid,
        double currBuy,
        double currSell,
        double currMid,
        int version,
        double cnbMid,
        double ecbMid
)
{

}