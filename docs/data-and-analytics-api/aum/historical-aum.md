# HISTORICAL AUM

#### Endpoint
``` GET /aum/historical ```
####  Querystring Schema

```ts
fields?: {
   'country'
  | 'region'
  | 'city'
  | 'device_type'
  | 'device_brand'
  | 'none';
},
startTime?: number,
endTime?: number,
resolution?: number,
dataFormat?: 'json' | 'csv',
includeStats?: boolean,
filter?: FilterWalletMetaDataDto
```

###### FilterWalletMetaDataDto schema

```ts
country__in?: string[];
country?: string;
region__in?: string[];
city__in?: string[];
city?: string;
device_type__in?: string[];
device_type?: string;
device_brand__in?: string[];
device_brand?: string;
```

#### Example

```
GET aum/historical?fields=country
```

#### Example Response
```
{
    "stats": {
        "aum": {
            "max": 35053.84,
            "min": 0
        }
    },
    "data": [
        {
            "field": "country",
            "grouping": "KHM",
            "data": [
                {
                    "aum": 0.41,
                    "unixTimestamp": 1663804800
                },
                {
                    "aum": 0.86,
                    "unixTimestamp": 1663891200
                },
                {
                    "aum": 1.31,
                    "unixTimestamp": 1663977600
                },
                {
                    "aum": 3.33,
                    "unixTimestamp": 1664150400
                },
                {
                    "aum": 8.76,
                    "unixTimestamp": 1664236800
                },
            ]
        }
    ]
}
```