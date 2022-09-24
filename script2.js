"use strict"
console.log("Your Computer has Virus");
function adminbnt() {
   document.getElementById("adminlogin").style.display = "block"
}
let Adminlogininput = document.getElementById("adminlogininput")
let Adminlogininput2 = document.getElementById("adminlogininput2")
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
function Profile() { // Funfaction for Admin panel "+" Toggle Button//
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

}
function Logoutcancel() {// Cancel the Logout and go back to main Admin menu and give the logout button a another id (-> its visibel right now)//
   document.getElementById("logoutquestion").style.display = "none"
   document.getElementById("dropdownlogoutinvis").id = "dropdownlogout"
}

function Logoutproceed() {// Log the Admin out of the Admin panel (relogin possibel)//
   document.getElementById("Profile").style.display = "none"
   document.getElementById("Dropdownmenu").style.display = "none"
   document.getElementById("dropdown").innerHTML = "+"
   document.getElementById("logoutquestion").style.display = "none"
   document.getElementById("dropdownlogoutinvis").id = "dropdownlogout"



}
