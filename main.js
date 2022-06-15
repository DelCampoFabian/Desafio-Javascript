let vidaPersonaje = parseInt (prompt("Ingrese la vida de su personaje (300 max) "));

for (let veneno = 0 ; veneno <= vidaPersonaje; veneno++){
    let  envenenamiento = vidaPersonaje - veneno;
    console.log ("Vida del Personaje " + vidaPersonaje + " - " + veneno + " = " + envenenamiento);
    if (envenenamiento === 300){
        alert ("Vida llena = " + envenenamiento + " hp");
    }else if (envenenamiento === 150) {
        alert ("Vida a la mitad = " + envenenamiento  + " hp");
    }else if (envenenamiento === 50){
        alert ("Vida en peligro = " + envenenamiento  + " hp");
    }else if ((envenenamiento <= 5) && (envenenamiento > 0)){
        alert ("Su personaje esta a punto de morir = " + envenenamiento + " hp");
    }else if (envenenamiento ===0){
        alert ("Su personaje ha muerto ")
    }
}
