import React from "react";
import { Product } from "../../componenets/products/product";
import { PRODUCTS } from "../../componenets/products/products";
import "./home.css"

export const Home = () => {
    return (
        <div className="homePage">

            <div className="categories">
                <ul>
                    <li>All</li>
                    <li>Linked List</li>
                    <li>Binary Tree</li>
                    <li>AVL Tree</li>
                    <li>Graph</li>
                    <li>Sorting Algorithm</li>
                    <li>Bitwise Operation</li>
                    <li>Stack</li>
                    <li>Queue</li>
                </ul>
            </div>

            <div className="items">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>          
        </div>
    );
};