class persona {
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}

const persona1 = new persona("Nicolas", 18, "M");
persona1.saludar(); 