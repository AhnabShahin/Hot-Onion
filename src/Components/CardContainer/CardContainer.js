import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./CardContainer.css";
import Cart from './../Cart/Cart';
import axios from 'axios';



const CardContainer = () => {
    const [loadData, setLoadData]=useState({});
    const [catagory, setCatagory]=useState('breakfast')
    useEffect(()=>{
        async function getData(){
            const res= await axios.get('./Demodata/food.json')
            setLoadData(res);
        }
        getData();
    },[])
    const handleCatagory=(e)=>{
        console.log(e.target.innerHTML)
        setCatagory(e.target.innerHTML);
    }
    return (
        <Container>
            <div className="mealCategory my-3">
                <p onClick={handleCatagory} className={'mealCategoryItems '+(catagory.toUpperCase()==='BREAKFAST' ? 'active':'')}>Breakfast</p>
                <p onClick={handleCatagory} className={'mealCategoryItems '+ (catagory.toUpperCase()==='LUNCH' ? 'active':'')}>Lunch</p>
                <p onClick={handleCatagory} className={'mealCategoryItems '+ (catagory.toUpperCase()==='DINNER' ? 'active':'')}>Dinner</p>
            </div>
            <Row className="g-4" >
                {
                    loadData?.data?.foods?.map((cart)=>( cart.catagories.toUpperCase()=== catagory.toUpperCase()? <Cart key={cart.id} cart={cart}></Cart>:null))
                }
            </Row>
        </Container>
    );
};

export default CardContainer;