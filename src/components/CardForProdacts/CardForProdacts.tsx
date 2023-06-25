import React, {useState} from 'react';
import {ProductsList} from '../ProductCard/ProductList';
import {ProductsType} from '../../App';

type CardForProdact = {
    prodactCard: ProductsType[]
}

export const CardForProdacts: React.FC<CardForProdact> = (props, ...restprops) => {

    const [isOpen, setOpen] = useState(false)


    return (
        <div>
            <h1 onClick={() => setOpen(!isOpen)}>korzina</h1>

                {isOpen === true ?
                        props.prodactCard.map(el => {
                            return <div key={el.id} className="products ios apple" id="iphone-x">
                                <img className="product-image"
                                     src={el.src}/>
                                <p className="product-name">{el.title}</p>
                                <p className="product-description">{el.description}</p>
                                <div>
                                    <div>
                                        <button>-</button>
                                        <input type="text"/>
                                        <button>+</button>
                                    </div>
                                </div>
                                <p className="product-price">{el.price}</p>
                                <button className="add-to-cart" id="test">ADD TO CART</button>
                            </div>
                        }):
                    <div>Cart is empty</div>}

        </div>
    );
};

