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

/**
 * Shows sidebar fullscreen
 */
 function sidebarFullscreen() {
    document.getElementById('id-sidebar').classList.remove('side-bar');
    document.getElementById('id-sidebar').classList.add('sidebarFullscreen');

    document.getElementById('id-links').classList.remove('links');
    document.getElementById('id-links').classList.add('linksFullscreen');

    document.getElementById('id-joinlogoFullscreen').classList.add('img-joinlogo');

    document.getElementById('id-profilePicture').classList.add('div-profilePicture');

    document.getElementById('id-member-img').classList.remove('member-img');
    document.getElementById('id-member-img').classList.add('member-imgFullscreen');
}