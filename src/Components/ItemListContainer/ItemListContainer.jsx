import ItemList from '../ItemList/ItemList';
import Title from '../Title/title';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const cakes = [
        {id: 1, category: "dulce", stock: 10, sold: 0, title: "Tortas", description: "Tortas heladas a base de crema y oreos",
          price: 1500,img: "../cakes/torta.jpg",},
        {id: 2, category: "dulce", stock: 10, sold: 0, title: "Shots",  escription:"Vaso de postre individual de diferentes sabores",
          price: 850, img: "../cakes/shots.jpg",},
        {id: 3, category: "dulce", stock: 16, sold: 0, title: "Tartitas", description:"Variedad de mini tartitas y mini tortitas",
          price: 600, img: "../cakes/tartitas.jpg",},
        {id: 4, category: "dulce", stock: 16,  sold: 0, title: "Alfajores", description:"Caja de 7 alfajores de diferentes sabores",
          price: 500, img: "../cakes/alfajores.jpg",},
        {id: 5, category: "salado", stock: 12, sold: 0, title: "Sandwichitos", description:"Sadwiches de pan casero, con tomate, rúcula y queso",
          price: 1100, img: "../cakes/sandwich2.jpg",},
        {id: 6, category: "salado", stock: 12, sold: 0, title: "Bocaditos y Bruschettas", description:"Mini tostadas y bocaditos de hojaldre surtidos",
          price: 720,  img: "../cakes/bocaditoybruscheta.jpg",},
        {id: 7, category: "salado", stock: 15, sold: 0, title: "Mini Hamburgesas", description:"Mini hamburguesa con pan casero, carne, tomate y queso cheddar",
          price: 1200, img: "../cakes/hamburguesa.jpg",},
        {id: 8, category: "salado", stock: 15, sold: 0, title: "Empanadas", description:"Empanadas de copetin arabe, criolla, jamon y queso, cebolla y queso",
          price: 1000, img: "../cakes/empanadas.jpg",},
              ]
      

export const ItemListContainer = ({texto}) => {
        
    const [data, setData] = useState ([]);

    const {categoriaId} = useParams();
    

    useEffect(()=> {
    const getData = new Promise (resolve => { 
        setTimeout (()=> {
            resolve (cakes);
        }, 2000);
    });
    if (categoriaId) {
      getData.then(res => setData (res.filter(cakes => cakes.category === categoriaId)));
    } else{
      getData.then(res => setData(res));
    }
    }, [categoriaId])

 
    return (
        <>
        <Title  greeting={texto}/>
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;