import { Empresa } from './models/Empresa';
import { Sucursal } from './models/Sucursal';

async function main() {
  console.log('Hello world!');

  const sucursal1 = new Sucursal('Zona 1');
  const sucursal2 = new Sucursal('Zona 2');

  const empresa = new Empresa('HELADOS CHOQUITO');
  empresa.agregarSucursal(sucursal1);
  empresa.agregarSucursal(sucursal2);

  empresa.mostrarInfo();
}

main()
  .then()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
