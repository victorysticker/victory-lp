import { serve } from "bun";
import landingPage from "./index.html";

const server = serve({
	routes: {
		"/": landingPage,
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
