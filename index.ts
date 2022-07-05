async function main() {
  console.log("Hello world!");
}

main()
  .then()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
