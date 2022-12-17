import React from "react";

const Card = ({ item }) => {
    return (
        <div className="cardClass">
            <div className="banner-inner fill">
                <div className="banner-bg">
                    <div className="card-image">
                        <img src={item.image} alt="" />
                    </div>
                </div>
                <div className="banner-layers">

                    <div className="text-inner text-center">
                        <h4 className="uppercase">{item.Text}</h4>
                        <h2 className="uppercase">
                            <strong>{item.title}</strong>
                        </h2>
                        <a
                            className="button white is-outline" href="/"
                        >
                            <span>Shop now</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
