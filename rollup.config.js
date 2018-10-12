import json from 'rollup-plugin-json';
import { resolve } from 'path'

const plugins = [json()];

const files = ['categories', 'icons', 'ids', 'index', 'list'];
const formats = ['umd', 'cjs', 'esm', 'iife'];

const createOutput = ({format, file}) => {
  let output = {
    format,
    file: resolve('dist', format === 'iife' ? '' : format, `${file}.js`)
  }

  if (format === 'umd' || format === 'iife') {
    output.name = 'materialDesignIconList'
  }

  return output
};

export default files.map(file => {
  return {
    plugins,
    input: `src/${file}`,
    output: formats.map(format => createOutput({format, file}))
  };
});
