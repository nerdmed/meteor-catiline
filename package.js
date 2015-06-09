Package.describe({
  name: 'nerdmed:catiline',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Easy to use web workers library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nerdmed/meteor-catiline.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('catiline.js', 'client');
});