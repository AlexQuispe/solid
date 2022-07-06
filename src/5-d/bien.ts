(async () => {
  class Motor {
    nombre: string;
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  }

  class Deportivo {
    motor: Motor;
    constructor(motor: Motor) {
      this.motor = motor;
    }
    arrancar() {
      console.log('arrancando deportivo');
    }
  }

  // MAIN
  const motor = new Motor('V8');

  const deportivo = new Deportivo(motor);

  deportivo.arrancar();
  // END MAIN
})()
  .then(() => console.log('success'))
  .catch((e) => console.error(e));
