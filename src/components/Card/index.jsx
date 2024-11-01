export default function Card({ ids }) {
    const data = [{
        id: 1,
        photoPath: "/car.jpg",
        price: 73_000,
        currencies: "$",
        fullName: "Lexus RX 350h",
        description: "2024, 2.5 L, 8 000 km"
    }, {
        id: 2,
        photoPath: "/car2.jpg",
        price: 22_000,
        currencies: "$",
        fullName: "Hyundai Sonata",
        description: " 1.6 L, 2020 il, 90 000 km"
    },
    {
        id: 3,
        photoPath: "/car3.jpg",
        price: 60_000,
        currencies: "$",
        fullName: "BMW X6 M",
        description: "4.4 L, 2015 il, 90 000 km"
    },
    {
        id: 4,
        photoPath: "/car4.jpg",
        price: 31_800,
        currencies: "₼",
        fullName: "Kia Stinger",
        description: "2.0 L, 2018 il, 71 000 km"
    }
    ]


    const filteredData = data.filter(item => ids.includes(item.id));

    return (
        <>
            {filteredData.map(item => (
                <div key={item.id} className="card">
                    <div className="card--photo-div">
                        <img className="card--photo" src={item.photoPath} alt={item.fullName} />
                    </div>

                    <h2 className="card--price">
                        {item.price} {item.currencies}
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
    )
}