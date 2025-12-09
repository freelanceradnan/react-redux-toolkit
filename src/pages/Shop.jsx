import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";



const Shop = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
     fetch('https://my-json-server.typicode.com/AnifaMd/shopping-cart/products')
     .then(res=>res.json())
     .then(data=>setProduct(data))
    },[])
    return (
        <>
        <div className="product-section">
            {product.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </>
    );
};

export default Shop;