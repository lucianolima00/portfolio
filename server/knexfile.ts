import path from 'path';

// Update with your config settings.

module.exports = {

  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },

  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    tableName: "knex_migrations"
  },

  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
};
