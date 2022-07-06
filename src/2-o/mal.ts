(async () => {
  enum TipoEmpleado {
    PROGRAMADOR = 1,
    GERENTE = 2,
    ASISTENTE = 3,
  }

  class Empleado {
    nombre: string;
    sueldo: number;
    bono: number;
    tipo: TipoEmpleado;
    constructor(nombre: string, sueldo: number, tipo: TipoEmpleado) {
      this.nombre = nombre;
      this.sueldo = sueldo;
      this.tipo = tipo;
      this.bono = 0;
    }
    calcularBono() {
      // this.bono = 1;
    }
  }

  // MAIN
  const empleados: Empleado[] = [];
  empleados.push(new Empleado('Juan', 100, TipoEmpleado.PROGRAMADOR));
  empleados.push(new Empleado('Ana', 500, TipoEmpleado.GERENTE));

  empleados.forEach((e) => {
    let bonoCalculado = 0;
    switch (e.tipo) {
      case TipoEmpleado.PROGRAMADOR:
        bonoCalculado = e.sueldo * 2;
        break;
      case TipoEmpleado.GERENTE:
        bonoCalculado = e.sueldo * 10;
        break;
      case TipoEmpleado.ASISTENTE:
        bonoCalculado = e.sueldo * 5;
        break;
      default:
        0;
    }
    e.bono = bonoCalculado;
  });
  // END MAIN
})()
  .then(() => console.log('success'))
  .catch((e) => console.error(e));
