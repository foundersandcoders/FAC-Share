chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      var url = request.url;
      var title = request.title;
      var keywords = request.keywords;

      var finalUrl = 'https://fac-share.herokuapp.com/add-resource-ext' + '?' + 'url=' + url + '&title=' + title + '&keywords=' + keywords;;

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText)
          console.log(response);
          console.log(response.message);

          console.log('response: ', response);
          sendResponse(response);

          // if (response) {
          //   sendResponse(response);
          //   // var feedback = window.getElementById('feedback');
          //   // console.log(feedback);
          //   // feedback.innerHTML(response.message)
          // } else {
          //
          //   console.log(xhr.responseType);
          // }
        } else {

        }
        xhr.open("POST", finalUrl, true);
        xhr.send();

      }
    });
