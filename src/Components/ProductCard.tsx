import React from 'react';
import {stringify} from 'querystring';


type ProductsPropsType = {
    id: number
    src: string
    title: string
    description: string
    price: number
    deleteBtn:(id:number)=>void
}

export const ProductCard = (props:ProductsPropsType) => {
    return (
                    <div className="products ios apple" id="iphone-x">
                        <button onClick={()=>props.deleteBtn(props.id)}>delete</button>
                        <img className="product-image" src={props.src}/>
                        <p className="product-name">{props.title}</p>
                        <p className="product-description">{props.description}</p>
                        <div>
                            <div>
                                <button>-</button>
                                <input type="text"/>
                                <button>+</button>
                            </div>
                        </div>
                        <p className="product-price">{props.price}</p>
                        <button className="add-to-cart" id="test">ADD TO CART</button>
                    </div>
    )
}