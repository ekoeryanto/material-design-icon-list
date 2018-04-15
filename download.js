const https = require('https');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/google/material-design-icons/master/iconfont/codepoints';

console.log('Fetching latest codepoints...');

https.get(url, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    const json = data.split(/\r?\n/).map(i => {
      const [name, unicode] = i.split(' ');

      return { name, unicode };
    });

    fs.writeFileSync('./src/icons.json', JSON.stringify(json, null, 2));
  });
});
