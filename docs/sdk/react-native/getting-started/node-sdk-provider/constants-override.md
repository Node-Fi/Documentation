---
description: The constants override allows you to override certain values in the SDK
---

# Constants Override

The `constantsOverride` prop for the Node SDK allows the end-developer to take greater control over how certain values are configured.  Constants can be overridden individually.

| Constant                  | Default                  | Description                                                                                                                                                                          |
| ------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `storagePrefix`           | `"@node-fi/sdk-core`/`"` | <p>The storage prefix used for persisted data.  </p><p></p><p>To Note: Changing this value after launching your app will mean the SDK will be unable to find your previous data.</p> |
| `priceRefetchPeriod`      | 30 `* 1000`              | The time, in ms, to wait to refetch new prices                                                                                                                                       |
| `swapQuoteRefetchPeriod`  | `5 * 1000`               | The time, in ms, to wait to refetch swap quotes                                                                                                                                      |
| `defaultCurrencyOverride` | `"USD"`                  | The default fiat currency off of which prices are based.                                                                                                                             |
