document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("product-form");
    const productList = document.getElementById("product-list");
    const clearBtn = document.getElementById("clear-btn");

    const products = [
        {
            name: "Xiaomi Redmi 14",
            price: 4800.00,
            image: "images/Xiaomi Redmi 14.jpg"
        },
        {
            name: "Xiaomi Poco X6 Pro",
            price: 2000.00,
            image: "images/Xiaomi Poco X6 Pro.jpg"
        },
        {
            name: "Xiaomi Poco F6",
            price: 60.00,
            image: "images/Xiaomi Poco F6.jpg"
        },
        {
            name: "Iphone 15 Pro Max",
            price: 2000.00,
            image: "images/Iphone 15 Pro Max.png"
        },
        {
            name: "Iphone 14 Pro",
            price: 2000.00,
            image: "images/Iphone 14 Pro.jpg"
        },
        {
            name: "Iphone 13",
            price: 2000.00,
            image: "images/Iphone 13.png"
        },
    ];

    const renderProducts = () => {
        productList.innerHTML = "";
        products.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            const productImage = document.createElement("img");
            productImage.src = product.image;
            productCard.appendChild(productImage);

            const productName = document.createElement("p");
            productName.textContent = product.name;
            productCard.appendChild(productName);

            const productPrice = document.createElement("p");
            productPrice.textContent = `$${product.price.toFixed(2)}`;
            productCard.appendChild(productPrice);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.addEventListener("click", () => {
                products.splice(index, 1);
                renderProducts();
            });
            productCard.appendChild(deleteButton);

            productList.appendChild(productCard);
        });
    };

    productForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const imageInput = document.getElementById("image");

        const reader = new FileReader();
        reader.onload = (e) => {
            const product = {
                name,
                price: parseFloat(price),
                image: e.target.result
            };
            products.push(product);
            renderProducts();
            productForm.reset();
        };
        reader.readAsDataURL(imageInput.files[0]);
    });

    clearBtn.addEventListener("click", () => {
        productForm.reset();
    });

    renderProducts();
});


