---
sidebar_position: 2
---

# Lending Market

:::info

Lending Markets are platforms that allow users to lend out their cryptocurrency assets to borrowers. These borrowers are typically institutions or other users who use the borrowed assets for various purposes, such as trading or margin lending. In return for lending out their assets, users receive interest on their loans in the form of the asset they lent or a different asset.

:::

## Class: LendingMarket

The `LendingMarket` class is a subclass of `DepositablePosition` and represents a single lending market. It includes information about the lending market such as the annual percentage yield (`apy`), the total value locked (`tvl`), the total amount deposited by the attached wallet (`walletDeposited`), and the value of the user's deposit in local currency (`depositValueInLocalCurrency`). It also includes methods for depositing (`deposit`) and withdrawing (`withdraw`) from the lending market.

### Properties

- `apy`: The annual percentage yield of the lending market.
- `type`: The type of lending market.
- `id`: The ID of the lending market.
- `chainId`: The chain ID of the lending market.
- `depositToken`: The token being deposited in the lending market.
- `tvl`: The total value locked in the lending market.
- `walletDeposited`: The total amount deposited by the user in the lending market.
- `totalDeposited`: The value of the user's deposit in the lending market in local currency.
- `depositValueInLocalCurrency`: The value of the user's deposit in the lending market in local currency.
- `protocol`: The protocol of the lending market.
