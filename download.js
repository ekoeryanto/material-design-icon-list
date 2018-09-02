const https = require('https');
const fs = require('fs');

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

    fs.writeFileSync('./data/icons.json', data);
    fs.writeFileSync('./data/categories.json', JSON.stringify(categories));
    fs.writeFileSync('./data/list.json', JSON.stringify(list));
    fs.writeFileSync('./data/ids.json', JSON.stringify(ids));
  });
});
