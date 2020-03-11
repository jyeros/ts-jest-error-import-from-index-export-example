import { Client } from "@elastic/elasticsearch"
import elasticSearch from "winston-elasticsearch"
import expressWinston from "express-winston"
import winston from "winston"

const elasticSearchOptions = {
  level: "info",
  indexPrefix: "import",
  indexSuffixPattern: "YYYY.MM.DD",
  client: new Client({ node: "http://localhost:9003/elasticsearch" }),
}

const console = new winston.transports.Console()

const transports = false ? [new elasticSearch(elasticSearchOptions), console] : [console]

const loggerMiddleware = expressWinston.logger({
  transports: transports,
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
})

const errorLoggerMiddleware = expressWinston.errorLogger({
  transports: transports,
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
})

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: transports,
})

export { loggerMiddleware, errorLoggerMiddleware, logger }
