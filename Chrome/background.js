//chrome.pageAction.onClicked.addListener(function(tab) {
//    chrome.tabs.sendMessage(tab.id, {req: "url"}, function(url){
//        
//    if (url) {
//        chrome.windows.create({url: url, type:"popup", width:400, height:300});
//    }
//    });
//});

/*
chrome.runtime.onInstalled.addListener(function() 
                                       {
                                          
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // If there is a <link> with rel="shortlink"
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            css: ["link[rel='shortlink']"]
          })
        ],
        // Show the icon
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
        
  });
});
*/

var url = "";

function refresh(tabId) {
    chrome.tabs.sendMessage(tabId, {req: "url"}, function(res){
        
    if (res) {
        url = res;
        chrome.pageAction.show(tabId);
    } else {
        chrome.pageAction.hide(tabId);
    }
    });
}

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  refresh(tabId);
});

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  if (change.status == "complete") {
    refresh(tabId)
  }
});

// Ensure the current selected tab is set up.
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  refresh(tabs[0].id);
});