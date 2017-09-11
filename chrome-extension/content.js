chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    var url = request.url;
    var title = request.title;

    var finalUrl = 'https://fac-share.herokuapp.com/add-resource-ext' + '?' + 'url=' + url + '&title=' + title;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.log(xhr.responseType);
      }
    }
    xhr.open("POST", finalUrl, true);
    xhr.send();

    sendResponse({});

  });
