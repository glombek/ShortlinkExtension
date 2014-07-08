chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if(msg.req == "url") 
    {
        var url=document.location;var links=document.getElementsByTagName('link');var found=0;for(var i = 0, l; l = links[i]; i++){if(l.getAttribute('rel')=='shortlink') {found=l.getAttribute('href');break;}}if (!found) {for (var i = 0; l = document.links[i]; i++) {if (l.getAttribute('rel') == 'shortlink') {found = l.getAttribute('href');break;}}}if (found) {sendResponse(found);}
    }
  });