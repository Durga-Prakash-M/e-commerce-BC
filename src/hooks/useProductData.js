import { useQuery } from "react-query";
import axios from "axios";
const fetchProduct = ({ queryKey }) => {
  const prod_id = queryKey[1];
  return axios.get(
    `https://bdcf43c4-e7fc-42dd-beb7-edca7bdedd4a.mock.pstmn.io/products/${prod_id}`
  );
};
const useProductData = (prod_id) => {
  return useQuery(["products", prod_id], fetchProduct);
};

export default useProductData;
