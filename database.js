const yenv = require("yenv");

const env = yenv("./database.yml");

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@pczaobala.ogugu.mongodb.net/${env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

let dbConnection;

module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      console.log("CONECTADO CACETE");
      if (err) {
        console.error(err);
        return err;
      } else {
        console.log("AKI TAMBEM");
        const db_name = env.DB_NAME;

        dbConnection = db.db(db_name);
        console.log(`Conectado com sucesso a ${db_name}`);
      }
    });
  },

  getDb: () => {
    return dbConnection;
  },
};
