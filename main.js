let c = 300000.00;
function getInputValue(){
    let f = document.getElementById("f").value *1000000;
    let l_onda = document.getElementById("l_onda").value /100;
    l_onda = l_onda *2;
    let v = f * l_onda;
    let v_luz = v / 1000;
    v_luz = v_luz.toFixed(2);
    var target = document.getElementById("res");
    target.innerHTML = " "+v_luz+" Km/s";
    target.innerHTML = " "+v_luz+" Km/s";
    let ea = Math.abs(v_luz-c);
    ea = ea/c * 100;
    ea = ea.toFixed(2);
    var target = document.getElementById("err");
    target.innerHTML = "     *Error Relatiu: "+ea+"%";
}
