<<<<<<< HEAD
chrome.contextMenus.create({"title": "Scan URL...", "contexts":["link"], "id": "scanningURL"});
chrome.contextMenus.create({"title": "Scan Page...", "contexts":["page"], "id": "scanningPage"});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "scanningURL") {
        console.log("Scanning Url");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {id: "scanUrl", url: info.linkUrl}, function(response) {
                console.log(response);
            });
        });
    }
    else if(info.menuItemId == "scanningPage") {
        console.log("Scanning Page");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"id": "scanPage"}, function(response) {
                console.log(response);
            });
        });
    }
});
=======
chrome.webNavigation.onCompleted.addListener(function() {
    chrome.tabs.executeScript( null, {file: 'js/scan.js'});
}, {url: [{urlMatches : '<all_urls>'}]});

chrome.contextMenus.create({"title": "Scan URL...", "contexts":["link"], "id": "scanningURL"});
chrome.contextMenus.create({"title": "Scan Page...", "contexts":["page"], "id": "scanningPage"});
>>>>>>> parent of 03c94bf... Cleaning branch
