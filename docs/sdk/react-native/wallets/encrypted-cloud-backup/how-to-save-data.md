# Encrypt and Save Object

Data can be encrypted and saved to cloud storage via `encryptAndSaveDataToCloud`.

This method encrypts the provided data using AES-256-CBC, and saves the ecrypted data to cloud storage (iCloud or Google Drive) under the provided file name. An optional argument allows the developer to set a custom serializer, make the file accessible by other applications, and modify the path at which the file is saved.

### Parameters

| Name      | Type                         | Description                                                           |
| --------- | ---------------------------- | --------------------------------------------------------------------- |
| cloudType | `CloudType`                  | The type of cloud service to use ('iCloud' or 'gDrive')               |
| data      | `T`                          | The data to save                                                      |
| password  | `string`                     | The password to use for encryption                                    |
| filename  | `string`                     | The name to use for the saved file                                    |
| opts      | `CloudOptions<T>` (optional) | Additional options for customization. See below for more information. |

#### Options

The `CloudOptions<T>` object allows you to customize the behavior of `encryptAndSaveDataToCloud` by specifying alternate implementations for certain tasks. The available options are:

| Name        | Type                                                  | Description                                                                                                                                  |
| ----------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| encryptor   | `(pass: string, data: string) => string` (optional)   | An alternate function to use for encrypting the data. By default, AES-256-CBC is used.                                                       |
| decryptor   | `(pass: string, cipher: string) => string` (optional) | An alternate function to use for decrypting the data. By default, AES-256-CBC is used.                                                       |
| path        | `string` (optional)                                   | An alternate path to use for the saved file on the cloud service. By default, the file is saved in the `REMOTE_BACKUP_WALLET_DIR` directory. |
| scope       | `DataScope` (optional)                                | Specifies whether the saved file should be visible to other apps (`'visible'`) or only available to the current app (`'hidden'`).            |
| serialize   | `(data: T) => string` (optional)                      | An alternate function to use for serializing the data before it is encrypted and saved. By default, `JSON.stringify` is used.                |
| deserialize | `(s: string) => T` (optional)                         | An alternate function to use for deserializing the data after it has been retrieved and decrypted. By default, `JSON.parse` is used.         |

### Return value

- A Promise that resolves to the name of the saved file.

### Throws

If there is an error during the encryption or saving process, an Error will be thrown with one of the following messages:

- CLOUD_BACKUP_ERRORS.GENERAL_ERROR: An unspecified error occurred.
- CLOUD_BACKUP_ERRORS.INTEGRITY_CHECK_FAILED: The file was not successfully saved to the cloud.
