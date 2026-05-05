
const productList = [
  { "id": 1, "name": "Phở bò", "price": 40000, "image": "../assets/images/phobo.jpg",   },
  { "id": 2, "name": "Cơm gà", "price": 20000, "image": "../assets/images/comga.webp", "prolink": "https://example.com/banhmi" },
  { "id": 3, "name": "Bánh Cuốn", "price": 45000, "image": "../assets/images/banhcuon.webp", "prolink": "https://example.com/bunbo" },
  { "id": 4, "name": "Lẩu kim chi", "price": 35000, "image": "../assets/images/Laukimchi    .jpg", "prolink": "https://example.com/comtam" },
  { "id": 5, "name": "Gà Nướng", "price": 25000, "image": "../assets/images/ganuong.webp", "prolink": "https://example.com/goicuon" },
  { "id": 6, "name": "Cơm Chiên", "price": 40000, "image": "../assets/images/banhcanhcua.jpg", "prolink": "https://example.com/hutieu" },
  { "id": 7, "name": "Bò lúc lắc", "price": 50000, "image": "../assets/images/boluclac  .jpg", "prolink": "https://example.com/banhxeo" },
  { "id": 8, "name": "Miến gà", "price": 30000, "image": "../assets/images/mienga.png", "prolink": "https://example.com/chagio" },
  { "id": 9, "name": "Bánh mì thịt", "price": 45000, "image": "../assets/images/banhmithit.jpg", "prolink": "https://example.com/buncha" },
  { "id": 10, "name": "Mì xào bò", "price": 150000, "image": "../assets/images/mixaobo.jpg", "prolink": "https://example.com/lauthai" }
];

function addProduct(product) {
  // Tạo khung chứa item
  const productItem = document.createElement("div");
  productItem.setAttribute("class", "product-item");

  // Tạo khung chứa hình
  const productImage = document.createElement("div");
  productImage.setAttribute("class", "product-image");

  // Tạo đối tượng hình ảnh
  const img = document.createElement("img");
  img.setAttribute("src", product.image);
  img.setAttribute("alt", product.name);
  img.style.width = "200px"; 
  img.style.height ="auto";

  // Gán hình vào khung
  productImage.appendChild(img);
  productItem.appendChild(productImage);

  // Tạo tiêu đề sản phẩm
  const productTitle = document.createElement("h3");
  productTitle.setAttribute("class", "product-title");
  productTitle.textContent = product.name;
  productItem.appendChild(productTitle);

  // Tạo giá sản phẩm
  const productPrice = document.createElement("p");
  productPrice.setAttribute("class", "product-price");
  productPrice.textContent = "Giá: " + product.price.toLocaleString() + " VND";
  productItem.appendChild(productPrice);

  // Tạo chi tiết sản phẩm
  const productDetails = document.createElement("p");
  productDetails.setAttribute("class", "product-details");
  const detailsLink = document.createElement("a");
  detailsLink.setAttribute("href", product.prolink);
  detailsLink.setAttribute("target", "_blank");
  detailsLink.textContent = "Chi tiết sản phẩm";
  productDetails.appendChild(detailsLink);
  productItem.appendChild(productDetails);

  // Tạo nút mua hàng
  const buyButton = document.createElement("button");
  buyButton.setAttribute("class", "buy-button");
  buyButton.textContent = "Mua hàng";
  buyButton.addEventListener("click", function() {
    alert("Đã thêm vào giỏ hàng!");
  });
  productItem.appendChild(buyButton);

  // Tạo nút xem chi tiết
  const viewDetailsButton = document.createElement("button");
  viewDetailsButton.setAttribute("class", "view-details-button");
  viewDetailsButton.textContent = "Xem chi tiết";
  viewDetailsButton.addEventListener("click", function() {
    window.open(product.prolink, "_blank");
  });
  productItem.appendChild(viewDetailsButton);

  // Thêm vào body hoặc container
  document.body.appendChild(productItem);
}