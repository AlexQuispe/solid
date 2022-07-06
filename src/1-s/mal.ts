(async () => {
  class Rectangulo {
    calcularArea() {
      return 10;
    }
    render() {
      console.log('RENDERIZANDO RECTANGULO');
    }
  }

  // MAIN
  const rectangulo = new Rectangulo();
  rectangulo.render();
  // END MAIN
})()
  .then(() => console.log('success'))
  .catch((e) => console.error(e));
