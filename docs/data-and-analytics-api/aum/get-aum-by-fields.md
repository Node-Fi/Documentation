# AUM

#### Endpoint
``` GET /aum ```
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
  GET /aum?fields=country or
  GET /aum?fields=country&filter={"country": "COG"}
```


#### Example Response

```
[
    [
        {
            "aum": 14.03317,
            "country": "COG",
            "token": 68,
            "wallet": 20667
        },
        {
            "aum": 211.55946,
            "country": "SWE",
            "token": 45,
            "wallet": 23419
        },
        {
            "aum": 135.67795,
            "country": "JEY",
            "token": 27,
            "wallet": 23664
        },
        {
            "aum": 379866.1,
            "country": "AUT",
            "token": 2,
            "wallet": 22589
        },
  ]
]
```