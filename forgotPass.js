const loading = document.getElementById("");

const forgotPassBtnClickHandler = async () => {
    //extract the data
    const email = document.getElementById("email").value;

    const bodyObject = {
        email
    };

    //api calling using fetch

    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyObject)
    };
    document.getElementById("forgotPass-btn").innerHTML = `<i class="fa fa-spinner fa-spin"></i>`;
    let data = await fetch("https://geek-store.onrender.com/user/forgot-password", configuration);

    data = await data.json();
    console.log(data + "blank");
    alert(data.message);

    if (data.message == "Your OTP is successfully sent to the registered email id.") {
        let baseUrl = (window.location.href).split("/");
        baseUrl[4] = `reset.html?email=${email}`;
        console.log(baseUrl[4]);
        newUrl = baseUrl.join("/");
        console.log(newUrl);
        window.location.href = newUrl;
    }
};

//add click to register-btn
document.getElementById("forgotPass-btn").addEventListener("click", forgotPassBtnClickHandler);