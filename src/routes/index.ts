import { Router } from "express"

import { httpRequest } from "../services/api/http"

const request = httpRequest({
  url: "http://localhost:8080",
  headers: {
    Accept: "application/json",
  },
})

const router = Router()

router.get("/", async (_, res) => {
  request<{ x: string }>("GET", "test2")
  res.send("test")
})

export { router }
