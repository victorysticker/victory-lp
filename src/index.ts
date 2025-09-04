import { serve } from "bun";
import landingPage from './index.html';

const server = serve({
  routes: {
    "/": landingPage
  },
  hostname: "0.0.0.0",
  port: 443,
  tls: {
    cert: Bun.file("../../cert.pm"),
    key: Bun.file("../../key.pm")
  }
})

console.log(`Listening on ${server.url}`)