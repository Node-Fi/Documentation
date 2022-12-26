# Getting Started

Get started by installing the cloud backup package. This package is independent, and does not require the Node React Native SDK in order to use.

## Installation

```bash
$ yarn add @node-fi/cloud-backup
```

or

```bash
$ npm install @node-fi/cloud-backup
```

### iOS

On iOS, iCloud pages are used by default. On Android, google drive is used.

Make sure that iCloud Drive is enabled. For testing and confirmation purposes, it could be helpful to have the iCloud Drive app available.

For iOS, the following lines needed to be added to the `info.plist` in order to request proper permissions. Replace `package-name` and `app-name` with their respective values where appropriate.

```xml
<key>NSUbiquitousContainers</key>
<dict>
    <key>iCloud.{package-name}</key>
    <dict>
        <key>NSUbiquitousContainerIsDocumentScopePublic</key>
        <true/>
        <key>NSUbiquitousContainerSupportedFolderLevels</key>
        <string>One</string>
        <key>NSUbiquitousContainerName</key>
        <string>{app-name}</string>
    </dict>
</dict>
```

#### Enable `iCloud` under Capabilities for your build target.

1. Navigate to your build target in xcode, and then to `Signing & Capabilities`
2. Click `+ Capability` in the upper left corner of the window
   ![Capability button in upper left corner of xcode](/img/cloud-backup-ios/upper-left-capability.png)
3. Search for and select `iCloud`
4. Scroll down to the `iCloud` section that should have appeared in the `Signing and Capabilities` tab
5. Enable `iCloud Documents` and (optionally) `Key-value storage` by clicking on the corresponding check box
6. Click the `+` button to add a new container
7. Title the container `iCloud.{app-name}`
   ![Container name](/img/cloud-backup-ios/new-container.png)
8. At the end, your `iCloud` section of `Signing and Capabilities` should look like so:
   ![End state](/img/cloud-backup-ios/end-state.png)

### Android

Enable Google Drive API:

It's complicated! Here's a [video](https://www.youtube.com/watch?v=RezC1XP6jcs&feature=youtu.be&t=3m55s) of someone doing a similar thing for the Google Drive API demo.

- Create a [new project](https://console.developers.google.com/apis/dashboard) for your app (if you don't already have one)
  - Under `Credentials`, choose `Create Credentials` > `OAth client ID`
    - Choose `Android` and enter a name
    - enter your SHA1 fingerprint (use the keytool to find it, eg: `keytool -exportcert -keystore path-to-debug-or-production-keystore -list -v`)
    - enter your package name (found in your manifest file)
    - copy the _OAuth client ID_
- Click Library, choose `Drive API` and enable it
  - Click `Drive UI Integration`
    - add the mandatory application icons
    - under `Drive integration` > `Authentication`
      - check `Automatically show OAuth 2.0 consent screen when users open my application from Google Drive` and enter your _OAuth client ID_
      - enter an _Open URL_

Add the following to your `app/build.gradle` in the `dependecies` section (you can change the version to suit your application):

    compile ('com.google.android.gms:play-services-drive:10.2.0') {
        force = true;
    }
