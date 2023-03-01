import express from "express"
import stream from "node-rtsp-stream"
import { middlewares, constants } from "./src/middlewares"

const app = express()
export default app
middlewares(app)

app.listen(constants.PORT, () =>
  console.log(`Server listening on PORT ${constants.PORT}!`)
)