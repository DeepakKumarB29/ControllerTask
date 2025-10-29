document.getElementById("productForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = event.target.productName.value;
  const obj = {
    name: productName,
  };
  console.log("Sending product", obj);
  axios
    .post("http://localhost:3000/products", obj)
    .then((response) => {
      console.log("Product added successfully:", response.data);
    })
    .catch((error) => {
      console.log("Error adding product", error);
    });
});
