import path from 'path'

module.exports = {
	env: require('./env'),
	cssSourceMap: false,
	assetBuildPath: path.resolve(__dirname, '..', '..', 'build'),
	webpackDevServerPort: 5000,
	browserSyncPort: 5000
}