import json from 'rollup-plugin-json';

const plugins = [json()];

const files = ['categories', 'icons', 'ids', 'index', 'list'];
const formats = ['umd', 'cjs', 'esm'];

const createOutput = ({format, file}) => {
  if (format === 'umd') {
    return {
      format,
      file: `dist/${file}.js`,
      name: 'window',
      extend: true
    };
  }
  return {
    format,
    file: `dist/${file}.${format}.js`
  };
};

export default files.map(file => {
  return {
    plugins,
    input: `src/${file}`,
    output: formats.map(format => createOutput({format, file}))
  };
});
