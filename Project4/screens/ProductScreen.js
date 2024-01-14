import { Text } from "react-native";
import ProductList from "../components/product/ProductList";
import { PRODUCT } from "../data/dummy-data";

const ProductScreen=()=>{

return <ProductList data={PRODUCT}/>
}
export default ProductScreen;
 