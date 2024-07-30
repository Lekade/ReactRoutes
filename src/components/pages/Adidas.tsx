import React from 'react';
import adidasModel1 from "./../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp"
import adidasModel2
    from "./../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp"
import adidasModel3 from "./../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp"
import {S} from "./_styles"
import {Link} from "react-router-dom";

export type AdidasItem = {
    id: string
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr: AdidasItem[] = [
    {
        id: '1',
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        id: '2',
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: '3',
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]

export const Adidas = () => {

    return (
        <div>
            <h2> ADIDAS</h2>
            <S.PictureWrapper>
                {adidasArr.map(el =>
                    <li key={el.id}>
                        <S.Picture src={el.picture} alt={el.model}/>
                        <div>
                            <Link to={`/adidas/${el.id}`}><h4>{el.model}</h4></Link>
                            <span>{el.collection}</span>
                            <div>
                                <span>Price: </span>
                                <span>{el.price}</span>
                            </div>

                        </div>
                    </li>)}
            </S.PictureWrapper>
        </div>
    );
};

