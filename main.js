/** Creëren van globale variabelen van de HTML ID's **/

var table = document.getElementById("tabel");
var totalamount = document.getElementById('totalamount');
var message= document.getElementById('message');

Cal();              // functie Cal aanroepen zodat het totaal gelijk berekent wordt

function Add() {
    var notitie = document.getElementById('notitie').value;         // waarde pakken van invoer veld
    var aantal = Number(document.getElementById('aantal').value);   // waarde pakken van invoer veld, Number zorgt er voor dat het geen string wordt
    var row = table.insertRow(1);                                   // nieuwe rij in tabel aanmaken
    var cell1 = row.insertCell(0).innerHTML = notitie;              // nieuwe notitie toevoegen met de html input waardes
    var cell2 = row.insertCell(1).innerHTML = aantal;               // nieuw aantal toevoegen met de html input waardes
    var cell3 = row.insertCell(2).innerHTML = "<input type='button' value='Delete' onclick='Delete(this)'>";        // delete knop toevoegen
    message.innerHTML = "Succesvol toegevoegd!";                    // op de berichten pagina laten weten dat het item succesvol is toegevoegd
    Cal();
}

function Delete(d) {
    var s = d.parentNode.parentNode.rowIndex;                   // nieuwe variable declareren en a.d.v. het this keyword als parameter wordt dit event getriggerd
    table.deleteRow(s);                                         // de huidige rij zal geheel verwijderd worden
    message.innerHTML = "Succesvol verwijderd!";                // op de berichten pagina laten weten dat het item succesvol is verwijderd
    Cal();
}

function Cal() {
    var arr =[];                                                            // een lege array definieren genaamd 'arr'
    for (var r = 1, n = table.rows.length -1; r < n; r++) {                 // door de rijen lopen, eerste en laatste worden overgeslagen
        for (var c = 1, m = table.rows[r].cells.length -1; c < m; c++) {    // door de cellen lopen, eerste en laatste worden overgeslagen
            arr.push(Number(table.rows[r].cells[c].innerHTML));             // de gele cellinhoud in numbers toevoegen aan de array
        }
    }

    var totaal = null;                          // totaal alvast declareren, maar is nog wel leeg

    for(var z in arr) {                         // lopen door alle getallen in de array
            totaal += arr[z];                   // en deze optellen en toevoegen aan totaal
        }

        totalamount.innerHTML = totaal;         // het totaal toevoegen aan de HTML-pagina
}