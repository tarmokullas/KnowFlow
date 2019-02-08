$("#myProgress").toggle();
$(".button_base").click(function() {
    $(".button_base").toggle();
    $("#myProgress").toggle();
    move();
});

var bar = new ProgressBar.Line(container, {
    strokeWidth: 2.3,
    easing: "easeInOut",
    duration: 4300,
    color: "#EEEE00",
    trailColor: "#C0C0C0",
    trailWidth: 1
});

bar.animate(0.5);

var bar1 = new ProgressBar.Line(container1, {
    strokeWidth: 2.3,
    easing: "easeInOut",
    duration: 4300,
    color: "#FF4500",
    trailColor: "#C0C0C0",
    trailWidth: 1
});

bar1.animate(0.175);

var bar2 = new ProgressBar.Line(container2, {
    strokeWidth: 2.3,
    easing: "easeInOut",
    duration: 4300,
    color: "#00FF00",
    trailColor: "#C0C0C0",
    trailWidth: 1
});

bar2.animate(0.9);

var data1 = (data = {
    datasets: [
        {
            data: [45, 75, 60, 15, 30],
            backgroundColor: ["#f38b4a", "#8b0000", "#2ca02c", "#6970d5", "#FF69B4"],
            hoverBackgroundColor: [
                "#f38b4a",
                "#8b0000",
                "#2ca02c",
                "#6970d5",
                "#FF69B4"
            ]
        }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        "Order confirmation",
        "Cutting logs",
        "Painting logs",
        "Packaging",
        "Cleaning the workplace"
    ]
});

var data2 = (data = {
    datasets: [
        {
            data: [7.5, 6, 12],
            backgroundColor: ["#e9ff33", "#2b18a1", "#bf06b7"],
            hoverBackgroundColor: ["#e9ff33", "#2b18a1", "#bf06b7"]
        }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Total time", "Activities", "Resources"]
});

var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
    type: "pie",
    data: data1,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {position: "right", padding: 1000},
        title: {display: true, text: "Working times"}
    }
});

var ctx1 = document.getElementById("myChart2").getContext("2d");

var myChart2 = new Chart(ctx1, {
    type: "bar",
    data: data2,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {position: "right", padding: 1000},
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        offsetGridLines: true
                    },
                    ticks: {
                        suggestedMin: 0
                    }
                }
            ]
        },
        title: {display: true, text: "General"}
    }
});
