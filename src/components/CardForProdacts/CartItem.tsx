import React, {useState} from 'react';
import {CardForProdact} from './CardForProdacts';
import {ProductsType} from '../../App';

type PropsCartItemType={
    cartProduct: ProductsType
}

export const CartItem=({cartProduct}:PropsCartItemType)=>{
    const[guantity,setguantity]=useState(0)

    return <div key={cartProduct.id} className="products ios apple" id="iphone-x">
        <img className="product-image"
             src={cartProduct.src}/>
        <p className="product-name">{cartProduct.title}</p>
        <p className="product-description">{cartProduct.description}</p>
        <div>
            <div>
                <button>-</button>
                <input type="text"/>
                <button>+</button>
            </div>
        </div>
        <p className="product-price">{cartProduct.price}</p>
        <input type="text" value={guantity}/>
        <div><button   onClick={()=>setguantity(guantity>1?guantity-1:guantity)}>-</button></div>

        <div><button onClick={()=>setguantity(guantity<10?guantity+1:guantity)}>+</button></div>

        <button className="add-to-cart" id="test">ADD TO CART</button>
    </div>
}