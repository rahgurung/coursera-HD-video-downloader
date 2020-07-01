chrome.webNavigation.onCompleted.addListener(
  (navigationEvent) => {
    const { tabId } = navigationEvent;
    chrome.tabs.executeScript(tabId, { file: 'in-content.js' });
  }, {
    url: [{
      hostSuffix: 'coursera.org',
    },
    {
      hostSuffix: 'coursera.com',
    }],
  },
);

chrome.runtime.setUninstallURL('https://forms.gle/i5kpP8FALCLBUQqH9');
