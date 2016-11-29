/**
 * Created by 0samuel0 on 21-11-2016.
 */

//** Global vars **\\
var expenses = [];
var total = 0;

//** Add another expense to the list **\\
function expensesAdd(){
    if(document.getElementById("expenseAdd").elements[0].value == "" || 0 || undefined){
        document.getElementById("output4").innerHTML = "Please enter an amount.";
    }else{
        expenses.push(parseInt(document.getElementById("expenseAdd").elements[0].value));
        expensesList();
        expensesTotal();
    }
}

//** Publish the list of expenses **\\
function expensesList(){
    var result = "";
    if(expenses.length == 0){
        console.log("There are no expenses in your list. Please add them.");
    }else {
        for (var i = 0; expenses.length > i; i++) {
            var num = parseInt(i);
            if(expenses[num] === undefined){
                console.log("Skipping empty slot");
            } else {
                result += expenses[num] + ' <button onclick="expensesDel(' + num + ')">Delete</button><br/>';
            }
        }
    }
    document.getElementById("output4").innerHTML = result;
}

//** Calculate the total of all expenses **\\
function expensesTotal(){
    for(var i = 0; expenses.length > i; i++){
        if(expenses[i] === undefined) {
            console.log("Skipping empty slot");
        }else{
            total += expenses[i];
            console.log(total);
        }
    }
    document.getElementById("output3").innerHTML = total;
    total = 0;
}

//** Remove an expense from the list **\\
function expensesDel(num){
    expenses[num] = undefined;
    document.getElementById("output4").innerHTML = "";
    expensesList();
    expensesTotal();
}