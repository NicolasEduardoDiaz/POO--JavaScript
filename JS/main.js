class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        alert(`Hola, mi nombre es ${this.nombre}.`);
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
        alert(`Estoy estudiando ${this.carrera}.`);
    }
}

const showPersonasFormButton = document.getElementById('showPersonasForm');
const showEstudiantesFormButton = document.getElementById('showEstudiantesForm');

const personasForm = document.getElementById('personasForm');
const estudianteForm = document.getElementById('estudianteForm');

function showForm(formToShow) {
    personasForm.classList.add('hidden');
    estudianteForm.classList.add('hidden');
    
    formToShow.classList.remove('hidden');
}

showPersonasFormButton.addEventListener('click', () => showForm(personasForm));
showEstudiantesFormButton.addEventListener('click', () => showForm(estudianteForm));

// Formulario de personas
personasForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombrePersona').value;
    const edad = parseInt(document.getElementById('edadPersona').value);
    const sexo = document.getElementById('sexoPersona').value;

    const persona = new Persona(nombre, edad, sexo);
    persona.saludar();
    console.log(`Es mayor de edad? ${Persona.esMayorDeEdad(edad)}`);
});

// Formulario de estudiantes
estudianteForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreEstudiante').value;
    const edad = parseInt(document.getElementById('edadEstudiante').value);
    const sexo = document.getElementById('sexoEstudiante').value;
    const carrera = document.getElementById('carreraEstudiante').value;

    const estudiante = new Estudiante(nombre, edad, sexo, carrera);
    estudiante.saludar();
    console.log(`Es mayor de edad? ${Persona.esMayorDeEdad(edad)}`);
    estudiante.estudiar();
});
