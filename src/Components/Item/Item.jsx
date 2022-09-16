import './Item.css';
import { Link } from 'react-router-dom'
import React from 'react';

const Item = ({info}) =>{;
    
return (
    <Link to={`/detalle/${info.id}`} className='card cakes col-3 mx-auto'>
        <img src={info.img}  alt=""  className='img-fluid'/>
        <h1>{info.title}</h1>
        <h2>$ {info.price}</h2>
    </Link>
    );
}
export default Item;