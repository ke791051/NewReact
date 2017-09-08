import path from 'path'

module.exports = {
	env: require('./env'),
	cssSourceMap: true,
	assetBuildPath: path.resolve(__dirname, '..', '..', 'build')
}
