/*chrome.extension.sendMessage("request message", function(response_str){
    alert(response_str);
})*/


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.id == 'scanUrl') {
            console.log(request.urlResult);
        }
        else if(request.id == 'scanPage') {
            console.log(request);
            new Promise(function(resolve, reject){
                hyperlinks = [];
                var anchor_tags = document.getElementsByTagName("a");
                for(let i = 0; i < anchor_tags.length; i++) {
                    hyperlinks.push(anchor_tags[i].href);
                }
                fetch("https://glacial-ridge-51682.herokuapp.com/todo/api/v1/urlList", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "urllist": hyperlinks
                    }),
                })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result.response.detection);
                        resolve(result);
                    },
                    (error) => {
                        console.log(error);
                    }
                )
            }).then(function(resp) {
                console.log("returning response");
                sendResponse(resp);
            });
            return true;
        }
    }
);