import React from "react"
import "./Product.css"

export const ProductCard = ({ product }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__address">${product.price}</address>
    </section>
)