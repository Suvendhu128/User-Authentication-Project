//code to extract data from URL
const urlString = window.location.href;
let paramString = urlString.split('?')[1];

let pair = paramString.split('=');
let email = pair[1];

console.log(email);

document.getElementById("mail").innerText = email;

const resetPassBtnClickHandler = async () => {
    //extract the data
    const otp = document.getElementById("otp").value;
    const password = document.getElementById("password").value;

    const bodyObject = {
        email,
        otp,
        password
    };

    //api calling using fetch

    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyObject)
    };
    document.getElementById("resetPass-btn").innerHTML = `<i class="fa fa-spinner fa-spin"></i>`;
    let data = await fetch("https://geek-store.onrender.com/user/reset-password", configuration);

    data = await data.json();
    console.log(data);
    alert(data.message);

    if (data.message == "Your Password is updated successfully.") {
        window.location.pathname = `/Login-Portal/index.html`;
    }
};
//add click to register-btn
document.getElementById("resetPass-btn").addEventListener("click", resetPassBtnClickHandler);
