
if (window.getSelection().toString()) {
    chrome.extension.sendRequest({
        selected_text: window.getSelection().toString(),
        title: document.title,
        url: location.href
    });
}
