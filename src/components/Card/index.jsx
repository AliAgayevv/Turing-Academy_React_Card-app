import React, { useState } from 'react';

export default function Card({ ids }) {
    

    const data = [
        {
            id: 1,
            photoPath1: "/car1.1.jpg",
            photoPath2: "/car1.2.jpg",
            price: 73000,
            currencies: "$",
            fullName: "Lexus RX 350h",
            description: "2024, 2.5 L, 8 000 km"
        },
        {
            id: 2,
            photoPath1: "/car2.1.jpg",
            photoPath2: "/car2.2.jpg",
            price: 22000,
            currencies: "$",
            fullName: "Hyundai Sonata",
            description: "1.6 L, 2020 il, 90 000 km"
        },
        {
            id: 3,
            photoPath1: "/car3.1.jpg",
            photoPath2: "/car3.2.jpg",
            price: 60000,
            currencies: "$",
            fullName: "BMW X6 M",
            description: "4.4 L, 2015 il, 90 000 km"
        },
        {
            id: 4,
            photoPath1: "/car4.1.jpg",
            photoPath2: "/car4.2.jpg",
            price: 31800,
            currencies: "₼",
            fullName: "Kia Stinger",
            description: "2.0 L, 2018 il, 71 000 km"
        }
    ];


    const [hoveredId, setHoveredId] = useState(null);
    const filteredData = data.filter(item => ids.includes(item.id));

    return (
        <>
            {filteredData.map(item => (
                <div
                    className="card"
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <div className="card--photo-div">
                        <img
                            className="card--photo"
                            src={hoveredId === item.id ? item.photoPath2 : item.photoPath1}
                            alt={item.fullName}
                        />
                    </div>

                    <h2 className="card--price">
                        {item.price.toLocaleString()} {item.currencies}
                    </h2>
                    <h2 className="card--name">
                        {item.fullName}
                    </h2>
                    <h2 className="card--desc">
                        {item.description}
                    </h2>
                </div>
            ))}
        </>
    );
}
