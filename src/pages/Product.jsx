import React, { useContext } from 'react';
import {ShopContext} from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrums/Breadcrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescribtionBox from '../components/describtionBox/DescribtionBox';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';
// const all_product = require('../components/assets/all_product.js');

function Product() {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();

    if (!all_product || all_product.length === 0) {
        // Handle loading state or data not available yet
        return <div>Loading...</div>;
      }
    const product = all_product.find((e) => e.id === Number(productId));
    
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescribtionBox />
            <RelatedProducts />
        </div>
    );
}

export default Product;