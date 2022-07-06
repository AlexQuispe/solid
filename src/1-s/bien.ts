(async () => {
  class Rectangulo {
    calcularArea() {
      return 10;
    }
  }

  class RectanguloGrafico {
    render() {
      console.log('RENDERIZANDO RECTANGULO');
    }
  }

  // MAIN
  const rectangulo = new Rectangulo();
  rectangulo.calcularArea();

  const rectanguloGrafico = new RectanguloGrafico();
  rectanguloGrafico.render();
  // END MAIN
})()
  .then(() => console.log('success'))
  .catch((e) => console.error(e));
