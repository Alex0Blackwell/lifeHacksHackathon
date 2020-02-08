 var qrcode = new QRCode(document.getElementById("qrCodePlacement"), {
    width : 200,
    height : 200,
});

qrcode.makeCode("testing");  // test input must change later
