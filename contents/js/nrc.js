function buildText(name, value, path, domain) {
  return `${name}=${value};path=${path};domain=${domain}`;
}


var name = 'counter';
var value = '0';
var path = '/';
var text = buildText(name, value, path, "");

document.cookie = text;

console.log(`Set cookie to ${text}`)
