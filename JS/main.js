class persona {
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
    static esMayorDeEdad(edad){
        return edad >= 18;
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

const form = document.getElementById(`personaForm`);
form.addEventListener('submit', function(event){
    event.preventDefault();
})

const nombre = form.nombre.value;
const edad = parseInt(form.edad.value);
const sexo = form.sexo.value;
const carrera = form.carrera.value;

const estudiante = new estudiante(nombre, edad, sexo, carrera);

estudiante.saludar();
console.log(`Es mayor de edad? ${persona.esMayorDeEdad(edad)}`);
estudiante.estudiar();