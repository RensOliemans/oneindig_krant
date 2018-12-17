function buildText(name, value, path, domain) {
  return `${name}=${value};path=${path};domain=${domain}`;
}

var name = 'TID_ID';
var value = '';
var path = '/';
var domain = '.volkskrant.nl';
var text = buildText(name, value, path, domain)

document.cookie = text;

console.log(`Set cookie to ${text}`)
