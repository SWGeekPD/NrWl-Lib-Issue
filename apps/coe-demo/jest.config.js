module.exports = {
  name: 'coe-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/coe-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
