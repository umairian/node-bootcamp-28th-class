const express = require('express');

const router = express.Router();

const users = ["Kamran", "Wajid", "Ijaz", "Waleed"];

router.get("/", function(req, res) {
    res.status(200).send({ users });
});

router.get("/userData", function(req, res) {
    res.status(200).send({ name: "Kamran", age: 25 });
})

router.get("/:userId", function(req, res) {
    console.log("i am here")
    const userId = req.params.userId;
    res.status(200).send(users[userId]);
})

module.exports = router;