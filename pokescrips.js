const pokefecth = () =>{
    const nombrePoke = document.getElementById("nombrePoke");
    let nombreInput = nombrePoke.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreInput}`;
    fetch(url).then((res)=>{
        if(res.status !="200"){
            pokeImagen("./imag/x.png");
        }
        else{
            return res.json();
            
        } 
    }).then((data)=>{
        //console.log(data);
        if(nombrePoke.value !=""){
            
            let pokeImg = data.sprites.front_default;
            let numero = data.id;
            let altura = data.height;
            let peso = data.weight;
            let tipo = data.types.map(typ => typ.type.name);
            let estadisticas = data.stats.map(stat => stat.base_stat);
            let nombreesta = data.stats.map(stana => stana.stat.name);
            let locationArea = data.location_area_encounters;
            pokeImagen(pokeImg);
            alturapoke(altura,numero,peso);
           tipospokemon(tipo);
           estads(nombreesta,estadisticas);
           localizacionArea(locationArea);
           
           
           
            
            
        }
        else{
            console.log("input vacio");
        }
    })
            
   
    
}


pokefecth();

const pokeImagen = (url) =>{
    const pokeImg = document.getElementById("pokemonImg");
    pokeImg.src = url;
}

const alturapoke = (altura,numero,peso) => {
    let altutext = document.getElementById("alturapoke");
    let numeropoke = document.getElementById("numeropoke");
    let pesopoke = document.getElementById("pesopoke")
    altutext.textContent = `Altura: ${altura}`;
    numeropoke.textContent = `No. ${numero}`;
    pesopoke.textContent = `Peso: ${peso}`;


}

const tipospokemon = (tipo) => { 
  let arreglo = 'Tipo: ';
  for(let j=0;j<tipo.length;j++){
 
  arreglo += `<br>${tipo[j]}`;
 
  }
  
  document.getElementById("tipos").innerHTML = arreglo;


    }
const estads = (nombreesta,estadisticas) =>{
let arra = ' ';
for(let i=0; i<nombreesta.length;i++){
    arra += `${nombreesta[i]}: ${estadisticas[i]} <br>`;
    //console.log(arra);
}
document.getElementById("stat").innerHTML = arra;
}

const localizacionArea = (locationArea) =>{
    fetch(locationArea).then((resp)=>{
        if(resp.status != 200){
            console.log("Error")
        }
        else {
            return resp.json();
        }
    }).then((dato)=>{
        //console.log(dato)
        let areaencon = dato.map(area =>area.location_area.name);
        //console.log(areaencon);
        funcionforlocalizacion(areaencon);
    })

}
const funcionforlocalizacion = (areaencon) =>{
    let arrearea ='Localizacion: ';
    if(areaencon.length == 0){
        document.getElementById("arealo").innerHTML = `${arrearea}<br>No disponible de forma salvaje`;
    }
    else{
    for(let i=0;i<areaencon.length;i++){
        arrearea +=`<li>${areaencon[i].replace(/-/g," ")}</li>`;
    }
    document.getElementById("arealo").innerHTML = arrearea;
      }
}

