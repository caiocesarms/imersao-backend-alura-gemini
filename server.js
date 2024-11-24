import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato fazendo yoga",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gato com cara de feliz",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gato com cara de sonolento",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gato com cara de pensativo",
        imagem: "https://placecats.com/millie/300/150"
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});