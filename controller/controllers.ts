let car:Car;
//Un cop afegit el cotxe, ocultarem el fomulari i mostrarem un per afegir les quatre rodes al cotxe.
let ocultarWheels= document.getElementById("ocultar")! as HTMLInputElement;
let ocultarCar =document.getElementById("carBox")! as HTMLInputElement;
function ocultarWheel(){
    ocultarWheels.style.display="none";
}
//demani a l’usuari la informació del cotxe (matrícula, la marca i el seu color) a través d’un formulari 
//i mostri en pantalla
// recojo los valores y declaros las variables del auto 
let plate = document.getElementById("plate")! as HTMLInputElement;
let brand= document.getElementById("brand")! as HTMLInputElement;
let color= document.getElementById("color")! as HTMLInputElement;
let plateError =document.getElementById("errorPlate")! as HTMLInputElement;

// event listener para cuando cambia el valor de plate (sin apretar el boton add Car)
plate.addEventListener("change", plateVerify);
function plateVerify(){
    const validPlate = /^[0-9]{4}[a-zA-Z]{3}$/.test(plate.value); // matrícula té 4 números i 3 lletresì
    if(!validPlate){
        plate.classList.add("is-invalid");
        plateError.textContent ='Plate number should stars with 4 numbers and contains 3 letters';
        return false; 
    } else{
        plate.classList.remove("is-invalid");
        plate.textContent =" "
       return true;
       } 
    }

// creo funcion creare car
function addCar(){
    // Validar matricula
    const validPlate = /^[0-9]{4}[a-zA-Z]{3}$/.test(plate.value); // matrícula té 4 números i 3 lletres
     if(!validPlate){
        plate.classList.add("is-invalid");
        plateError.textContent ='Plate number should stars with 4 numbers and contains 3 letters';
        return false;
    }
     else {
        // agrego new car, desaparece add car aparece el formulario de agregar info rueda     
        ocultarWheels.style.display="block"; 
        ocultarCar.style.display="none";  
        car = new Car(plate.value, brand.value, color.value);
        return true;
}
}

// recojo los valores de las ruedas
let wheel:Wheel;
let brandWheel1 = document.getElementById("brand1")! as HTMLInputElement;
let brandWheel2 = document.getElementById("brand2")! as HTMLInputElement;
let brandWheel3 = document.getElementById("brand3")! as HTMLInputElement;
let brandWheel4 = document.getElementById("brand4")! as HTMLInputElement;
let diametro1 = document.getElementById("diametro1")! as HTMLInputElement;
let diametro2 = document.getElementById("diametro2")! as HTMLInputElement;
let diametro3 = document.getElementById("diametro3")! as HTMLInputElement;
let diametro4 = document.getElementById("diametro4")! as HTMLInputElement;
let invalidDiametro1 = document.getElementById("errorDiametro1")! as HTMLInputElement;
let invalidDiametro2 = document.getElementById("errorDiametro2")! as HTMLInputElement;
let invalidDiametro3 = document.getElementById("errorDiametro3")! as HTMLInputElement;
let invalidDiametro4 = document.getElementById("errorDiametro4")! as HTMLInputElement;
let diametro = new Array;
    diametro.push(diametro1.valueAsNumber,diametro2.valueAsNumber,diametro3.valueAsNumber,diametro4.valueAsNumber);

// event listener para cuando cambia el diametro sin apretar el boton add wheel
// DIAMETRO RUEDA 1
diametro1.addEventListener("change", Diametro1Verify);
function Diametro1Verify(){
   if(diametro1.valueAsNumber <0.4 || diametro1.valueAsNumber >2 ){ //Cada roda té un diàmetre entre 0.4 i 2
        diametro1.classList.add("is-invalid");
        invalidDiametro1.textContent ="Diameter should be greater than 0.4 and less than or equal to 2!";
    }
    else{
        diametro1.classList.remove("is-invalid");
        invalidDiametro1.textContent ='';
       return true;
       } 
    }
// DIAMETRO RUEDA 2
    diametro2.addEventListener("change", Diametro2Verify);
    function Diametro2Verify(){
       if(diametro2.valueAsNumber <0.4 || diametro2.valueAsNumber >2 ){ //Cada roda té un diàmetre entre 0.4 i 2
            diametro2.classList.add("is-invalid");
            invalidDiametro2.textContent ="Diameter should be greater than 0.4 and less than or equal to 2!";
        }
        else{
            diametro2.classList.remove("is-invalid");
            invalidDiametro2.textContent ='';
           return true;
           } 
        }
// DIAMETRO RUEDA 3
diametro3.addEventListener("change", Diametro3Verify);
function Diametro3Verify(){
    if(diametro3.valueAsNumber <0.4 || diametro3.valueAsNumber >2 ){ //Cada roda té un diàmetre entre 0.4 i 2
        diametro3.classList.add("is-invalid");
        invalidDiametro3.textContent ="Diameter should be greater than 0.4 and less than or equal to 2!";
    }else{
        diametro3.classList.remove("is-invalid");
        invalidDiametro3.textContent ='';
       return true;
       } 
    }
// DIAMETRO RUEDA 4
diametro4.addEventListener("change", Diametro4Verify);
function Diametro4Verify(){
   if(diametro4.valueAsNumber <0.4 || diametro4.valueAsNumber >2 ){ // Cada roda té un diàmetre entre 0.4 i 2
        diametro4.classList.add("is-invalid");
        invalidDiametro4.textContent ="Diameter should be greater than 0.4 and less than or equal to 2!";
    }
     else{
        diametro4.classList.remove("is-invalid");
        invalidDiametro4.textContent ='';
       return true;
       } 
    }
   // ADD WHEEL BUTTON
   function addWheel(){
    let diametro = new Array;
    diametro.push(diametro1.valueAsNumber,diametro2.valueAsNumber,diametro3.valueAsNumber,diametro4.valueAsNumber);
    let i;
    let resultado = document.getElementById("wheelInfo")! as HTMLInputElement;
for(i=0; i<diametro.length;i++){       
    let diametroNoEmpty = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro1.value);
    let diametroNoEmpty2 = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro2.value);
    let diametroNoEmpty3 = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro3.value);
    let diametroNoEmpty4 = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(diametro4.value);
        if(!diametroNoEmpty){
            alert("Wheels diameters are required");
            return false;
        }else if(!diametroNoEmpty2){
            alert("Wheels diameters are required");
            return false;
        }else if(!diametroNoEmpty3){
            alert("Wheels diameters are required");
            return false;
        }else if(!diametroNoEmpty4){
            alert("Wheels diameters are required");
            return false;
        } 

    }
      
        let wheel = new Wheel(brandWheel1.value, diametro1.valueAsNumber);
        let wheel2 = new Wheel(brandWheel2.value, diametro2.valueAsNumber);
        let wheel3 = new Wheel(brandWheel3.value, diametro3.valueAsNumber);
        let wheel4 = new Wheel(brandWheel4.value, diametro4.valueAsNumber);
        resultado.innerHTML =  ` Car: Plate ${car.plate}, Brand ${car.brand}, Color ${car.color} <br> Wheel 1:  Brand ${wheel.brand} Diameter ${wheel.diameter} <br >Wheel 2:  Brand ${wheel2.brand} Diameter ${wheel2.diameter} <br> Wheel 3:  Brand ${wheel3.brand} Diameter ${wheel3.diameter} <br> Wheel 4:  Brand ${wheel4.brand} Diameter ${wheel4.diameter} `;
        car.addWheel(wheel);
        car.addWheel(wheel2);
        car.addWheel(wheel3);
        car.addWheel(wheel4);
        console.log(car);
}
