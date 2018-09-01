const https = require('https');
const fs = require('fs');
const startcase = require('lodash.startcase')

const url = 'https://material.io/tools/icons/static/data.json';

console.log('Fetching latest data...');

https.get(url, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    let json, nameId, categories;
    try {
      json = JSON.parse(data)
      categories = json.categories
      json = [].concat.apply([], json.categories.map(cat => cat.icons))
      nameId = json.map(j => ({id: j.id, name: startcase(j.id)}))
    } catch (error) {
      console.error(error)
    }

    fs.writeFileSync('./icons.json', data);
    fs.writeFileSync('./categories.json', JSON.stringify(categories));
    fs.writeFileSync('./id.json', JSON.stringify(json));
    fs.writeFileSync('./name-id.json', JSON.stringify(nameId));
  });
});

