(async () => {
  abstract class Animal {
    acariciar() {
      console.log('acariciando al animal');
    }
    alimentar() {
      console.log('alimentar al animal');
    }
  }

  class Gato extends Animal {
    acariciar() {
      console.log('Acariciando al gato');
    }
    alimentar() {
      console.log('Alimentando al gato');
    }
  }

  class Escorpion extends Animal {
    alimentar() {
      console.log('Alimentando al escoprión');
    }
    acariciar() {
      console.log('Acariciando al escorpion, ¿Puedo hacer esto? !Ayudaaaa!');
    }
  }

  // MAIN
  const gato = new Gato();
  const escorpion = new Escorpion();

  gato.alimentar();
  gato.acariciar();
  escorpion.alimentar();
  escorpion.acariciar();
  // END MAIN
})()
  .then(() => console.log('success'))
  .catch((e) => console.error(e));
