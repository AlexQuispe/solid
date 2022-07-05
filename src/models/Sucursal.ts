export class Sucursal {
  direccion: string;

  constructor(direccion: string) {
    this.direccion = direccion;
  }

  mostrarInfo() {
    console.log('sucursal: ', this.direccion);
  }
}
