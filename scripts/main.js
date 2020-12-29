var mybtn = document.getElementById('icon'),
    myside = document.getElementById('login-box'),
    ready = document.getElementById("ready")

mybtn.onclick =function(){
    if(myside.classList.contains('hide')){
        myside.classList='show';
    }else{
        myside.classList='hide';
    }
}

let toTop=document.getElementsByClassName("topBtn") 

window.onscroll = ()=>{ 
    if(window.scrollY > 510)
        toTop[0].classList.add("show")
    else toTop[0].classList.remove("show")
}

toTop[0].onclick = () => {
    window.scrollTo(1,1)
}

let x = document.querySelector(".icon-right"),
    y = document.querySelector(".rmenu")

x.onclick = ()=>{
    if(y.classList.contains("hide1")){
        y.classList.remove("hide1")
        y.classList.add("show1")
    }
    else{
        y.classList.add("hide1")
        y.classList.remove("show1")
    }
}


window.onload = ()=>{
    window.scrollTo(1,1) 
    console.log("klmh")
}