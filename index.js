function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

// https://api.myjson.com/bins/esicc
fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    spinnerPage.handleClear();
    CATALOG = body;
    render();
  })
  .catch((error) => {
    console.log(error);
  });
