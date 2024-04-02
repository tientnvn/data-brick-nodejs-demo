module.exports.databricksConfig = {
    authType: "databricks-oauth",
    host: process.env.DATABRICKS_HOST || "",
    path: process.env.DATABRICKS_PATH || "",
    port: process.env.DATABRICKS_PORT || "",
    oauthClientId: process.env.DATABRICKS_CLIENT_ID || "",
    oauthClientSecret: process.env.DATABRICKS_CLIENT_SECRET || "",
    useDatabricksOAuthInAzure: true,
    https: true,
    proxy: {
        protocol: process.env.DATABRICKS_HTTP_PROXY_PROTOCOL || "",
        host: process.env.DATABRICKS_HTTP_PROXY_HOST || "",
        port: process.env.DATABRICKS_HTTP_PROXY_PORT || "",
    }
}

