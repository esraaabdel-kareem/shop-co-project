import { defineStore } from "pinia";

import axios from "axios";

import { ref, computed } from "vue";

export const useProductStore = defineStore("useProductStore", () => {
  const products = ref([]);

  const newArrivals = ref([]);

  const topSelling = ref([]);

  const productLike = ref([]);

  const input = ref("");

  const loadProduct = computed(() => {
    return products.value.length > 0;
  });

  const fetch_products = async () => {
    try {
      await axios.get(`http://localhost:3000/product`).then((response) => {
        // console.log(response.data)
        products.value = response.data;
      });
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const fetch_products_limit = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product");
      if (response.status === 200) {
        newArrivals.value = response.data.slice(0, 4);
        topSelling.value = response.data.slice(4, 8);
        productLike.value = response.data.slice(8, 12);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  const search = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/product?name=${input.value}`
      );
      if (response.status === 200) {
        products.value = response.data;
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  const searchProduct = computed(() => {
    if (input.value.length < 3) return products.value;

    return products.value.filter((product) => {
      if (
        product.title.toLowerCase().includes(input.value.toLowerCase()) == false
      ) {
        return false;
      } else {
        return product.title.toLowerCase().includes(input.value.toLowerCase());
      }
    });
  });

  return {
    products,
    newArrivals,
    topSelling,
    productLike,
    input,
    loadProduct,
    fetch_products,
    fetch_products_limit,
    search,
    searchProduct,
  };
});
