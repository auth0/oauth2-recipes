# Hawkeye-Recipes

[![Build Status](https://travis-ci.org/jcenturion/hawkeye-recipes.png)](https://travis-ci.org/jcenturion/hawkeye-recipes)

**Hawkeye Recipes** is a collection of recipes for [Auth0](https://auth0.com/) custom OAuth2 connections

## How to contribute

If you want to contribute to this collection, there two ways of doing it:

1. Go to [Custom Connections Dashboard](http://jcenturion.github.io/dashboard), create a connection and share! (It will create a PR agains this repo).
2. You can create a **PR** adding your recipe to the folder `recipes`. Once you get a green from the build, it will be merged into `master`.

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

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
