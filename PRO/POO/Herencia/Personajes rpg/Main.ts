import { Guerrero } from "./Guerrero"
import { Mago } from "./Mago";
import { Arquero } from "./Arquero";
import { HabilidadPorDefecto } from "./Habilidad";
import { HabilidadCurar } from "./Habilidad";

//Crear personajes
const guerrero1 = new Guerrero('Clark', 10);
const mago1 = new Mago('Lara', 4);
const arquero1 = new Arquero('Stan', 6);

//Usar metodos de personaje
guerrero1.atacar(guerrero1.getDanio());
guerrero1.subirNivel();
mago1.defender();
arquero1.atacar(arquero1.getDanio());
arquero1.recibirDanio(10);

//Crear habilidades de mago
const habilidadPorDefecto = new HabilidadPorDefecto("Hechizo basico", "Hechizo que realiza un golpe con 8 puntos de daño", 20)

const habilidadCurar = new HabilidadCurar("Hechizo curativo", "Hechizo que cura 10 puntos de vida", 30)

//Usar habilidades
guerrero1.usarSuperAtaque();
// mago1.usarHechizo();
habilidadPorDefecto.usar(mago1)
arquero1.usarFlecha();

//Usar nueva habilidad
console.log(`${mago1.getNombre()} ha encontrado un cofre verde`);
mago1.agregarHabilidad(habilidadCurar);
