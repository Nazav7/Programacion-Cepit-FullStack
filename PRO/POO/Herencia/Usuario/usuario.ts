class Usuario{
    private nombre: string;
    private email: string;
    private password: string;


    constructor(nombre: string, email: string, password: string){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

saludo(){
    console.log(`Hola, soy ${this.nombre}`)
}

    login(email: string, password: string){
        return this.email === email && this.password === password //como es booleano retorna true o false
    }
}

//Sin super pude crear de igual manera nuevos usuarios, pero a la hora de crear un nuevo atributo para alumno ahora si debo llamar a super
class Alumno extends Usuario {
    private cursos: string[];
    private activo: boolean;

    constructor(nombre: string, email: string, password: string, cursos:string[], activo: boolean){
        super(nombre, email, password);
        this.cursos = [];
        this.activo = false;
    }

    activar(){
        this.activo = true;
    }

    login(email: string, password: string){
        if (!this.activo) return false;
        return super.login(email, password);
    }

    agregarCurso(curso: string){
        this.cursos.push(curso)
    }
}

const Pablo = new Usuario('Pablo', 'pablo@email', 'pablo123')
const Jose = new Usuario('Jose', 'Jose@email', 'Jose123')







//JS

// class Usuario{
    
//     constructor(nombre, email, password){
//         this.nombre = nombre;
//         this.email = email;
//         this.password = password;
//     }

// saludo(){
//     console.log(`Hola, soy ${this.nombre}`)
// }

//     login(email, password){
//         return this.email === email && this.password === password //como es booleano retorna true o false
//     }
// }

// class Alumno extends Usuario {}

// const Pablo = new Usuario('Pablo', 'pablo@email', 'pablo123')
// const Jose = new Usuario('Jose', 'Jose@email', 'Jose123')