
$("#ShortUrl")
    .val(chrome.extension.getBackgroundPage().url)
    .click(function() {
        $(this).select();
        document.execCommand('copy');
        //alert("Copied");
    });
