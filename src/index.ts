import { serve } from "bun";
import landingPage from './index.html';

const server = serve({
  routes: {
    "/": landingPage
  },
})

console.log(`Listening on ${server.url}`)