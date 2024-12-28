/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heart, ShoppingCart, Eye, Trash2 } from "lucide-react";

const SingleProduct = ({ product, setCart, cart }: any) => {
  const discountAmount = (product.price * product.discountPercentage) / 100;
  const findCartProduct = cart.find((item: any) => item.id === product.id);
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm relative group  hover:shadow-lg">
        {/* Image Container */}
        <div className="relative bg-[#ebe6e6] rounded-md ">
          <div className="aspect-[3/4]">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>

          {/* Discount Tag */}
          <div
            className="absolute top-2 -left-1 "
            style={{
              clipPath: "polygon(0 0, 90% 0, 80% 50%, 90% 100%, 0 100%, 0 50%)",
            }}
          >
            <span className="bg-orange-500 text-white text-sm ps-2 pr-4 py-1 rounded">
              <span className="text-lg">&#2547; </span>
              {(product.price - discountAmount).toFixed(2)}
            </span>
          </div>

          {/* Heart Icon */}
          <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full">
            <Heart size={18} className="text-gray-400" />
          </button>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="absolute inset-x-0 bottom-0 space-y-2 p-3">
              {/* Add to Cart Button */}
              {findCartProduct?.id ? (
                <div className="flex items-center justify-between bg-green-500 text-white text-sm font-medium rounded px-3 py-2 w-full">
                  <Trash2 className="w-4 h-4 mr-2" />
                  <span>1 Added in Cart</span>
                  <span className="ml-3 pl-3 border-l border-green-400 font-bold">
                    +
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => setCart([...cart, product])}
                  className="w-full bg-[#bbb9ba] backdrop-blur-sm text-gray-800 py-1 rounded flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>
              )}

              {/* Quick View Button */}
              <button className="w-full bg-[#bbb9ba] backdrop-blur-sm text-gray-800 py-1 rounded flex items-center justify-center gap-2">
                <Eye size={18} />
                <span>Quick View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3">
          <div className="text-left">
            <h4 className="text-xs text-gray-500">{product?.brand}</h4>
            <h3 className="text-sm font-medium text-gray-900 truncate mt-0.5">
              {product.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-blue-600 font-semibold">
              <span className="text-lg">&#2547; </span>
              {(product.price - discountAmount).toFixed(2)}
            </span>
            <span className="text-gray-400 text-sm line-through pt-1 ">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
