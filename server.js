import express from "express";
import routes from "./src/routes/postRoutes.js";

const app = express();
routes(app);

app.listen(3000, () => {
    console.log("servidor escutando...");
});

// function buscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id);
//     res.status(200).json(posts[index]);
// });