function messageHandler(e) {
    if (e.data === "fetch") {
        fetch();
    }
}

function fetch() {
    var xmlhttp;
    console.log('5555');
    if (XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var html = "";
            var res = JSON.parse(xmlhttp.responseText);
            for (var i = 0; i < res.length; i++) {
                html += '<li>' + res[i] + '</li>';
            }
            postMessage(html);
        }
    }

    xmlhttp.open('GET', '/Home/Date', false);
    xmlhttp.send();
}
addEventListener("message", messageHandler, true);