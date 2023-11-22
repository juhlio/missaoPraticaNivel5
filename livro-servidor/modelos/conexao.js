const banco = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

banco
  .connect("mongodb://127.0.0.1:27017/livraria", options)
  .then(() =>{ console.log("conexão efetuada com sucesso"); }) 
  .catch((err) => console.log(err));
module.exports = banco;

// const mongoUrl = "mongodb://localhost:3030/livraria";

// try{
//   banco.createConnection(mongoUrl, options);
//   console.log("conexão efetuada com sucesso");
// } catch(err) {
//   console.error(`error: ${err} na tentativa de conectar com o banco de dados`);
// }

// module.exports = banco;