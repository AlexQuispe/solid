(async () => {
  interface IMascota {
    acariciar: () => void;
  }

  abstract class Animal {
    alimentar() {
      console.log('alimentar al animal');
    }
  }

  class Gato extends Animal implements IMascota {
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
  }

  // MAIN
  const gato = new Gato();
  const escorpion = new Escorpion();

  gato.alimentar();
  gato.acariciar();
  escorpion.alimentar();
  // END MAIN
})()
  .then(() => console.log('success'))
  .catch((e) => console.error(e));
