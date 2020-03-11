import { ErrorRequestHandler } from "express"

import { logger } from "../loaders"

const errorHandler: ErrorRequestHandler = async (error, _, res, _next) => {
  logger.error(error)

  res.status(error.status || 500).send(error.message || "Oops.")
}

export { errorHandler }
