chrome.runtime.onMessage.addListener (
    function(request, sender, sendResponse) {
        if(request.message === "PoEFilter-Activated") {
            var characterNames = document.querySelectorAll(".character-name");
            for (var i = 0; i < characterNames.length; i++) {
                console.log(characterNames[i].innerHTML);
            }
        }
    }
);