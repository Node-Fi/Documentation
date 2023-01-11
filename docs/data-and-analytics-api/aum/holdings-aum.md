# HOLDINGS AUM

#### Endpoint
``` GET /aum/holdings ```
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
GET /aum/holdings?startTime=1660780799&includeStats=true
```

#### Example Response
```
{
    "data": [
        {
            "token": 2,
            "priceusd": 2.1000106,
            "time": 1672730700,
            "address": "0xF94fEA0C87D2b357DC72b743b45A8cB682b0716E",
            "symbol": "ULP",
            "count": 3724,
            "balance": 466499.44,
            "value": 979653.75,
            "tags": [
                "LP"
            ]
        },
        {
            "token": 45,
            "priceusd": 1.4330367,
            "time": 1672730700,
            "address": "0x39b6F09ef97dB406ab78D869471adb2384C494E3",
            "symbol": "MobLP",
            "count": 3707,
            "balance": 500659.56,
            "value": 717463.5,
            "tags": [
                "LP"
            ]
        },
        {
            "token": 27,
            "priceusd": 0.997412,
            "time": 1672730700,
            "address": "0x765DE816845861e75A25fCA122bb6898B8B1282a",
            "symbol": "cUSD",
            "count": 3405,
            "balance": 453075.3,
            "value": 451902.75,
            "tags": [
                "stable"
            ]
        },
    ],
    "stats": {
        "count": {
            "max": 3724,
            "min": 3710
        },
        "priceusd": {
            "max": 2.1000106,
            "min": 0.00002122
        },
        "value": {
            "max": 979653.75,
            "min": 10.527267
        }
    }
}
```