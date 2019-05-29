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
      database: os.environ['RDS_DB_NAME'],
      host: os.environ['RDS_HOSTNAME'],
      port: os.environ['RDS_PORT'],
      username: os.environ['RDS_USERNAME'],
      password: os.environ['RDS_PASSWORD']
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production',
    },
  },
};