
const presets = [
	[
        "@babel/preset-env", {
            "useBuiltIns": "usage",
            "loose": true,
            "modules": "auto",
            "corejs": 3
    	}
    ]
]
const plugins = []

if (process.env["ENV"] === "prod") {

}

module.exports = { presets, plugins }
