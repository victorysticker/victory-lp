module.exports = {
	name: "Victory LP",
	script: "bun",
	args: "./src/index.ts",
	interpreter: "none",
	env: {
		PATH: `${process.env.HOME}/.bun/bin:${process.env.PATH}`, // Add "~/.bun/bin/bun" to PATH
	},
};
