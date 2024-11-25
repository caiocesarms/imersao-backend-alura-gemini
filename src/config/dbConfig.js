import { MongoClient } from "mongodb";

export default async function conectarAoBanco(strinConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(strinConexao);
        console.log('Conectando ao clust do bando de dados...');
        await mongoClient.connect();
        console.log('Conectando ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}