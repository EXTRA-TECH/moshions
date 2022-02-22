/* eslint-disable @next/next/no-img-element */
import React from 'react';

function CategoryCards() {
    return (
        <section>
            <div className='category-cards'>
                <div className='category-card'>
                    <img src='/assets/Video 1.jpg' alt=''/>
                    <div className='category-content'>
                        <div>
                            <h1>SS22</h1>
                            <p>IMANDWA COLLECTION</p>
                        </div>
                        <div className='category-lists'>
                            <ul>
                                <li>
                                    <a href="/products?category=men">MEN</a>
                                </li>
                                <li>
                                    <a href="/products?category=women">WOMEN</a>
                                </li>
                                <li>
                                    <a href="/products?category=accessories" className='text-uppercase'>ACCESSORIES</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='category-card'>
                    <img src='/assets/Video 1.jpg'/>
                    <div className='category-content'>
                        <div>
                            <h1>SS21</h1>
                            <p>Shop Previous Collections</p>
                        </div>
                        <div className='category-lists'></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoryCards;
