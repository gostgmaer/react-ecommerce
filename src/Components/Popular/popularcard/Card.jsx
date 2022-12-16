import React from "react";

const Card = ({ item }) => {
    return (
        <div className="cardClass">
            <div class="banner-inner fill">
                <div class="banner-bg">
                    <div class="card-image">
                        <img src={item.image} alt="" />
                    </div>
                </div>
                <div class="banner-layers">

                    <div class="text-inner text-center">
                        <h4 class="uppercase">{item.Text}</h4>
                        <h2 class="uppercase">
                            <strong>{item.title}</strong>
                        </h2>
                        <a
                            class="button white is-outline" href="/"
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
