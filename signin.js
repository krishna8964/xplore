let mail = "";
let pass = "";

const inpmail = (e) => {
    mail = e.target.value;
    console.log(mail);
};
const inppass = (e) => {
    pass = e.target.value;
};



const signin = (e) => {
    e.preventDefault();
    console.log("hi")
    if (mail === "user123@gmail.com" && pass === "123456") {
        window.location.href = "./home.html";
    }
};