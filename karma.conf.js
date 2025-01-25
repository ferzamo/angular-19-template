module.exports = function (config) {
  config.set({
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'text-summary',
      dir: 'coverage/',
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
    },
  });
};
