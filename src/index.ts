import { serve } from "bun";
import ampPage from "./pages/amp.html";
import landingPage from "./pages/index.html";

const server = serve({
	routes: {
		"/": landingPage,
		"/amp": ampPage,
	},
	development:
		process.env.NODE_ENV === "development"
			? {
					console: true,
					hmr: true,
				}
			: false,
});

console.log(`Listening on ${server.url}`);
