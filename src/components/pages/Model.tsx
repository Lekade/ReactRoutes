import React from 'react';
import {adidasArr, AdidasItem} from './Adidas'
import {pumaArr, PumaItem} from './Puma'
import {useParams} from "react-router-dom";
import {S} from "./_styles"

type NameArr = {[key: string] : (AdidasItem[] | PumaItem[])}

const nameArr:NameArr ={
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    const {name, id} = useParams()

    const modelItem = name ? nameArr[name].find(el => el.id === id) : null
    return (
        <S.ModelWrapper>
            {
                modelItem
                    ? <div>
                        <h2>{modelItem.model}</h2>
                        <img src={modelItem.picture} alt={modelItem.model}/>
                        <div><span>Price: </span><span>{modelItem.price}</span></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dicta distinctio dolor doloremque harum id, nemo pariatur quas rem rerum sed veritatis vitae voluptas. Aspernatur ea fugit maxime neque obcaecati?</p>
                      </div>
                    : <span>The model is missing</span>
            }
        </S.ModelWrapper>
    );
};

export default Model;