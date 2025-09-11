import { file, resolve, serve } from "bun";
import landingPage from "./pages/desktop/desktop.html";

const ampFilePath = await resolve("./pages/amp/amp.html", import.meta.dir);

const server = serve({
	routes: {
		"/": landingPage,
		"/amp": {
			GET() {
				return new Response(file(ampFilePath));
			},
		},
		"/amp/": {
			GET() {
				return new Response(file(ampFilePath));
			},
		},
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
