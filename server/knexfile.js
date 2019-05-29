// sets up the environment in which we will be using our express app, either production or development
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'maricopa-healthy',
      host: process.env.DB_HOST,
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.RDS_DB_NAME,
      host: process.env.RDS_HOSTNAME,
      port: process.env.RDS_PORT,
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production',
    },
  },
};