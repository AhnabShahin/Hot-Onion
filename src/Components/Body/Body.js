import React from 'react';
import { Router } from 'react-router';
import bannerbackground from '../../Resource/bannerbackground.png';
import './Body.css'
import CardContainer from './../CardContainer/CardContainer';

const Body = () => {
    return (<>
        <div className="bannerImgContainer">
            <img src={bannerbackground} className="bannerImg" alt="" />
            <div className="bannerHead">
            <h1 className="mb-3">Best food wating for your belly</h1>
                <input type="text" />
                <button className="buttonMain"> Search </button>
            </div>
        </div>
        <CardContainer>
            
        </CardContainer>
        </>
    );
};

export default Body;