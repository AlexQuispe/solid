(async () => {
  class Motor {
    nombre: string;
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  }

  class Deportivo {
    motor: Motor;
    constructor() {
      this.motor = new Motor('v8');
    }
    arrancar() {
      console.log('arrancando deportivo');
    }
  }

  // MAIN
  const deportivo = new Deportivo();
  deportivo.arrancar();
  // END MAIN
})()
  .then(() => console.log('success'))
  .catch((e) => console.error(e));
