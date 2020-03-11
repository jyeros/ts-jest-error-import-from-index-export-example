import "express-async-errors"
import express from "express"
import path from "path"

import { initLoaders, logger } from "./loaders"

const app = express()

app.set("view engine", "pug")

app.use(express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "views"))

initLoaders(app)

app.listen(3001, () => {
  logger.info(`Server running in port ${3001}`)
})
