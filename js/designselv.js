img_array= new Array('images/forstepalle.png','images/andenpalle.png','images/tredjepalle.png');
i=0;
function myFunction()
{
     i++;
    document.getElementById("myImg").src=img_array[i];
    if(i==img_array.length-1) {
   i=-1;

    }
    
}

provearray= new Array('images/ryg.png');
function myPallets()
{
    document.getElementById("myImg").src=provearray;
    
}

igenarray= new Array('images/grad.png');
function myMadras()
{
    document.getElementById("myImg").src=igenarray;
    
}

betraekarray= new Array('images/sorthynde.png');
function myBetraek()
{
    document.getElementById("myImg").src=betraekarray;  
}