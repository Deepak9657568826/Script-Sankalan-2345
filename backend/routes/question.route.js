const express = require("express");
const { QuestionModel } = require("../models/question.model");
const { auth } = require("../middleware/auth.middleware");
const { access } = require("../middleware/access.middleware");
const questionRouter = express.Router();


// Add Question
questionRouter.post("/add", auth, access(["admin"]), async(req, res) => {
    try {
        const note = new QuestionModel(req.body);
        await note.save();
        res.status(200).send({ msg: "New Question Added." });
    } catch (err) {
        // console.log("Error:", err);
        res.status(400).send({ msg: "Bad Request." });
    }
});

questionRouter.get("/:questionId", async(req, res) => {
    const { questionId } = req.params;
    console.log("questionId", questionId);
    try {
        const question = await QuestionModel.findOne({
            _id: questionId,
        });
        res.status(200).send({ question });
    } catch (err) {
        // console.log("Error:", err);
        res.status(400).send({ msg: "Bad Request." });
    }
});

questionRouter.get("/", async(req, res) => {
    try {
        const questions = await QuestionModel.find();
        res.status(200).send({ questions });
    } catch (err) {
        // console.log("Error:", err);
        res.status(400).send({ msg: "Bad Request." });
    }
});

// Update Question
questionRouter.patch("/:questionID", auth, access(["admin"]),
    async(req, res) => {
        const { questionID } = req.params;
        try {
            const question = await QuestionModel.findOne({ _id: questionID });
            if (question.userID === req.body.userID) {
                await QuestionModel.findByIdAndUpdate({ _id: questionID }, req.body);
                res
                    .status(200)
                    .send({
                        msg: `The note with ID: $ { questionID }
                        has been updated.`
                    });
            } else {
                res.status(400).send({ msg: "You are not authorised." });
            }
        } catch (err) {
            res.status(400).send({ error: err });
        }
    }
);

// Delete Question
questionRouter.delete("/:questionID", auth, access(["admin"]), async(req, res) => {
    const { questionID } = req.params;
    try {
        const question = await QuestionModel.findOne({ _id: questionID });
        if (question.userID === req.body.userID) {
            await QuestionModel.findByIdAndDelete({ _id: questionID }, req.body);
            res
                .status(200)
                .send({ msg: `The note with ID:${questionID} has been deleted.` });
        } else {
            res.status(400).send({ msg: "You are not authorised." });
        }
    } catch (err) {
        res.status(400).send({ error: err });
    }
});

module.exports = {
    questionRouter,
};