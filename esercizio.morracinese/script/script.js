document.addEventListener("DOMContentLoaded",function(){


    var puntiYou=0,puntiCpu=0;

document.getElementById("inizia").onclick=function()
{
  document.querySelector("#you").style.backgroundImage="";
  document.getElementById("cpu").style.backgroundImage="";
  document.getElementById("scelta").style.display="block";
  //document.querySelector("button").style.display="none";
  
  var img=document.querySelectorAll("#scelta img")   //ho craeto un nodelist con le 3 immagini
  console.log(img)


  for(i=0;i<img.length;i++){   //ciclo for
  console.log(i);

 

  img[i].onclick=function(){

  
   var percorsoIMG=this.getAttribute("src")
      src=this.getAttribute("src");
      //console.log(src)
      
      document.querySelector("#you").style.backgroundImage="url(../" + percorsoIMG +")";

     document.getElementById("scelta").style.display="none";

    



  sceltaCpu=Math.floor(Math.random()*3);
   //console.log(sceltaCpu);

  
  if(sceltaCpu==0)
  {
    document.getElementById("cpu").style.backgroundImage="url(immagini/foglia.png)";
    //console.log("ciao")
    
    if(src=="immagini/foglia.png")
    {
      
      esitoYou=risultato.innerHTML="<span class='patta'>Partita Patta!</span>";

    }
    else if(src=="immagini/forbice.png")  
    {
      
      esitoYou=risultato.innerHTML="<span class='vinta'>Complimenti, Hai vinto!</span>";
      puntiYou++;

    }
    else if(src=="immagini/sasso.png")   
    {
      
      esitoCpu=risultato.innerHTML="<span class='persa'>Mi dispaice, Hai perso!</span>";
      puntiCpu++;
    }
    
  }

  
  if(sceltaCpu==1)
  {
    document.getElementById("cpu").style.backgroundImage="url(immagini/forbice.png)";
      
    if(src=="immagini/forbice.png")
    {
      
      esitoYou=risultato.innerHTML="<span class='patta'>Partita Patta!</span>";
    
    }
    else if(src=="immagini/sasso.png")
    {
      esitoYou=risultato.innerHTML="<span class='vinta'>Complimenti, Hai vinto!</span>";
      puntiYou++;
    }
    else if(src=="immagini/foglia.png")
    {
      
      esitoCpu=risultato.innerHTML="<span class='persa'>Mi dispaice, Hai perso!</span>";
      puntiCpu++;
    }
  }



  if(sceltaCpu==2)
  {
    document.getElementById("cpu").style.backgroundImage="url(immagini/sasso.png)";
  
    if(src=="immagini/sasso.png")
    {
      
      esitoYou=risultato.innerHTML="<span class='patta'>Partita Patta!</span>";
    }
    else if(src=="immagini/forbice.png")
    {
      esitoCpu=risultato.innerHTML="<span class='persa'>Mi dispaice, Hai perso!</span>";
      puntiCpu++;
    }
    if(src=="immagini/foglia.png")
    {
      
      esitoYou=risultato.innerHTML="<span class='vinta'>Complimenti, Hai vinto!</span>";
      puntiYou++;
    }
    
    
  }

    
     punteggioYou.innerHTML=puntiYou;
     punteggioCpu.innerHTML=puntiCpu;
  

 
} //onclick


} // chiusura for


} // chiusura inizia








//scelta=document.querySelector("img")
//console.log(scelta);


}); //DOMContentLoaded