import fs from "fs"
import path from "path"
import { Router } from "express"

const modules = {}
const router = Router()
const basename = path.basename(__filename)

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file) => {
    modules[file.split(".")[0]] = require(path.join(__dirname, file))
    router.use(`/${file.split(".")[0]}`, modules[file.split(".")[0]])
  })

export default router