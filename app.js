import express from "express"
import postsRouter from "./routers/postsRouter.js"

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {

    const resData = {

        data: "Benvenuti nell'api delle piante officinali"
    };

    res.json(resData);
})
app.use("/post", postsRouter);


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})