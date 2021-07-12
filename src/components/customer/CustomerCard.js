import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
    </section>
)
{/* <div className="customer__animal">{customer.name}</div> */}