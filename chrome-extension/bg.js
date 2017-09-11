chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  // grab the url and title and append to our popup.html input fields
  var urlElement = document.getElementById('url')
  var titleElement = document.getElementById('title');
  urlElement.value = tabs[0].url;
  titleElement.value = tabs[0].title;

  document.getElementById('submit').addEventListener('click', function() {
    chrome.tabs.sendMessage(tabs[0].id, {url : tabs[0].url, title: tabs[0].title}, function(response) {
      // do something with response
    });
  })
});
