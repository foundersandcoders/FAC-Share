document.getElementById('plus').addEventListener("click", function(event) {
  document.getElementById("modal-background").classList.toggle("hidden");
})

document.getElementById('submit').addEventListener("click", function(event) {
  var ifUrlGood = url.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

  var ifTitleEmpty = title.value.replace(/\s+/g, '').length;
  var ifUrlEmpty = url.value.replace(/\s+/g, '').length;

  if (ifUrlEmpty == 0 || ifUrlGood == null) {
    alert("You haven't added a proper URL!")
    event.preventDefault();
  } else if (ifTitleEmpty == 0) {
    alert("You haven't added title!")
    event.preventDefault();
  } 
})

document.getElementById('close').addEventListener("click", function(event) {
  document.getElementById("modal-background").classList.toggle("hidden");
})

document.getElementById("search-icon").addEventListener("click", function(event) {
  document.getElementById('searchform').submit()
})
