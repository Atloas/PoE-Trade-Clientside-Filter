chrome.runtime.onMessage.addListener (
    function(request, sender, sendResponse) {
        if(request.message === "PoEFilter-Activated") {
            var characterName = document.querySelector(".character-name").innerHTML;
            console.log(characterName);
        }
    }
);