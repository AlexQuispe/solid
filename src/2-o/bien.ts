(async () => {
  abstract class Empleado {
    nombre: string;
    sueldo: number;
    bono: number;
    constructor(nombre: string, sueldo: number) {
      this.nombre = nombre;
      this.sueldo = sueldo;
      this.bono = 0;
    }
    calcularBono() {
      // this.bono = 1;
    }
  }

  class Programador extends Empleado {
    calcularBono() {
      this.bono = this.sueldo * 2;
    }
  }

  class Gerente extends Empleado {
    calcularBono() {
      this.bono = this.sueldo * 10;
    }
  }

  class Asistente extends Empleado {
    calcularBono() {
      this.bono = this.sueldo * 5;
    }
  }

  // MAIN
  const empleados: Empleado[] = [];
  empleados.push(new Programador('Juan', 100));
  empleados.push(new Gerente('Ana', 500));
  empleados.push(new Asistente('Ana', 100));

  empleados.forEach((e) => {
    e.calcularBono();
  });
  // END MAIN
})()
  .then(() => console.log('success'))
  .catch((e) => console.error(e));
