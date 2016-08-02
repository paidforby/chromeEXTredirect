chrome.webRequest.onBeforeRequest.addListener(
    
        function(details) { return {redirectUrl: "http://www.github.com/"}; },
        
        {urls: ["*://www.facebook.com/*"]},
        
        ["blocking"]);
