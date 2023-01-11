# Time-based Filters


##### OnboardMetricsIntervalDto


| Name               | Type       | Required | Description (example)    |
| ------------------ | ---------- | -------- | ------------------------ |
| `lowTime`          | `number`   | Yes      |  1660006557       |
| `highTime`         | `number`   | Yes      |   1660888507      |



##### OnboardMetricsPeriodDto

| Name               | Type                                                         | Required | Description (example)    |
| ------------------ | ------------------------------------------------------------ | -------- | ------------------------ |
| `timePeriod`       | `'minute' or 'hour' or 'day' or 'week' or 'month' or 'year'` | No      |    hour                   |
| `startTime`       | `number` | No      |    1660006557                   |
| `endTime`       | `number` | No      |    1660888507                   |
| `field`       | `AggregationField` | No      |      `country or region or city or device_type or device_brand`                 |
| `customField`       | `string` | No      |                       |
| `dataFormat`       | `DataFormatType` | No      |    `csv or json`                  |
| `filter`       | `FilterWalletMetaDataDto` | No      |    [FilterWalletMetaDataDto](./inclusion-filters.md)                  |