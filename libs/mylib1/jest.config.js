module.exports = {
  name: 'mylib1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/mylib1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
