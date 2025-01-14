import { decideVersion } from '@codemod-utils/blueprints';

const latestVersions = new Map([
  ['@babel/core', '7.22.11'],
  ['@babel/eslint-parser', '7.22.11'],
  ['@codemod-utils/ast-javascript', '0.3.4'],
  ['@codemod-utils/ast-template', '0.3.1'],
  ['@codemod-utils/blueprints', '0.2.1'],
  ['@codemod-utils/ember-cli-string', '0.1.1'],
  ['@codemod-utils/files', '0.5.3'],
  ['@codemod-utils/json', '0.4.2'],
  ['@codemod-utils/tests', '0.3.1'],
  ['@sondr3/minitest', '0.1.1'],
  ['@tsconfig/node16', '16.1.1'],
  ['@tsconfig/strictest', '2.0.2'],
  ['@types/node', '16.18.47'],
  ['@types/yargs', '17.0.24'],
  ['@typescript-eslint/eslint-plugin', '6.5.0'],
  ['@typescript-eslint/parser', '6.5.0'],
  ['concurrently', '8.2.1'],
  ['eslint', '8.48.0'],
  ['eslint-config-prettier', '9.0.0'],
  ['eslint-import-resolver-typescript', '3.6.0'],
  ['eslint-plugin-import', '2.28.1'],
  ['eslint-plugin-n', '16.0.2'],
  ['eslint-plugin-prettier', '5.0.0'],
  ['eslint-plugin-simple-import-sort', '10.0.0'],
  ['eslint-plugin-typescript-sort-keys', '3.0.0'],
  ['lerna-changelog', '2.2.0'],
  ['prettier', '3.0.3'],
  ['typescript', '5.2.2'],
  ['yargs', '17.7.2'],
]);

export function getVersion(packageName: string): string {
  return decideVersion(packageName, {
    dependencies: new Map(),
    latestVersions,
  });
}
