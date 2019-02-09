var veryVitalList = { 1: "idle", 2: "idle", 3: "idle", 4: "idle" };
var i = 1;
var totalTime = 0;

function changeColor() {
    var col = document.getElementById(
        "task" + Object.keys(veryVitalList)[i - 1].toString()
    );
    if (veryVitalList[i] == "idle") {
        t1 = Date.now();

        col.style.background = "yellow";
        veryVitalList[i] = "working";

        var timeCol = document.getElementById("aeg" + i.toString());
        timeCol.textContent = "...";

    } else if (veryVitalList[i] == "working") {
        t2 = Date.now();

        var timeCol = document.getElementById("aeg" + i.toString());

        timeCol.textContent = Math.round((t2 - t1) / 1000).toString() + " seconds";
        col.style.background = "purple";
        col.style.color = "white";
        totalTime += Math.round((t2 - t1) / 1000);
        var nextStep = document.getElementById("total_time_html");
        nextStep.textContent = totalTime;
        i += 1;
        changeColor();
    }
}