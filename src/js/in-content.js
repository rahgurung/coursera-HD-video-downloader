function injectButton() {
  // Grab section in each page where we will inject our button
  let videoToolBarSection = document.getElementsByClassName('rc-VideoToolbar horizontal-box wrap align-items-spacebetween');

  // In case of new UI
  if (videoToolBarSection.length < 1) {
    videoToolBarSection = document.getElementsByClassName('rc-VideoToolbar');
  }

  videoToolBarSection = videoToolBarSection[0].firstChild;

  // Extracting the video download link
  const targetedVideo = document.getElementsByClassName('vjs-tech');
  const downloadLink = targetedVideo[0].src;

  // Create our download button element
  const downloadButton = document.createElement('span');
  downloadButton.classList.add('container-courseraDownloader');
  downloadButton.innerHTML = `<a href=${downloadLink} target="_blank" class="courseraDownloaderButton">Download in HD</a>`;

  // Inject button
  videoToolBarSection.appendChild(downloadButton);
}

function checkIfButtonThere() {
  const noOfButtons = document.getElementsByClassName('courseraDownloaderButton');
  if (noOfButtons.length > 1) {
    noOfButtons[1].remove();
  }
}

// Detect until the required content is rendered dynamically
const obs = new MutationObserver(((mutations) => {
  for (let i = 0; i < mutations[0].addedNodes.length; i += 1) {
    if (mutations[0].addedNodes[i].nodeType === 1) {
      if (mutations[0].addedNodes[0].className === 'rc-VideoHighlightingManager') {
        injectButton();
        checkIfButtonThere();
      }
    }
  }
}));
obs.observe(document.body, {
  childList: true, subtree: true, attributes: false, characterData: false,
});
