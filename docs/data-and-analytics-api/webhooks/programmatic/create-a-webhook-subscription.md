# Create a Webhook Subscription


#### Endpoint
```POST /subscriptions```

#### Schema

```ts
topics?: string[]
name: string
tenant?: number;
url: string;
enabled?: boolean;
active?: boolean;
authorization: {
    _type: 'bearer' | 'api-key';
    key?: string;
    value: string;
    expiration?: Date;
    };
filter: {
  _type: OperandType | TenantType | 'metadata';
}
```

#### Example Request Body
```ts 
{
  topics: ["Transfer(address,address,uint256)"],
  name: "GCP Cloud Function 2",
  authorization: { "_type": "bearer", "value": "123456789abcdefg" },
  url: "https://notifications.myorg.com/subscription"
}
 ```

 #### Response 
```ts 
{
    responseCode: 201,
    data: {
        message: 'created successfully',
    },
}
```

#### POST Callback  Schema  
```ts 
{
    "EventRaw":
    {
        "Block": number,
        "From": string,
        "To":string,
        "TokenAddr": string,
        "TokenAmount": {
                "tid": number,
                "symbol": string,
                "address": string,
                "decimal": number,
                "price": number,
                "chain": number,
                "tags": {
                  "snx": string[] 
                }
                "Amount": number
        },
        "TransactionHash": string,
        "Value": number
    },
    "SWAPInfo":
    {
        "InputAmount": string,
        "InputToken": string,
        "InputValueInUSD": number,
        "OutputAmount": string,
        "OutputToken": string,
        "OutputValueInUSD":number,
    },
    "Type": string,
    "Wallet":
    {
        "Address": string,
        "Tenant": number,
        "Wid": number
    }
}
```


 #### POST Callback  example  

 ``` {
    "EventRaw":
    {
        "Block": 16994897,
        "From": "0xa730b463395f5ca07ece5cefeccf7f45e1e2c9bf",
        "To": "0xcf2b7852d587b5f5772671184023cdb51fc5807c",
        "TokenAddr": "0x471ece3750da237f93b8e339c536989b8978a438",
        "TokenAmount": null,
        "TransactionHash": "0x1dccc556ee452357da2b1c4d70e07517f59e2af2070d4305ece0b479ea62a2dd",
        "Value": 2084633946926135536
    },
    "SWAPInfo":
    {
        "InputAmount": "1000000000000000000",
        "InputToken": "0x765de816845861e75a25fca122bb6898b8b1282a",
        "InputValueInUSD": 0.996067,
        "OutputAmount": "2084633946926135536",
        "OutputToken": "0x471ece3750da237f93b8e339c536989b8978a438",
        "OutputValueInUSD": 0.9988023244549316
    },
    "Type": "SWAP",
    "Wallet":
    {
        "Address": "0xCf2B7852D587B5F5772671184023cdb51fC5807C",
        "Tenant": 1,
        "Wid": 24388
    }
} ```
