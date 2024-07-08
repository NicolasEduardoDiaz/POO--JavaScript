class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }

    static esMayorDeEdad(edad) {
        return edad >= 18;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`Estoy estudiando ${this.carrera}.`);
    }
}

// Obtener el formulario y escuchar el evento de submit
const form = document.getElementById('estudianteForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores del formulario
    const nombre = form.nombre.value;
    const edad = parseInt(form.edad.value);
    const sexo = form.sexo.value;
    const carrera = form.carrera.value;

    // Crear una instancia de Estudiante con los datos del formulario
    const estudiante = new Estudiante(nombre, edad, sexo, carrera);

    // Mostrar mensajes en la consola
    estudiante.saludar();
    console.log(`¿Es mayor de edad? ${Persona.esMayorDeEdad(edad)}`);
    estudiante.estudiar();
});
