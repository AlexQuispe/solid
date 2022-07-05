import { Sucursal } from "./Sucursal";

export class Empresa {
  razonSocial: string;
  sucursales: Sucursal[];

  constructor(razonSocial: string) {
    this.razonSocial = razonSocial;
    this.sucursales = [];
  }

  agregarSucursal(sucursal: Sucursal) {
    this.sucursales.push(sucursal);
  }

  mostrarInfo() {
    console.log('empresa: ', this.razonSocial);
    console.log('sucursales: ');
    this.sucursales.forEach(sucursal => {
      sucursal.mostrarInfo();
    });
  }
}
