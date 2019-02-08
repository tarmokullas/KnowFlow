$("#myProgress").toggle();
$(".button_base").click(function () {
    $(".button_base").toggle();
    $("#myProgress").toggle();
    move();
});

var target = document.getElementById('foo');
var spinner = new Spinner(opts).spin(target);

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 1000);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

