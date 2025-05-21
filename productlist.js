const products = [
  { name: "Smartphone", category: "electronics", price: 500, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 25, rating: 4.0 },
  { name: "Laptop", category: "electronics", price: 1200, rating: 4.8 },
  { name: "Novel", category: "books", price: 15, rating: 4.2 },
  { name: "Headphones", category: "electronics", price: 80, rating: 4.3 },
  { name: "Jeans", category: "clothing", price: 45, rating: 3.9 },
  { name: "Textbook", category: "books", price: 60, rating: 4.7 }
];

const categoryFilter = document.getElementById("category-filter");
const sortFilter = document.getElementById("sort-filter");
const productList = document.getElementById("product-list");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    productList.appendChild(productDiv);
  });
}

function applyFilters() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const sort = sortFilter.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);

displayProducts(products);
