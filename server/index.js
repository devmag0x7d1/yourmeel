import fs from "fs"
import express from "express"
import cors from "cors"

let data = JSON.parse(fs.readFileSync("./data.json"))

const app = express()

app.use(cors())
app.use(express.json())
app.use("/assets", express.static("assets"))

app.get("/food/:id", (req, res) => {
	const { id } = req.params

	res.status(200).json(data[id])
})

app.listen(3000)
