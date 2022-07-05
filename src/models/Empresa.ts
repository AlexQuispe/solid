export class Empresa {
  razonSocial: string;
  constructor(razonSocial: string) {
    this.razonSocial = razonSocial;
  }
  mostrarInfo() {
    console.log("empresa: ", this.razonSocial);
  }
}
