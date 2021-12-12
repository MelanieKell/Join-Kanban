function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}




function showHover() {
  if (window.location.href == 'http://gruppe-126.developerakademie.net/Join-Kanban/board.html') {
      document.getElementById('link-board').classList.add('active')
  }
  if (window.location.href == 'http://gruppe-126.developerakademie.net/Join-Kanban/backlog.html') {
      document.getElementById('link-backlog').classList.add('active')
  }
  if (window.location.href == 'http://gruppe-126.developerakademie.net/Join-Kanban/addtask.html') {
      document.getElementById('link-addtask').classList.add('active')
  }
  if (window.location.href == 'http://gruppe-126.developerakademie.net/Join-Kanban/help.html') {
      document.getElementById('link-help').classList.add('active')
  }
}












/**
 * Shows sidebar fullscreen
 */
 function sidebarFullscreen() {
    document.getElementById('id-body').classList.add('stop-scrolling');

    document.getElementById('id-sidebar').classList.remove('side-bar');
    document.getElementById('id-sidebar').classList.add('sidebarFullscreen');

    document.getElementById('id-linkText').classList.remove('link-text');
    document.getElementById('id-linkText').classList.add('link-textFullscreen');

    document.getElementById('id-links').classList.remove('links');
    document.getElementById('id-links').classList.add('linksFullscreen');

    document.getElementById('id-profilePicture').classList.add('div-profilePicture');

    document.getElementById('id-member-img').classList.remove('member-img');
    document.getElementById('id-member-img').classList.add('member-imgFullscreen');
}

/**
 * Shows the arrow which leads to the top if scrolled past certain pixels
 */
 window.onscroll = showBtn;

 function showBtn() {
     if (scrolledPastCertainPixels()) {
         document.getElementById('id-scrollToTop').classList.remove('d-none');
     } else {
         document.getElementById('id-scrollToTop').classList.add('d-none');
     }
 }

 /**
 * Gave condition meaning for clean coding
 * @returns - Whether the certain pixels passed
 */
function scrolledPastCertainPixels(){
  return document.body.scrollTop > 300 || document.documentElement.scrollTop > 300;
}

/**
 * Clicked on the arrow image it jumps back to the top 
 */
 function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  })
}