chrome.contextMenus.create({"title": "Scan URL...", "contexts":["link"], "id": "scanningURL"});
chrome.contextMenus.create({"title": "Scan Page...", "contexts":["page"], "id": "scanningPage"});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "scanningURL") {
        fetch("https://glacial-ridge-51682.herokuapp.com/todo/api/v1/url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "url": info.linkUrl
            }),
        })
        .then(res => res.json())
        .then(
            (result) => {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {"id": "scanUrl", urlResult: result}, function(response) {
                      console.log(response);
                    });
                });
                console.log(result.response.detection);
            },
            (error) => {
                console.log(result);
            }
        )
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