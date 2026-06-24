function grade()
{
    let a = Number(document.getElementById("s1").value);
    let b = Number(document.getElementById("s2").value);
    let c = Number(document.getElementById("s3").value);
    let d = Number(document.getElementById("s4").value);

    let total = a + b + c + d;
    let avg = total / 4;

    let g;

    if(avg >= 90)
        g = "A";
    else if(avg >= 75)
        g = "B";
    else if(avg >= 50)
        g = "C";
    else
        g = "Fail";

    document.getElementById("result").innerHTML =
        "Total Marks = " + total +
        "<br>Average = " + avg.toFixed(2) +
        "<br>Grade = " + g;
}