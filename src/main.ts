import { Empresa } from "./models/Empresa";

async function main() {
  console.log("Hello world!");

  const empresa = new Empresa('HELADOS CHOQUITO');
  empresa.mostrarInfo();
}

main()
  .then()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
