import { serve } from "bun";
import landingPage from './index.html';

const server = serve({
  routes: {
    "/": landingPage
  },
  hostname: "0.0.0.0",
  port: 443,
  tls: {
    cert: Bun.file("cert.pem"),
    key: Bun.file("key.pem")
  }
})

console.log(`Listening on ${server.url}`)