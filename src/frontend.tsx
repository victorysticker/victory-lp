document.addEventListener("DOMContentLoaded", () => {
	console.log({
		domain: window.location.hostname,
		referrer: document.referrer,
		userAgent: navigator.userAgent,
	});
});
