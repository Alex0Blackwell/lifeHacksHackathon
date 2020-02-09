var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 250,
        height : 250,
});

function makeCode () {
        var elText = document.getElementById("text");

        if (!elText.value) {
          elText.focus();
          return;
        }
        qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
        on("blur", function () {
                makeCode();
        }).
        on("keydown", function (e) {
                if (e.keyCode == 13) {
                        makeCode();
                }
});
