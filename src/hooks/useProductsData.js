import axios from "axios";
import { useQuery } from "react-query";
const fetchProducts = () => {
  return axios.get(
    `https://bdcf43c4-e7fc-42dd-beb7-edca7bdedd4a.mock.pstmn.io/products`
  );
};
const useProductsData = () => {
  return useQuery("products", fetchProducts);
};

export default useProductsData;
