const fs = require('fs');

fs.writeFile('./public/count.json', '{ "showContentForMinute": true }', 'utf8', (err) => {
  if (err) throw err;
});
