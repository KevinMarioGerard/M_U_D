chrome.webNavigation.onCompleted.addListener(function() {
    chrome.tabs.executeScript( null, {file: 'js/scan.js'});
}, {url: [{urlMatches : 'https://*/'}]});

chrome.contextMenus.create({"title": "Scan URL...", "contexts":["link"], "id": "scanningURL"});
chrome.contextMenus.create({"title": "Scan Page...", "contexts":["page"], "id": "scanningPage"});
