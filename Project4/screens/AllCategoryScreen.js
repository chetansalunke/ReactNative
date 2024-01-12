import { Text ,FlatList} from "react-native";
import CategoryItem from "../components/CategoryItem";
import CategoryList from "../components/CategoryList";
import { CATEGORIES } from "../data/dummy-data";
import { useEffect, useState } from "react";
import axios from 'axios';
const AllCategoryScreen=()=>{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch data from API
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          // Replace the URL with your actual API endpoint
          const response = await axios.get('http://localhost:3000/api/category');
          const data = response.data;
          setCategories(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

return(
    <CategoryList data={categories} />
);
}
export default AllCategoryScreen;
