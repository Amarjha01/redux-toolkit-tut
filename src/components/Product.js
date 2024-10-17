import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../App.css'
import { useEffect, useState } from 'react';
const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect (() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProduct(json))
    .catch(err => console.log(err));  
  }, []);

  const card = product.map((item) => {
    return (
      <Card key={item.id} style={{ width: '18rem', margin:'15px',  }}>
     <div className='text-center'>
     <Card.Img variant="top" src={item.image} style={{height:'130px', width: '100px', padding:'10px'}} />
     </div>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.price}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style={{background:'white'}}>
      <Button variant="primary">Add to cart</Button>
      </Card.Footer>

    </Card>
    )
  });
  return (
    <>
        <h1>product Deshboard</h1>
        <div className='row'>
          {card}
        </div>
    </>
  )
}

export default Product