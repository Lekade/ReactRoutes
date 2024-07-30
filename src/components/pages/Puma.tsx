import React from 'react';
import puma1 from "./../../assets/puma1.webp"
import puma2
    from "./../../assets/puma2.webp"
import puma3 from "./../../assets/puma3.webp"
import {S} from "./_styles"
import {Link} from "react-router-dom";

export type PumaItem = {
    id: string
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const pumaArr: PumaItem[] = [
    {
        id: '4',
        model: 'PUMA V5COM88',
        collection: 'new collection0',
        price: '200$',
        picture: puma1

    },
    {
        id: '5',
        model: 'PUMA 777',
        collection: 'new collection01',
        price: '300$',
        picture: puma2
    },
    {
        id: '6',
        model: 'PUMA V8M55',
        collection: 'new collection010',
        price: '400$',
        picture: puma3
    }
]

export const Puma = () => {

    return (
        <div>
            <h2> Puma</h2>
            <S.PictureWrapper>
                {pumaArr.map(el =>
                    <li key={el.id}>
                        <S.Picture src={el.picture} alt={el.model}/>
                        <div>
                            <Link to={`/puma/${el.id}`}><h4>{el.model}</h4></Link>
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

