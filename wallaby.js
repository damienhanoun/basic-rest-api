module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'libs/require.js', instrument: false},
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'test/**/*.ts', load: false},
      {pattern:'test/test-main.js', instrument: false},
      '!test/**/*spec.ts'
   ],

   tests: [
     {pattern: 'test/**/*.spec.ts', load: false}
   ],

   env: {
      kind: 'electron'
    }

  };
};