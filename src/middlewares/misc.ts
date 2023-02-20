import cors from "cors"
import express from "express"
import router from "../routes"

export function middlewares(app: any) {
  app.use(cors())
  app.use(express.json())
  app.use("/", router)
}