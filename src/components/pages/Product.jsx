import React, { useContext } from 'react'
import { ShopContext } from '../views/home/ShopContext';
import { useParams } from 'react-router-dom';
import Bredcrums from '../views/home/BredCrums';
import ProductDisplay from '../views/home/ProductDisplay';
import Description from '../views/home/Description';
import RelatedProducts from '../views/home/RelatedProducts';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === parseInt(productId));
  return (
    <div>
      <Bredcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product