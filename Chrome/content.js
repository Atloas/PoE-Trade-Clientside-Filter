chrome.runtime.onMessage.addListener (
    function(request, sender, sendResponse) {
        if(request.message === "PoEFilter-Activated") {
            var characterNames = Array.from(document.querySelectorAll(".character-name"));
            //TODO: Load this list from some Chrome extension storage medium
            var filteredNames = ["Vurtelejka"];
            var toHide = characterNames.filter(name => filteredNames.includes(name.innerHTML.substr(5)));
            for (var i = 0; i < toHide.length; i++) {
                toHide[i].closest(".row").style.display = "none";
            }
        }
    }
);