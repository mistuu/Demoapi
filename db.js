

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dev:Devashish@123@cluster0.cujnq7r.mongodb.net/demo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("demo").collection("demo");
  // perform actions on the collection object
  client.close();
});

require("dotenv").config();



module.exports = async () => {

  try {

    const connection ="mongodb+srv://dev:Devashish@123@cluster0.cujnq7r.mongodb.net/demo?retryWrites=true&w=majority";
    const connectionParams = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,

    };

    await mongoose

      .connect(connection, connectionParams)

      .then(() => console.log("connection sucessfull"));

  } catch (error) {

    console.log(error);

    console.log("could not connect to database");

  }

};
