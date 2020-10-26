chrome.runtime.onMessage.addListener (
    function(request, sender, sendResponse) {
        if(request.message === "PoEFilter-Activated") {
            var characterNames = Array.from(document.querySelectorAll(".character-name"));
            var blacklist = characterNames.map(name => name.innerHTML.substr(5));
            //TODO: Let the user modify this list properly, remove this set
            //TODO: Switch to sync storage
            chrome.storage.sync.set({"blacklist": blacklist}, function() {
                console.log('PoETCF: Saved blacklist: ' + blacklist);
              });
            chrome.storage.sync.get(["blacklist"], function(result) {
                blacklist = result.blacklist;
                console.log('PoETCF: Retreived blacklist: ' + blacklist);
              });
            if (blacklist != undefined) {
                var toHide = characterNames.filter(name => blacklist.includes("IGN: " + name.innerHTML));
                for (var i = 0; i < toHide.length; i++) {
                    toHide[i].closest(".row").style.display = "none";
                }
            }
        }
    }
);