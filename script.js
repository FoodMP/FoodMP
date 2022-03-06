        window.addEventListener('scroll', function(){
            var header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        function toggleMenu(){
            var  menuToggle = document.querySelector('.toggle');
            var  menu = document.querySelector('.menu');
            menuToggle.classList.toggle('active')
            menu.classList.toggle('active')
        }
        function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
        window.oncontextmenu = function () {
            console.log("Right Click Disabled");
            return false;
        }
document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    alert("smh why u tryna see my scource code");
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    alert("smh why u tryna see my scource code");
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    alert("smh why u tryna see my scource code");
    return false;
  }
}, false);
