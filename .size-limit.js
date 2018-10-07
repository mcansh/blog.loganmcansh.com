const { readdir } = require('mz/fs');

const pages = '.next/static/blog/pages';

const fileSizeOverrides = [
  { file: '_app.js', limit: '101521 B' },
  { file: '_error.js', limit: '4079 B' },
  { file: 'index.js', limit: '1592 B' },
  { file: 'html5-progress-element.js', limit: '31131 B' },
  { file: 'javascript-classes.js', limit: '29.42 KB' },
  { file: 'object-lifecycle-cheatsheet.js', limit: '30694 B' },
  { file: 'rack-key-concepts.js', limit: '29.88 KB' },
  { file: 'time-to-hex.js', limit: '30642 B' },
  { file: 'changelog.js', limit: '136.88 KB' },
];

const getPageSize = async () => {
  try {
    const files = await readdir(pages);
    return files.map(file => {
      const checkForMap = file.replace('.js.map', '.map');
      const extension = checkForMap.split('.');

      if (extension === 'map') return undefined;

      const config = {
        path: `${pages}/${file}`,
        webpack: false,
      };

      const applyOverride = fileSizeOverrides.find(
        override => override.file === file
      );

      if (applyOverride) {
        return { ...config, limit: applyOverride.limit };
      }

      return { ...config, limit: '20 KB' };
    });
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

module.exports = getPageSize();
