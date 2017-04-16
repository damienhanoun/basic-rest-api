function buildConfig(env) {
  return require('./webpackConfigs/' + env + '.js')(env)
}

module.exports = buildConfig;
