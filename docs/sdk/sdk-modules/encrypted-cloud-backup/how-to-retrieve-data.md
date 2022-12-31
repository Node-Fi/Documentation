# Fetch Data

Data can be retrieved and decrypted via `getDataFromCloud`. This method fetches the given filename, or the first file in the directory, decrypts the data, and deserializes the data into the requested shape.

#### Parameters

| Name           | Type                                                    | Description                                                                                |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| cloudType      | `CloudType`                                             | The type of cloud service to use ('iCloud' or 'gDrive')                                    |
| backupPassword | `string`                                                | The password used for decrypting the data                                                  |
| filename       | `string` (optional)                                     | The name of the file to retrieve. If not provided, the most recent file will be retrieved. |
| opts           | `Omit<CloudOptions<T>, 'scope' 'encryptor'>` (optional) | Additional options for customization. See below for more information.                      |

#### Options

The `CloudOptions<T>` object allows you to customize the behavior of `encryptAndSaveDataToCloud` by specifying alternate implementations for certain tasks. The available options are:

| Name      | Type                                                  | Description                                                                                                                                  |
| --------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| decryptor | `(pass: string, cipher: string) => string` (optional) | An alternate function to use for decrypting the data. By default, AES-256-CBC is used.                                                       |
| path      | `string` (optional)                                   | An alternate path to use for the saved file on the cloud service. By default, the file is saved in the `REMOTE_BACKUP_WALLET_DIR` directory. |
| serialize | `(data: T) => string` (optional)                      | An alternate function to use for serializing the data before it is encrypted and saved. By default, `JSON.stringify` is used.                |

#### Return value

A `Promise` that resolves to the retrieved and decrypted data.
