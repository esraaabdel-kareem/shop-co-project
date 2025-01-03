import { defineStore } from "pinia";
import { ref, computed } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

// useProductStore
import { useProductStore } from "./productStore";

export const useCartStore = defineStore("useCartStore", () => {
  const carts = ref([]);
 
  const quantity = ref(1);

  const products = ref([]);

  

  const discountedPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  const loadProductsFromJSON = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addCart = (id,title, image, price, discount, quantity = 1) => {
    const data = { id, title, image,  price, discount, quantity };
    const existingItem = carts.value.find((item) => item.id === data.id);

    if (existingItem) {
      alertAddCartFailed();
    } else {
      carts.value.push(data);
      saveToLocalStorage();
      alertAddCart();
    }
  };

  const addCartDetail = (id, title, image, price, discount, quantity) => {
    const data = { id, title, image, price, discount, quantity };
    const existingItem = carts.value.find((item) => item.id === data.id);

    if (existingItem) {
      const findIndexProduct = carts.value.findIndex(
        (item) => item.id === data.id
      );
      carts.value[findIndexProduct].quantity += data.quantity;
      saveToLocalStorage();
      alertAddCart();
    } else {
      carts.value.push(data);
      saveToLocalStorage();
      alertAddCart();
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("carts", JSON.stringify(carts.value));
  };

  const loadFromLocalStorage = () => {
    const storedCart = localStorage.getItem("carts");
    if (storedCart) {
      carts.value = JSON.parse(storedCart);
    }
  };

  loadProductsFromJSON();

  const cartPreview = computed(() => {
    const productStore = useProductStore();

    return carts.value
      .map((prd) => {
        const product = productStore.products.find((e) => e.id === prd.id);

        if (!product) {
          console.log(`product ${prd.id} not found`);
          return null;
        }
        return {
          ...products,
          quantity: prd.quantity,
          totalProduct: product.price * prd.quantity,
        };
      })
      .filter((e) => e !== null);
  });

  const total = computed(() => {
    return carts.value.reduce((sum, prd) => sum + prd.price * prd.quantity, 0);
  });

  const alertAddCart = () => {
    Swal.fire({
      position: "canter",
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const alertAddCartFailed = () => {
    Swal.fire({
      position: "canter",
      icon: "error",
      title: "Product already added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const incrementQuantity = (i) => {
    if (carts.value[i].quantity < 5) {
      carts.value[i].quantity += 1;
      saveToLocalStorage();
    }
  };

  const decrementQuantity = (i) => {
    if (carts.value[i].quantity > 1) {
      carts.value[i].quantity -= 1;
      saveToLocalStorage();
    }
  };

  const removeCartItem = (i) => {
    carts.value.splice(i, 1);
    saveToLocalStorage();
  };

  const clearCart = () => {
    carts.value = [];
    saveToLocalStorage();
  };

  return {
    carts,
    quantity,
    addCart,
    loadFromLocalStorage,
    loadProductsFromJSON,
    cartPreview,
    incrementQuantity,
    decrementQuantity,
    removeCartItem,
    addCartDetail,
    clearCart,
    discountedPrice,
    total,
  };
});
