const fs = require('fs')
export function loadContent ({filename}) {
    return fs.existsSync(filename) ? fs.readFileSync(filename, 'utf8') : '';
  }
  
export const saveContent = ({filename, content}) => {
    fs.writeFileSync(filename, content, 'utf8');
  }