chrome.webNavigation.onCompleted.addListener(
    function (navigationEvent) {

        let tabId = navigationEvent.tabId
        chrome.tabs.executeScript(tabId, { file: 'in-content.js' })
    }, {
    url: [{
        hostSuffix: 'coursera.org'
    },
    {
        hostSuffix: 'coursera.com'
    }]
});

chrome.runtime.setUninstallURL('https://forms.gle/i5kpP8FALCLBUQqH9')
