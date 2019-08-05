# OAuth2 Recipes

[![Build Status](https://travis-ci.org/auth0/oauth2-recipes.png)](https://travis-ci.org/auth0/oauth2-recipes)

This is a collection of recipes for [Auth0](https://auth0.com/) custom OAuth2 connections

## How to contribute

Install the [Custom Social Connections Extension](https://auth0.com/docs/extensions/custom-social-extensions), configure your new social connection, save it, and then click Share. That will create a PR agains this repo.

**We are not currently merging new connections to this repo.** You can still share the PR so others could use it as an example of how to configure the connection.

**Note**: The build will check the following schema:

```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/",
  "type": "object",
  "properties": {
    "name": {
      "id": "name",
      "type": "string"
    },
    "strategy": {
      "id": "strategy",
      "type": "string"
    },
    "options": {
      "id": "options",
      "type": "object",
      "properties": {
        "authorizationURL": {
          "id": "authorizationURL",
          "type": "string"
        },
        "tokenURL": {
          "id": "tokenURL",
          "type": "string"
        },
        "scope": {
          "id": "scope",
          "type": "string"
        },
        "scripts": {
          "id": "scripts",
          "type": "object",
          "properties": {
            "fetchUserProfile": {
              "id": "fetchUserProfile",
              "type": "string"
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```
## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
