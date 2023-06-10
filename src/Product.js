import React from "react";
import "./Product.css";
function Product({ id, title, price, rating, image }) {
	return (
		<div className="product">
			<p>{title}</p>
			<p>
				<small>Rs.</small>
				<strong>{price}</strong>
			</p>
            <div className="product_rating">
                {
                    Array(rating).fill().map(() => (<p>⭐</p>))
                }
            </div>
		</div>
	);
}

export default Product;
