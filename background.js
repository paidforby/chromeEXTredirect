chrome.webRequest.onBeforeRequest.addListener(   // Checking if it is not redirecting to all steps.
    function(details) {
            return {
                redirectUrl: "http://www.github.com"
            };
        
    },

    // Applies to following url patterns
    {
        urls: [ "*://www.facebook.com/*/"]
    },

    // In request blocking mode
    [ "blocking" ]
);