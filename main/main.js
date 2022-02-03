let v_luz;
let c = 300000;
function getInputValue(){
    let f = document.getElementById("f").value *10^6;
    let l_onda = document.getElementById("l_onda").value *10^-2;
    l_onda = l_onda *2;
    let v = f * l_onda;
    v_luz = v / 10^-3;
    var target = document.getElementById("res");
    target.innerHTML = " "+v_luz+" Km/s";
    let ea = Math.abs(v_luz-c);
    ea = ea/c * 100;
    ea = ea.toFixed(2);
    var target = document.getElementById("err");
    target.innerHTML = "     Error: "+ea+"%";
}
