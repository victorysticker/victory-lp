import { serve } from "bun";
import landingPage from './index.html';

const server = serve({
  routes: {
    "/": landingPage
  },
  hostname: "0.0.0.0"
})

console.log(`Listening on ${server.url}`)