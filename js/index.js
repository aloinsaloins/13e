$(function(){
    $('#qrcode').qrcode({
        text: location.href,
        width: 200,
        height: 200,
        background : "#fff",
        foreground : "#000"
    });
});

