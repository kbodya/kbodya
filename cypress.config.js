const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'itzaoa',
  e2e: {
    baseUrl: 'http://localhost:1234',
    excludeSpecPattern: ['**/2-advanced-examples/*'],
    testIsolation: false,
  }
})