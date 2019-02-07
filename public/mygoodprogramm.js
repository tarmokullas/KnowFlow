var data1 = (data = {
  datasets: [
    {
      data: [45, 75, 60, 15, 225, 30],
      backgroundColor: [
        "#f38b4a",
        "#56d798",
        "#ff8397",
        "#6970d5",
        "#2ca02c",
        "#d62728"
      ],
      hoverBackgroundColor: [
        "#f38b4a",
        "#56d798",
        "#ff8397",
        "#6970d5",
        "#2ca02c",
        "#d62728"
      ]
    }
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    "Order confirmation",
    "Gathering the load",
    "Checking materials",
    "Beginnning of production",
    "Production",
    "Selling"
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
    legend: { position: "right", padding: 1000 },
    title: { display: true, text: "Working times" }
  }
});

var ctx1 = document.getElementById("myChart2").getContext("2d");

var myChart2 = new Chart(ctx1, {
  type: "bar",
  data: data2,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: "right", padding: 1000 },
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
    title: { display: true, text: "General" }
  }
});
