require('dotenv').config();
const { dataBricksBuilder, runQueryDataBricks } = require('./functions/database');

const { DATABRICKS_TABLE } = process.env;

const checkData = async () => {

  try {
    const dataBricksClient = await dataBricksBuilder();
    const session = await dataBricksClient.openSession();
    const query = `SELECT  * FROM ${DATABRICKS_TABLE}`
    const result = await runQueryDataBricks(session, query);
    console.log("Result: ", result.length);
  } catch (error) {
    console.log("Error while query data " + error)
  }
}


checkData();