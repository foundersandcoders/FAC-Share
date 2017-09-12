document.getElementById('plus').addEventListener("click", function(event) {
  document.getElementById("modal-background").classList.toggle("hidden");
})

document.getElementById('close').addEventListener("click", function(event) {
  document.getElementById("modal-background").classList.toggle("hidden");
})

document.getElementById("search-icon").addEventListener("click", function(event) {
  document.getElementById('searchform').submit()
})
