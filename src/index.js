require("dotenv").config();
const { Sequelize } = require('sequelize');

const server = require("./server");

const port = process.env.PORT;
const env = process.env.NODE_ENV;

const sequelize = new Sequelize(
process.env.DB_NAME,
process.env.USERNAME,
process.env.PASSWORD, 
{
  host: 'localhost',
  dialect: 'mysql'
})


server.listen(port, async () => {
  console.debug(`Server is listening on port ${port}`);
  console.debug(`Current environment is ${env}`);
});

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database')
  })
  .catch(e => {
    console.error('connection failed: ', e)
  })
