import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=30&skip=0"
        );

        if (data) {
          setAllProducts(data?.products);
          setIsLoading(false);
        } else {
          setAllProducts([]);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {allProducts?.length ? (
            <>
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {" "}
                  {allProducts?.map((product, index) => (
                    <SingleProduct
                      key={index}
                      product={product}
                      setCart={setCart}
                      cart={cart}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-2xl ">No data found</div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
