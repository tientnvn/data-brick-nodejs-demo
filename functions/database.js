const { DBSQLClient } = require('@databricks/sql');
const { databricksConfig } = require('../constants/index');

exports.dataBricksBuilder = async () => {
    const client = new DBSQLClient();
    await client.connect(databricksConfig);
    return client;
};

exports.runQueryDataBricks = async (session, query) => {
    const queryOperation = await session.executeStatement(query);
    const result = await queryOperation.fetchAll();
    await queryOperation.close();
    return result;
}