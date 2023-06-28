import React, {useState} from 'react';
import {ProductsList} from '../ProductCard/ProductList';
import {ProductsType} from '../../App';
import {CartItem} from './CartItem';

export type CardForProdact = {
    prodactCard: ProductsType[]
}




export const CardForProdacts: React.FC<CardForProdact> = (props, ...restprops) => {

    const [isOpen, setOpen] = useState(true)



    return (
        <div>
            <h1 onClick={() => setOpen(!isOpen)}>korzina</h1>

                {isOpen === true ?
                        props.prodactCard.map(el => {
                            return <CartItem cartProduct={el} />
                        }):
                    <div>Cart is empty</div>}

        </div>
    );
};

