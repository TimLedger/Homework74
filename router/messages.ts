import express from "express";
import fileDb from "../fileDb";
const messagesRouter = express.Router();

messagesRouter.get("/", async (req, res) => {
    const messages = await fileDb.getItems();
    res.send(messages.slice(-5));
});

messagesRouter.post("/", async (req, res) => {
    const post = await fileDb.addItem(req.body);
    res.send(post);
});

export default messagesRouter;