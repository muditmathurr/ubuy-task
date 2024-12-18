import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setFilteredProducts(data.products);
            })
            .catch((err) => console.error("Error:", err));
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="p-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 p-2 bg-gray-300 rounded hover:bg-yellow-300"
            >  Back </button>

            <h1 className="text-2xl font-bold text-center mb-4">Product </h1>

            <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded shadow p-2 flex flex-col items-center"
                        >
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-32 object-cover rounded mb-2"
                            />
                            <p className="text-center font-semibold">{product.title}</p>
                            <p className="text-center font-semibold text-red-700">₹{product.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No products found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Products;
