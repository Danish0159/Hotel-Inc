import React from 'react'
import './index.css'
import { useState } from 'react'
import TourApp from '../src/Tours/TourApp'
import MenuApp from '../src/Menu/MenuApp'
import ReviewsApp from '../src/Slider/SliderApp'


const App = () => {
    const [menu, setMenu] = useState(false);
    const [tour, setTour] = useState(false);
    const [review, setReview] = useState(false);

    const menuRender = () => {
        setMenu(true);
        setTour(false);
        setReview(false);
    }
    const TourRender = () => {
        setTour(true);
        setMenu(false);
        setReview(false);
    }
    const reviewRender = () => {
        setReview(true);
        setMenu(false);
        setTour(false);
    }

    if (menu) {
        return (
            <>
                <div className="front__main">
                    <h2 className="front__title">Hotel Inc.</h2>
                    <div className="front__btn-container">
                        <button className="front__btn" onClick={() => { menuRender() }}>Menu</button>
                        <button className="front__btn" onClick={() => { TourRender() }}>Tours</button>
                        <button className="front__btn" onClick={() => { reviewRender() }}>Reviews</button>
                        {/* <button className="front__btn" onClick={() => { reviewRender() }}>Stocks</button> */}
                    </div>
                </div>
                <MenuApp></MenuApp>
            </>
        )
    }

    if (tour) {
        return (
            <>
                <div className="front__main">
                    <h2 className="front__title">Hotel Inc.</h2>
                    <div className="front__btn-container">
                        <button className="front__btn" onClick={() => { menuRender() }}>Menu</button>
                        <button className="front__btn" onClick={() => { TourRender() }}>Tours</button>
                        <button className="front__btn" onClick={() => { reviewRender() }}>Reviews</button>
                        {/* <button className="front__btn" onClick={() => { reviewRender() }}>Stocks</button> */}
                    </div>
                </div>
                <TourApp></TourApp>
            </>
        )
    }

    if (review) {
        return (
            <>
                <div className="front__main">
                    <h2 className="front__title">Hotel Inc.</h2>
                    <div className="front__btn-container">
                        <button className="front__btn" onClick={() => { menuRender() }}>Menu</button>
                        <button className="front__btn" onClick={() => { TourRender() }}>Tours</button>
                        <button className="front__btn" onClick={() => { reviewRender() }}>Reviews</button>
                        {/* <button className="front__btn" onClick={() => { reviewRender() }}>Stocks</button> */}
                    </div>
                </div>
                <ReviewsApp></ReviewsApp>
            </>
        )
    }


    // By Default Return
    return (
        <>
            <div className="front__main">
                <h2 className="front__title">Hotel Inc.</h2>
                <div className="front__btn-container">
                    <button className="front__btn" onClick={() => { menuRender() }}>Menu</button>
                    <button className="front__btn" onClick={() => { TourRender() }}>Tours</button>
                    <button className="front__btn" onClick={() => { reviewRender() }}>Reviews</button>
                    {/* <button className="front__btn" onClick={() => { reviewRender() }}>Stocks</button> */}
                </div>
            </div>
            <MenuApp></MenuApp>
        </>
    )
}

export default App
