function sanitizeLink(url) {



  // remove https://
   if (url.slice(0,8) === 'https://') {
    url = url.slice(8);
  }

  // remove http://
  if (url.slice(0,7) === 'http://') {
    url = url.slice(7);
  }

  // remove 'www'
  if (url.slice(0,4) === 'www.') {
    url = url.slice(4);
  }

  // remove '/' at if exists at end
  if (url[url.length - 1] === '/') {
      url = url.slice(0, url.length - 1);
  }
  return url;
}

module.exports = sanitizeLink;
