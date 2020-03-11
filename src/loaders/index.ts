import { Application } from "express"
import { NotFound } from "http-errors"

import { errorHandler } from "../middleware"
import { errorLoggerMiddleware, logger, loggerMiddleware } from "./logger"
import { router } from "../routes"

const initLoaders = (app: Application) => {
  app.use(loggerMiddleware)

  app.use("/", router)

  app.use(() => {
    throw new NotFound("Oops, Not found")
  })

  app.use(errorHandler)

  app.use(errorLoggerMiddleware)
}

export { initLoaders, logger }
