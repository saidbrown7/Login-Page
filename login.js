
var state = false;

function show_hide(){
    if(state){
        document.getElementById("pass").
        setAttribute("type","password")
        document.getElementById("eye").
        style.color='#7a797e';
        state = false;
    }
    else{
        document.getElementById("pass").
        setAttribute("type","text")
        document.getElementById("eye").
        style.color='#5887ef';
        state = true;
    }
}
