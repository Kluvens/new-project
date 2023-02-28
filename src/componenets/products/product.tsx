import React, { useContext } from "react";

export const Product = (props: any) => {
    const { id, productName, productImage } = props.data;
    
    return (
        <div className="product">
            <img className="item-image" src={productImage} alt="{productName}" />
            <span className="description">
                <span>
                    分子式：{productName}
                </span>
                <span>
                    CAS No: 51429-74-4
                </span>
            </span>
        </div>
    )
}