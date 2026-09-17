const productVariants = {
  100: {
    sku: "01306",
    oldPrice: "349,20 ₽",
    price: "326,40 ₽",
  },
  500: {
    sku: "01307",
    oldPrice: "1 646 ₽",
    price: "1 432 ₽",
  },
  1000: {
    sku: "01308",
    oldPrice: "2 592 ₽",
    price: "2 064 ₽",
  },
  5000: {
    sku: "01309",
    oldPrice: "8 710 ₽",
    price: "6 320 ₽",
  },
};

const productOptions = document.querySelector(".product__options");
const productSku = document.querySelector("#product-sku");
const productOldPrice = document.querySelector("#product-old-price");
const productPrice = document.querySelector("#product-price");

const updateProductVariant = (weight) => {
  const variant = productVariants[weight];

  if (!variant) {
    return;
  }

  productSku.textContent = variant.sku;
  productOldPrice.textContent = variant.oldPrice;
  productPrice.textContent = variant.price;
};

productOptions?.addEventListener("change", (event) => {
  const selectedOption = event.target;

  if (!(selectedOption instanceof HTMLInputElement) || selectedOption.name !== "weight") {
    return;
  }

  updateProductVariant(selectedOption.value);
});
