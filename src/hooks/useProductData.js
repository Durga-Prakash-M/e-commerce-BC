import { useQuery } from "react-query";
import axios from "axios";
const fetchProduct = ({ queryKey }) => {
  const prod_id = queryKey[1];
  return axios.get(
    `https://a749e01e-8687-4852-9577-fc61ad1aae62.mock.pstmn.io/products/${prod_id}`
  );
};
const useProductData = (prod_id) => {
  return useQuery(["products", prod_id], fetchProduct);
};

export default useProductData;
