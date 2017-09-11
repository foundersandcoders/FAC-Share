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
    console.log(data);
    var section = document.getElementById('resourceDB')
    data.forEach(function(item) {
      var point = document.createElement("li");
      var newAnchor = document.createElement("a");
      newAnchor.textContent = item.title;
      newAnchor.setAttribute('href', 'http://www.' + item.url);
      var keywords = document.createElement("p");
      keywords.textContent = item.keywords;
      point.appendChild(newAnchor);
      point.appendChild(keywords);
      section.appendChild(point);
    })
  }

})()

document.getElementById('searchform').addEventListener("submit", function(event) {
  event.preventDefault();
  var searchquery = document.getElementById("searchinput").value;
  console.log("I am searchquery:  ", searchquery);
  var url = "/search" + "?" + searchquery;
  httpRequest(url, "GET", renderSearchResults);
})

function renderSearchResults(data) {
  var section = document.getElementById('searchResults')
  data.forEach(function(item) {
    var point = document.createElement("li");
    var newAnchor = document.createElement("a");
    newAnchor.textContent = item.title;
    newAnchor.setAttribute('href', item.url);
    var keywords = document.createElement("p");
    keywords.textContent = item.keywords;
    point.appendChild(newAnchor);
    point.appendChild(keywords);
    section.appendChild(point);
  })
}

var httpRequest = function(url, type, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      cb(data);
    } else {
      cb('error ' + xhr.responseType);
    }
  }
  xhr.open(type, url, true);
  xhr.send();
}
