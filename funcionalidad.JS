
let cuerrentInput ="";
let display = document.getElementById('display')

function appendToDisplay (value)
{
    cuerrentInput += value;
    display.value= cuerrentInput;
}

function ClearDisplay ()
{
    cuerrentInput='';
    display.value='';
}

function calculateResult (){
    try{
        const result =eval(cuerrentInput);
        display.value=result;
        cuerrentInput=result.toString();

    } catch (error){
        display.value='error';
    }

    function slider(anything){
        document.querySelector('.contenedor').src = anything;
    }

}