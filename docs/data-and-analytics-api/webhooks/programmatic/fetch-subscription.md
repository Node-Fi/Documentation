# Fetch Subscription

#### Endpoint
```/subscriptions```

#### Query Params Schema
```ts 
 page?: number;
 perPage?: number;
 ```

 #### Example Params
 ```ts
  page: 0,
  perPage: 2,
 ```

 #### Example Response 
```ts 
[
    {
        "webhook_id": 145,
        "name": "GCP Cloud Function 2",
        "tenant": 1007,
        "topics": [
            "Transfer(address,address,uint256)"
        ],
        "created_on": "2022-12-05T20:11:51.405Z",
        "enabled": false,
        "consecutive_failures": 0,
        "active": true,
        "url": "https://notifications.myorg.com/subscription",
        "authorization": {
            "_type": "bearer",
            "value": "123456789abcdefg"
        },
        "filter": {}
    }
]
```