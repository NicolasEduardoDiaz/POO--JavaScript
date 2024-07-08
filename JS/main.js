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

class estudiante extends persona{
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar(){
        console.log(`Estoy estudiando ${this.carrera}.`);
    }
}

const persona1 = new persona("Nicolas", 18, "M")
persona1.saludar();

const estudiante1 = new estudiante("Nicolas", 18, "M", "Programacion");
estudiante1.saludar(); 
estudiante1.estudiar();