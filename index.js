let turno = false;

let victoria = false;

let contador = 0;

let turno1= document.getElementById("turno1");
let turno2 = document.getElementById("turno2");
turno1.style.backgroundColor ="orange";


const handleClick = (event) => {
    const {id} = event.target;
    const div = document.getElementById(id);

    if(div.innerText === "" && victoria === false){
        div.innerText = turno ? "O" : "X";

        if(div.innerText === "X"){
            turno1.style.backgroundColor = "green";
            turno2.style.backgroundColor = "orange";
        } else {
            turno1.style.backgroundColor = "orange";
            turno2.style.backgroundColor = "green";
       }
       
       verificarVictoria();
       turno = !turno;

    }
    
}
const verificarVictoria = () => {
    contador++;
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const forma1 = 
    div1.innerText === div2.innerText && 
    div1.innerText === div3.innerText && 
    div1.innerText !=="";

    const forma2 = 
    div4.innerText === div5.innerText && 
    div4.innerText === div6.innerText && 
    div4.innerText !=="";

    const forma3 = 
    div7.innerText === div8.innerText && 
    div7.innerText === div9.innerText && 
    div7.innerText !=="";

    const forma4 = 
    div1.innerText === div5.innerText && 
    div1.innerText === div9.innerText && 
    div1.innerText !=="";

    const forma5 = 
    div3.innerText === div5.innerText && 
    div3.innerText === div7.innerText && 
    div3.innerText !=="";

    const forma6 = 
    div1.innerText === div4.innerText && 
    div1.innerText === div7.innerText && 
    div1.innerText !=="";

    const forma7 = 
    div2.innerText === div5.innerText && 
    div2.innerText === div8.innerText && 
    div2.innerText !=="";

    const forma8 = 
    div3.innerText === div6.innerText && 
    div3.innerText === div9.innerText && 
    div3.innerText !=="";


    if(forma1 || 
        forma2 ||
        forma3 || 
        forma4 || 
        forma5 || 
        forma6 || 
        forma7 || 
        forma8
        ){

        const linea1 = document.getElementById("linea1");
        if(forma1)

        linea1.style.height = "10px";
        linea1.style.width = "600px";
        linea1.style.top = "85px";
        linea1.style.left = "0px"

        const linea2 = document.getElementById("linea2");
        if(forma2)

        linea2.style.height = "10px";
        linea2.style.width = "600px";
        linea2.style.top = "290px";
        linea2.style.left = "0px"

        const linea3 = document.getElementById("linea3");
        if(forma3)

        linea3.style.height = "10px";
        linea3.style.width = "600px";
        linea3.style.top = "500px";
        linea3.style.left = "0px"

        const linea4 = document.getElementById("linea4");
        if(forma4)

        linea4.style.height = "10px";
        linea4.style.width = "600px";
        linea4.style.top = "0px";
        linea4.style.left = "0px";
        linea4.style.marginTop = "300px"
                
        const linea5 = document.getElementById("linea5");
        if(forma5)

        linea5.style.height = "10px";
        linea5.style.width = "600px";
        linea5.style.top = "0px";
        linea5.style.left = "0px"
        linea5.style.marginTop = "300px"

        const linea6 = document.getElementById("linea6");
        if(forma6)

        linea6.style.height = "600px";
        linea6.style.width = "10px";
        linea6.style.top = "0px";
        linea6.style.left = "0px";
        linea6.style.marginLeft = "90px";

        const linea7 = document.getElementById("linea7");
        if(forma7)

        linea7.style.height = "600px";
        linea7.style.width = "10px";
        linea7.style.top = "0px";
        linea7.style.left = "0px"
        linea7.style.marginLeft = "295px";

        const linea8 = document.getElementById("linea8");
        if(forma8)

        linea8.style.height = "600px";
        linea8.style.width = "10px";
        linea8.style.top = "0px";
        linea8.style.left = "0px"
        linea8.style.marginLeft = "500px";
        
            
        victoria = true;
        alert(`Felicidades Ganaste ${turno ? "O" : "X"}`);
    } else {
        if(contador === 9){
            alert("La partida terminó en empate");
        }
    }

};

const reload= () => {
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const linea1 = document.getElementById("linea1");

    linea1.style.height = "0px";
    linea1.style.width = "0px";
    linea1.style.top = "0px";
    linea1.style.left = "0px"

    const linea2 = document.getElementById("linea2");

    linea2.style.height = "0px";
    linea2.style.width = "0px";
    linea2.style.top = "0px";
    linea2.style.left = "0px"

    const linea3 = document.getElementById("linea3");

    linea3.style.height = "0px";
    linea3.style.width = "0px";
    linea3.style.top = "0px";
    linea3.style.left = "0px"

    const linea4 = document.getElementById("linea4");

    linea4.style.height = "0px";
    linea4.style.width = "0px";
    linea4.style.top = "0px";
    linea4.style.left = "0px"

    const linea5 = document.getElementById("linea5");

    linea5.style.height = "0px";
    linea5.style.width = "0px";
    linea5.style.top = "0px";
    linea5.style.left = "0px"

    const linea6 = document.getElementById("linea6");

    linea6.style.height = "0px";
    linea6.style.width = "0px";
    linea6.style.top = "0px";
    linea6.style.left = "0px"
    
    const linea7 = document.getElementById("linea7");

    linea7.style.height = "0px";
    linea7.style.width = "0px";
    linea7.style.top = "0px";
    linea7.style.left = "0px"

    const linea8 = document.getElementById("linea8");

    linea8.style.height = "0px";
    linea8.style.width = "0px";
    linea8.style.top = "0px";
    linea8.style.left = "0px"

    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";

    turno = false;
    victoria = false;
    contador = 0;
    turno1.style.backgroundColor ="orange";
    turno2.style.backgroundColor ="green";
};

