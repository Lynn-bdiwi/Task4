
var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    en: {
        welcome:"Welcome to our store",
        logout:"Logout",
        sure:"Are you sure you want to log out?",
        cancel:"cancel"
    },
    ar: {
        welcome:"أهلا بكم في متجرنا",
        logout:"تسجيل الخروج",
        sure:"هل متأكد تريد تسجيل الخروج؟",
        cancel:"الغاء"    
    },
    fr:{
        welcome: "Bienvenue dans notre magasin",
        logout: "Déconnexion",
        sure: "Êtes-vous sûr de vouloir vous déconnecter ?",
        cancel: "Annuler"
    },
    gr:{
        welcome: "Willkommen in unserem Geschäft",
        logout: "Ausloggen",
        sure: "Sind Sie sicher, dass Sie sich abmelden möchten?",
        cancel: "Abbrechen"
    }
};




function updateContent() {
    const lang = window.location.hash.substring(1) || 'en'; // Default to English if no hash
    if (language[lang]) {
        document.getElementById("sure").textContent = language[lang].sure;
        document.getElementById("welcome-logout").value = language[lang].logout; // Use value for buttons
        document.getElementById("cancel").value = language[lang].cancel;
        document.getElementById("wel-logout-button").value = language[lang].logout; // Use value for buttons
        document.getElementById("welcome").textContent = language[lang].welcome; // Update welcome message
    }
}

// Initial content update
updateContent();

// Event listener for hash change
window.addEventListener('hashchange', updateContent);

// Set up click events for language links
dataReload.forEach(link => {
    link.onclick = function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.location.hash = this.getAttribute('href'); // Change the hash
    };
});


  function godark(){
    document.body.style.background="#232D3F";
    document.getElementById("wel-logout-button").style.background="#005B41"
    document.getElementById("welcome").style.background="#008170"
    document.getElementById("welcome").style.webkitBackgroundClip="text";
    document.getElementById("welcome").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#005B41";
    document.getElementById("dark-button").style.background="#005B41";
    document.getElementById("sure").style.background="#005B41";
    document.getElementById("sure").style.webkitBackgroundClip="text";
    document.getElementById("sure").style.webkitTextFillColor="transparent";
    document.getElementById("welcome-logout").style.background="#005B41";
    document.getElementById("cancel").style.background="#005B41";
    document.getElementById("cancel").style.webkitBackgroundClip="text";
    document.getElementById("cancel").style.webkitTextFillColor="transparent"; 
    document.getElementById("light-button").style.background="#005B41";


}
function golight(){
    document.body.style.background="linear-gradient(108.81deg, #7C8761 -21.51%, #80AF81 36.42%, rgba(26,83,25,0.9) 87.8%)";
    document.getElementById("wel-logout-button").style.background="#7C8761AB";
    document.getElementById("welcome").style.background="linear-gradient(180deg, #508D4E -14.81%, #161313 100%)"
    document.getElementById("welcome").style.webkitBackgroundClip="text";
    document.getElementById("welcome").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#7C8761AB";
    document.getElementById("dark-button").style.background="#7C8761AB";
    document.getElementById("sure").style.background="#80AF81";
    document.getElementById("sure").style.webkitBackgroundClip="text";
    document.getElementById("sure").style.webkitTextFillColor="transparent";
    document.getElementById("welcome-logout").style.background="#7C8761AB";
    document.getElementById("cancel").style.background="#7C8761A1";
    document.getElementById("cancel").style.webkitBackgroundClip="text";
    document.getElementById("cancel").style.webkitTextFillColor="transparent"; 
    document.getElementById("light-button").style.background="#7C8761AB";

}
  
