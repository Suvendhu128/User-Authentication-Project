if(localStorage.getItem('token')){
    document.getElementById("login/out").innerHTML = `<a id="logout" href="">Log-out</a>`;
    document.getElementById("logout").addEventListener("click",()=>{
      localStorage.removeItem("token");
      window.location.reload();
    })
  }