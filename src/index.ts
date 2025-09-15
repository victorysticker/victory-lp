import os from "node:os";
import { file, resolve, type Server, serve } from "bun";

const ampFilePath = await resolve("./pages/amp/amp.html", import.meta.dir);
const landingPageFilePath = await resolve(
	"./pages/desktop/desktop.html",
	import.meta.dir,
);

const server = serve({
	routes: {
		"/": {
			GET(req) {
				const page = new Response(file(landingPageFilePath));

				const cleanedUserAgent = req.headers.get("user-agent")?.toLowerCase();

				if (!cleanedUserAgent) {
					console.log({
						headers: req.headers,
						cleanedUserAgent: "no user-agent header",
					});
					return page;
				}

				const isMobileAgent = /(android|iphone|ipad)/i.test(cleanedUserAgent);

				const isGoogleBot = cleanedUserAgent.includes("googlebot");

				console.log({
					host: req.headers.get("host"),
					cleanedUserAgent,
					isGoogleBot,
					isMobileAgent,
				});

				if (isGoogleBot) {
					return page;
				}

				if (isMobileAgent) {
					if (process.env.NODE_ENV === "development") {
						return Response.redirect("/amp");
					}

					return Response.redirect("https://britbonglogpost.com/amp");
				}

				return page;
			},
		},
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

console.log(`Listening on ${getNetworkAddress(server)}`);

function getNetworkAddress(server: Server): string | null {
	if (process.env.NODE_ENV === "production") {
		return server.url.origin;
	}

	const networkInterfaces = os.networkInterfaces();

	for (const interfaceName in networkInterfaces) {
		const interfaces = networkInterfaces[interfaceName];

		if (!interfaces) {
			continue;
		}

		for (const iface of interfaces) {
			if (iface.family === "IPv4" && !iface.internal) {
				return `http://${iface.address}:${server.port}`;
			}
		}
	}

	return null; // Return null if no suitable interface is found
}
