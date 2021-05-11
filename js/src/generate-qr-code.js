var qrcode = new QRCode("qr-code", {
    text: window.location.href,
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});