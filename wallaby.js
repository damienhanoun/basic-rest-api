module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/sinon/pkg/sinon.js', instrument: false},
      {pattern: 'libs/require.js', instrument: false},
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'test/**/*.ts', load: false, instrument:false},
      {pattern:'test/test-main.js', instrument: false},
      '!test/**/*spec.ts'
   ],

   tests: [
     {pattern: 'test/**/*.spec.ts', load: false}
   ],

   env: {
     kind: 'electron'
   },

   compilers:{
     '**/*.ts': wallaby.compilers.typeScript({
       'compilerOptions': {
          'module':'amd',
          'noImplicitAny': false,
          'noEmitOnError': true,
          'target': 'es5',
          'lib':['dom', 'es5', 'es2015.promise']
        },
        'include': [
          'src/**/*.ts',
          'test/**/*.ts'
        ]
      })
    }

  };
};
