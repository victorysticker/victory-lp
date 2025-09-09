import { serve } from "bun";
import landingPage from './index.html';

const server = serve({
  routes: {
    "/": landingPage
  },
  development: {
    console: true,
    hmr: true
  }
})

console.log(process.env.NODE_ENV)

console.log(`Listening on ${server.url}`)