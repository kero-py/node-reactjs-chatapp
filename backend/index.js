const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

    try {

        const r = await axios.put('https://api.chatengine.io/users/',
         {username: username, secret: username, first_name: username},
         {headers: {"private-key": "a2ad5e97-dd1d-425d-b811-46abe7da5761"}})

    } catch (e) {

    }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);