// index.js

document.getElementById('resumeButton').addEventListener('click', function () {
  // Navigate to your PDF resume
  window.location.href = './assests/images/AmishaShahi_Resume_ (3).pdf';
});

document.getElementById('resumeButtonSidebar').addEventListener('click', function () {
  // Navigate to your PDF resume
  window.location.href = './assests/images/AmishaShahi_Resume_ (3).pdf';
});
document.addEventListener("DOMContentLoaded", function () {
  
  var loader = document.querySelector(".loader");
  loader.classList.add("transition"); // Add transition class

  window.addEventListener("load", function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 1000); 
  });

});
