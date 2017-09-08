var url = document.getElementById('url');
var title = document.getElementById('title');
var submit = document.getElementById('submit');

(function() {
  xhrRequest('/get-resource', renderDom);

  function xhrRequest(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        cb(data);
      }
    }
    xhr.open('GET', url, true);
    xhr.send();
  }

  function renderDom(data) {
    console.log("I am data ", data)
    var section = document.getElementById('resourceDB')
    data.forEach(function(item) {
      var point = document.createElement("li");
      var newAnchor = document.createElement("a");
      newAnchor.textContent = item.title;
      newAnchor.setAttribute('href', item.url);
      point.appendChild(newAnchor);
      section.appendChild(point);
    })
  }

})()

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
