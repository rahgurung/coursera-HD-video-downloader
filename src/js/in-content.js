function injectButton() {
    console.log("HELOO WORLD")

    // Grab section in each post
    const sections = document.getElementsByClassName('_1qfi0x77')
    const video = document.getElementsByClassName('vjs-tech')
    const link = video[0].src;
    const db = document.createElement('span')
    db.setAttribute('download', true);
    db.innerHTML = `<a href=${link} target="_blank" class="_o4kklvw rc-VideoToolbarButton" style="padding: 7px 5px 7px 5px; min-height:31.99px; font-size: 14px; margin-left: 6px; font-weight: 400; border-color: #ddd; color: #757575;" download>Download in HD</a>`
    sections[1].appendChild(db);
}

// Detect until the required content is rendered dynamically
var obs = new MutationObserver(function (mutations, observer) {
    for (var i = 0; i < mutations[0].addedNodes.length; i++) {
        if (mutations[0].addedNodes[i].nodeType == 1) {
            console.log(mutations);
            if (mutations[0].addedNodes[0].className == 'nostyle rc-ReviewPageLink') {
                injectButton();
            }
        }
    }
});
obs.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });