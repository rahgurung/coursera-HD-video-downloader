const myscript = `function downloadURI(uri, name) 
{
    var link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    link.setAttribute('download', name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
}`;

function injectButton() {
    console.log("HELOO WORLD")

    // Grab section in each post
    const sections = document.getElementsByClassName('_1qfi0x77')
    const video = document.getElementsByClassName('vjs-tech')
    const link = video[0].src;
    const db = document.createElement('span')
    db.setAttribute('download', true);
    db.innerHTML = `<a onclick="downloadURI('${link}', 'video.webm')" class="_o4kklvw rc-VideoToolbarButton" style="padding-bottom: 7px;padding-top: 7px; min-height:32px; font-size: smaller; margin-left: 6px; font-weight: 100;" download>Download in HD</a>`
    sections[1].appendChild(db);

    // Creating a script
    const data = document.createElement('script')
    data.innerHTML = myscript
    document.body.appendChild(data)
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