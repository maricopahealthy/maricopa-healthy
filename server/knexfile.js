// sets up the environment in which we will be using our express app, either production or development
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: 'maricopa-healthy',
      host: process.env.DB_HOST,
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  production: {
    client: "pg",
    connection: {
      database: process.env.RDS_DB,
      host: process.env.RDS_HOST,
      user: process.env.RDS_USER,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PORT
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds/production"
    }
  }
};
