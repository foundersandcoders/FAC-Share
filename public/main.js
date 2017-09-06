var url = document.getElementById('url');
var title = document.getElementById('title');
var submit = document.getElementById('submit');

submit.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('clicked!');

  var urlValue = url.value;
  var theTitle = title.value;

  var finalUrl = '/add-resource' + '?' + 'url=' + urlValue +'&title=' + theTitle;

  // '/add-resource?url=ndsjkfbnjksdbf&title=jsdnbfjksdbfkjsd
  httpRequest(finalUrl, 'POST', function() {
    console.log('done');
  })
})

var httpRequest = function(url, type, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(null, xhr.responseText);
    } else {
      cb('error ' + xhr.responseType);
    }
  }
  xhr.open(type, url, true);
  xhr.send();
}
