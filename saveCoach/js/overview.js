/**
 * Created by 0samuel0 on 21-11-2016.
 */
function calculate(){
    //** Global vars **\\
    var monthIn = document.getElementById("adjustSaldo").elements[0].value;
    var monthOut = document.getElementById("adjustSaldo").elements[1].value;
    var curSaldo = document.getElementById("adjustSaldo").elements[3].value;
    var minSaldo = document.getElementById("adjustSaldo").elements[2].value;
    var curOver = monthIn - monthOut;
    var exSaldo;

    //** Calculate how much to adjust your current saldo to fit your saving wishes **\\
    function adjustSaldo() {
    if(curSaldo === "" || minSaldo === "" || monthIn === "" || monthOut === ""){
        document.getElementById("output").innerHTML = "Please fill in the form.";
    }else if(curSaldo > minSaldo){
        exSaldo = curSaldo - minSaldo;
        curOver += exSaldo;
        curSaldo -= exSaldo;
        document.getElementById("output").innerHTML = "Your current saldo was higher than the minimum €" + minSaldo + " that you require." +
            "\nThe amount needed to adjust the current saldo to the minimum was €" + exSaldo +
            ".\n After adjusting you have a total of €" + curOver + " to save.";
    }else if(curSaldo == minSaldo){
        document.getElementById("output").innerHTML = "Your current saldo is equal to the minimum €" + minSaldo + " you require." +
            "\nThe amount left for you to save is €" + curOver + ".";
    }else{
        exSaldo = minSaldo - curSaldo;
        curOver -= exSaldo;
        curSaldo +=exSaldo;
        document.getElementById("output").innerHTML = "Your current saldo was lower than the minimum €" + minSaldo + " you required. " +
            "\n The amount needed to adjust this was €" + exSaldo +
            ".\n After adjusting the remaining amount left to save is €" + curOver + ".";
    }
}
    //** Calculate the percentage of the expenses against the income**\\
    function percent(){
    var multiplier = monthIn / 100;
    var percentage = monthOut / multiplier;
    if(monthOut > monthIn){
        document.getElementById("output2").innerHTML = "Your expenses are " + percentage + "% of your total income. \n" +
            "You should either find a new job, or cut some expenses.";
    } else if(monthIn > monthOut) {
        document.getElementById("output2").innerHTML = "Your expenses make up " + percentage + "% of your total income.";
    }
}
    //** Run all functions **\\
    adjustSaldo();
    percent();
}