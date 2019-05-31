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
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds/production"
    }
  }
};
