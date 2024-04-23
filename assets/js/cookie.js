function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkAcceptCookie() {
    var acceptCookie=getCookie("acceptCookie");
    if (acceptCookie != "") {
        return true;
    } else {
       return false;
    }
  }

  function setAcceptCookie(cvalue = true){
    setCookie("acceptCookie", cvalue, 365);
  }

  function getAcceptCookie(){
    var acceptCookie=getCookie("acceptCookie");
    if (acceptCookie != "") {
        return acceptCookie == "true";
    } else {
       return false;
    }
  }