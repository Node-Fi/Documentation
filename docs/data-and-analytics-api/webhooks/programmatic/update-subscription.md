# Update Webhook Subscription


#### Endpoint
```PATCH /subscriptions/id```

#### Patch Schema

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
   name: "GCP Cloud Function 3"
}
 ```

 #### Response 
```ts 
{
    responseCode: 200,
}
```