import { httpRequest } from "../src/services/api/http"

const request = httpRequest({
  url: "http://localhost:8080",
  headers: {
    Accept: "application/json",
  },
})

describe("Test", () => {
  it("test", async () => {
    request<{ x: string }>("GET", "test2")

    expect(true).toBeTruthy()
  })
})
