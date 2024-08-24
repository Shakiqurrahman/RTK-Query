import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../Redux/features/apiSlice";

const Products = () => {
    const { data, isError, isLoading } = useGetProductsQuery();
    console.log(data);
    return (
        <section className="p-4 max-w-[1380px] my-10 mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">
                All Products
            </h1>
            {isError && <span className="text-red-500">Error</span>}
            {isLoading && <p className="text-2xl font-semibold">Loading...</p>}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.products.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className="border-2 border-gray-200 p-4"
                        >
                            <img
                                className="mb-4 size-40 mx-auto object-cover"
                                src={product?.thumbnail}
                                alt="products thumbnail"
                            />
                            <h3 className="text-2xl font-semibold mb-2 text-center">
                                {product.title}
                            </h3>
                            <p className="text-center">
                                Category: {product.category}
                            </p>
                            <p className="text-xl font-semibold text-center mt-2 text-blue-500">
                                Price: ${product.price}
                            </p>
                            <Link to={`/products/${product.id}`}>
                                <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2.5 ">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Products;
