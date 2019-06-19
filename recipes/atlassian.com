{
        "name": "atlassian",
        "strategy": "oauth2",
        "options": {
            "authorizationURL": "https://auth.atlassian.com/authorize",
            "tokenURL": "https://auth.atlassian.com/oauth/token",
            "scope": "openid email",
            "scripts": {
                "fetchUserProfile": "function(access_token, ctx, callback) {\n  'use strict';\n\n  const jsonwebtoken = require('jsonwebtoken'); \n\n  if (!ctx.id_token) {\n    return callback('missing-id_token');\n  }\n\n  const jwt = jsonwebtoken.decode(ctx.id_token);\n\n  if (!jwt) \n    return callback('malformed-id_token');\n  \n  if (!jwt.sub) \n    return callback('missing-sub');\n  \n  if (!jwt.email) \n    return callback('missing-email');\n  \n\n  const profile = {\n    user_id: jwt.sub.replace(/^auth0\\|/, ''),\n    email: jwt.email,\n    user_metadata: {},\n    app_metadata: {}\n  };\n\n  if (jwt.picture) profile.picture = jwt.picture;\n  if (jwt.name) profile.name = jwt.name;\n  if (jwt.given_name) profile.given_name = jwt.given_name;\n  if (jwt.family_name) profile.family_name = jwt.family_name;\n\n  return callback(null, profile);\n}\n"
            }
        }
}
