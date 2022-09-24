"use strict"
console.log("Nur die wahren OG´s haben dieses Easteregg gefunden");
let Eventsubmit = document.getElementById("Eventsubmit");
let Eventinput = document.getElementById("Eventinput");
let Eventinput2 = document.getElementById("Eventinput2")
let Suggestionscount = 0 // Quite important variable for the suggestion system 
let Blacklistarray = ["Tanja",] // Blacklist list (array) very important for suggestionssystem//
let Blacklistword = 0




function Eventsubmitsc() {
    let Eventvorschläge = document.getElementById("Eventvorschläge");
    let Eventinput = document.getElementById("Eventinput");
    let Eventinput2 = document.getElementById("Eventinput2")
    let Von = "  Von:  "
    let Absatz = "  //"

    for (let Blacklistitem of Blacklistarray) {
     if (Blacklistitem == Eventinput.value || Blacklistitem == Eventinput2.value ) {
        alert("Das Script geht !!!")
        break;
     }
     else if (Eventinput.value.length == 0 && Eventinput2.value.length == 0) {// Checks if both input fields are empty if yes then error message for the user//
     // && in if statment as indicator to add another condition//
     document.getElementById("submitcard").id = "submitcardfalse";
        document.getElementById("submitcardfalse").innerHTML = "Textfelder Leer"
        document.getElementById("Eventinput").style.borderColor = "#f2685e"
        document.getElementById("Eventinput2").style.borderColor = "#f2685e"
        setTimeout(() => { document.getElementById("submitcardfalse").style.display = "none"; }, 1900)
        setTimeout(() => { document.getElementById("Eventinput2").style.borderColor = "white"; }, 3300)
        setTimeout(() => { document.getElementById("Eventinput").style.borderColor = "white"; }, 3300)
     } else if (Eventinput.value.length ==0 ) { // Checks if Input field is empty if yes then error message for the user//
        document.getElementById("submitcard").id = "submitcardfalse";
        document.getElementById("submitcardfalse").innerHTML = "Textfeld Leer"
        document.getElementById("Eventinput").style.borderColor = "#f2685e"
        setTimeout(() => { document.getElementById("submitcardfalse").style.display = "none"; }, 1900)
        setTimeout(() => { document.getElementById("Eventinput").style.borderColor = "white"; }, 3300)
     } else if (Eventinput2.value.length == 0) { // Checks if Input field2 is empty if yes then error message for the user//
        document.getElementById("submitcard").id = "submitcardfalse";
        document.getElementById("submitcardfalse").innerHTML = "Textfeld Leer"
        document.getElementById("Eventinput2").style.borderColor = "#f2685e"
        setTimeout(() => { document.getElementById("submitcardfalse").style.display = "none"; }, 1900)
        setTimeout(() => { document.getElementById("Eventinput2").style.borderColor = "white"; }, 3300)
      
     }
     else { /* Mainsript for suggestions add a console warning and log the suggestion in console and
            set a new item in the local storage and save it forever (well until someone cleared it)*/
            console.warn("Neuer vorschlag");
            console.table('\x1b[32m%s\x1b[0m', Eventinput.value + Von + Eventinput2.value);
            window.localStorage.setItem("Vorschlag" + Suggestionscount, Eventinput.value + Absatz + Von + Eventinput2.value)
            Suggestionscount++ 
            document.getElementById("submitcard").style.display = "block";
            setTimeout(() => { document.getElementById("submitcard").style.display = "none"; }, 1900)
     }
    }
     
}
function adminbnt() {
    document.getElementById("adminlogin").style.display = "block"
}

function adminsubmitbtn() {
    if (document.getElementById("adminlogininput").value == "LocalAdmin" && (document.getElementById("adminlogininput2").value == "1")) {
        document.getElementById("Profile").style.display = "block"
        document.getElementById("adminlogin").style.display = "none"




    }
    else {
        document.getElementById("adminlogin").style.display = "none";
        document.getElementById("Adminbutton").style.display = "none";
    }


}
var toggled = false;
function Profile() { // function for Admin panel "+" Toggle Button//
    if (!toggled) {
        toggled = true
        document.getElementById("Dropdownmenu").style.display = "none"
        document.getElementById("dropdown").innerHTML = "+"
        return;
    }
    if (toggled) {
        toggled = false
        document.getElementById("Dropdownmenu").style.display = "block"
        document.getElementById("dropdown").innerHTML = "-"
        return;
    }



}
function adminlogout() { // Open a "Are you sure" Question and give the logout button a another id (-> its invisibel right now)//
    document.getElementById("dropdownlogout").id = "dropdownlogoutinvis"
    document.getElementById("logoutquestion").style.display = "block"
    document.getElementById("dropdownsuggestions").id = "dropdownsuggestionsinvis"
    

}
function Logoutcancel() {// Cancel the Logout and go back to main Admin menu and give the logout button a another id (-> its visibel right now)//
    document.getElementById("logoutquestion").style.display = "none"
    document.getElementById("dropdownlogoutinvis").id = "dropdownlogout"
    document.getElementById("dropdownsuggestionsinvis").id = "dropdownsuggestions"
    
}

function Logoutproceed() {// Log the Admin out of the Admin panel (relogin possibel)//
    document.getElementById("Profile").style.display = "none"
    document.getElementById("Dropdownmenu").style.display = "none"
    document.getElementById("dropdown").innerHTML = "+"
    document.getElementById("logoutquestion").style.display = "none"
    document.getElementById("dropdownlogoutinvis").id = "dropdownlogout"
}
function suggestionswindow(){ // Onlick Event for Suggestions button from the Admin panel (opens a completed new window with features)
document.getElementById("suggestions").style.display = "block"
document.getElementById("Dropdownmenu").id = "Dropdownmenuinvis"
document.getElementById("dropdownlogout").id = "dropdownlogoutinvis"
document.getElementById("dropdownsuggestions").id = "dropdownsuggestionsinvis"
document.getElementById("Profile").id = "Profileinvis"
document.getElementById("Profileimg").id = "Profileimginvis"
document.getElementById("suggesamount").innerHTML = "Suggestionsamount:" +  Suggestionscount;


}
function suggesclar(){// Clears the local Storage and sets the Suggestioncount to 1(its but otherwise 0 will displayed first in local storage) so 
localStorage.clear()
Suggestionscount = 0
}
function suggessclose(){// Close the Suggestions window and goes back to the admin panel
document.getElementById("suggestions").style.display = "none"
document.getElementById("Dropdownmenuinvis").id = "Dropdownmenu"
document.getElementById("dropdownlogoutinvis").id = "dropdownlogout"
document.getElementById("dropdownsuggestionsinvis").id = "dropdownsuggestions"
document.getElementById("Profileinvis").id = "Profile"
document.getElementById("Profileimginvis").id = "Profileimg"
}


