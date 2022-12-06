import axios from "axios";
import { useQuery } from "react-query";
const fetchProducts = () => {
  return axios.get(
    `https://a749e01e-8687-4852-9577-fc61ad1aae62.mock.pstmn.io/products`
  );
};
const useProductsData = () => {
  return useQuery("products", fetchProducts);
};

export default useProductsData;
