
var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    en: {
        login:"Login",
        signup:"Signup",
        userName:"User Name",
        rePassword:"Re Password",
        certificate:"Upload Certificate",
        haveAccount:"have an account?",
        email:"Email",
        phoneNumber:"Phone Number",
        password:"Password"
    },
    ar: {
        login:"تسجيل الدخول",
        signup:"تسجيل",
        userName:"اسم المستخدم",
        rePassword:"اعادة كلمة السر",
        certificate:"تحميل الشهادة",
        haveAccount:"لديك حساب؟  ",
        email:"البريد الالكتروني",
        phoneNumber:"رقم الهاتف",
        password:"كلمة السر"
    },
    fr:{
        login: "Connexion",
        signup: "Inscription",
        userName: "Nom d'utilisateur",
        rePassword: "Répéter le mot de passe",
        certificate: "Télécharger le certificat",
        haveAccount: "Vous avez un compte?",
        email: "Email",
        password: "Mot de passe",
        phoneNumber: "Numéro de téléphone"
    },
    gr:{
        login: "Einloggen",
        signup: "Registrierung",
        userName: "Benutzername",
        rePassword: "Passwort wiederholen",
        certificate: "Zertifikat hochladen",
        haveAccount: "Haben Sie ein Konto?",
        email: "E-Mail",
        password: "Passwort",
        phoneNumber: "Telefonnummer"
    }
};




function updateContent() {
    const lang = window.location.hash.substring(1) || 'en'; // Default to English if no hash
    if (language[lang]) {
        document.getElementById("signup-h1").textContent = language[lang].signup;
        document.getElementById("username").placeholder = language[lang].userName;
        document.getElementById("email").placeholder = language[lang].email;
        document.getElementById("re-password").placeholder = language[lang].rePassword;
        document.getElementById("phonenumber").placeholder = language[lang].phoneNumber;
        document.getElementById("password").placeholder = language[lang].password;
        document.getElementById("certificate").placeholder = language[lang].certificate;
        document.getElementById("button").value = language[lang].signup;
        document.getElementById("have").textContent = language[lang].haveAccount;
        document.getElementById("ll").textContent = language[lang].login;



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
    document.getElementById("signup-h1").style.background="#008170"
    document.getElementById("signup-h1").style.webkitBackgroundClip="text";
    document.getElementById("signup-h1").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#005B41";
    document.getElementById("dark-button").style.background="#005B41"; 
    document.getElementById("light-button").style.background="#005B41";
    document.getElementById("button").style.background="#005B41";
    document.getElementById("ll").style.color="#008170";
    var x = document.getElementsByTagName("input");
    for(let i=0; i < x.length -1 ; i++){
        x[i].style.borderBottomColor="black"
    }

}
function golight(){
    document.body.style.background=" linear-gradient(108.81deg, #7C8761 -21.51%, #80AF81 36.42%, rgba(26,83,25,0.9) 87.8%)";
    document.getElementById("signup-h1").style.background=" linear-gradient(180deg, #508D4E -14.81%, #161313 100%)";
    document.getElementById("signup-h1").style.webkitBackgroundClip="text";
    document.getElementById("signup-h1").style.webkitTextFillColor="transparent";
    document.getElementById("bobutton").style.background="#7C8761AB";
    document.getElementById("dark-button").style.background="#7C8761AB"; 
    document.getElementById("light-button").style.background="#7C8761AB";
    document.getElementById("button").style.background="#7C8761AB";
    document.getElementById("ll").style.color="#406e3e";
    var x = document.getElementsByTagName("input");
    for(let i=0; i < x.length -1 ; i++){
        x[i].style.borderBottomColor="#406e3e"
    }

}
  




