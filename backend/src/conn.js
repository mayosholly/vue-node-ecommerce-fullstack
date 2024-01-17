import { MongoClient } from "mongodb"

const DB_URI = "mongodb://127.0.0.1:27017/vue-db"


const client = new MongoClient(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  let _db;
  
  module.exports = {
    connectToServer: async function (callback) {
  
      try {
        await client.connect();
      } catch (e) {
        console.error(e);
      }
      _db = client.db("vue-db");

    return (_db === undefined ? false : true);
  },
  getDb: function () {
    return _db;
  },
};