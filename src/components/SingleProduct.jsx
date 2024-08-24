import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../Redux/features/apiSlice";

const SingleProduct = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id);
    console.log(data);

    return (
        <section className="p-4 max-w-[1380px] my-10 mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">
                Single Product
            </h1>
            {error && <span className="text-red-500">Error</span>}
            {isLoading && <p className="text-2xl font-semibold">Loading...</p>}
            <div className="flex justify-between items-center">
               <div className="w-full">
               <img className="w-[60%] mx-auto" src={data?.thumbnail} alt={data?.title} />
               </div>
                <div className="w-full">
                    <h2 className="text-2xl font-semibold mb-2">
                        {data?.title}
                    </h2>
                    <p>{data?.description}</p>
                    <p className="text-lg mt-2 font-medium text-orange-500">Price: ${data?.price}</p>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;
