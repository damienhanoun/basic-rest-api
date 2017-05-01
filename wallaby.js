module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'libs/require.js', instrument: false},
      {pattern: 'src/**/*.ts', load: false},
      {pattern:'test/test-main.js', instrument: false}
   ],

   tests: [
     {pattern: 'test/**/*.spec.ts', load: false}
   ]
   
  };
};
