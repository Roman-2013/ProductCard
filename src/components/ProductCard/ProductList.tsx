import React from 'react';
import {ProductCard, ProductCardType} from './ProductCard';
import {ProductsType} from '../../App';


export type ProductsList={
    products:ProductsType[]
    addToCart:(prodact:ProductsType)=>void
}
export const ProductList:React.FC<ProductsList> = (props) => {
    return (
        <div className="ProductList">
            {props.products.map(el => {
                return (
                    <ProductCard key={el.id}
                                 addToCart={props.addToCart}
                                 product={el}
                    />
                )
            })}
        </div>
    )
};

