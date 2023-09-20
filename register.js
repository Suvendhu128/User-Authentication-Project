const registerBtnClickHandler = async () => {
    //extract the data
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    const bodyObject = {
        name,
        password,
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

    let data = await fetch("https://geek-store.onrender.com/user/register", configuration);

    data = await data.json();
    console.log(data + "blank");
    alert(data.message);
    console.log("hi");

    if (data.message == "User Registered") {
        window.location.pathname = `/Login-Portal/index.html`;
    }
};

//add click to register-btn
document.getElementById("register-btn").addEventListener("click", registerBtnClickHandler);