/* eslint-disable no-console */
const https = require('https');
const fs = require('fs');
const path = require('path')

const url = 'https://material.io/tools/icons/static/data.json';

console.log('Fetching latest data...');

https.get(url, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    let json, ids, categories, list;

    try {
      json = JSON.parse(data);
      categories = json.categories;
      ids = [].concat.apply([], categories.map(cat => cat.icons));
      list = ids.map(c => c.id);
    } catch (error) {
      console.error('ERROR: can not parse downloaded data.');
      process.exit(1);
    }

    const listFile = list => path.resolve(__dirname, '..', 'data', `${list}.json`)

    fs.writeFileSync(listFile('icons'), data);
    fs.writeFileSync(listFile('categories'), JSON.stringify(categories));
    fs.writeFileSync(listFile('list'), JSON.stringify(list));
    fs.writeFileSync(listFile('ids'), JSON.stringify(ids));
  });
});
