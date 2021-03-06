/*
The subject of a commit must respect a template < type >: <subject>.
Type can be: 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style' and 'test'.
The subject must be write in lower case.

See the documentation of the conventional config of commitlint.
https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional  */

module.exports = { extends: ['@commitlint/config-conventional'] };
