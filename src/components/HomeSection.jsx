import React from 'react';

const HomeSection = () => {
    return (
        <section className="home">
            <div className="content">
                <h3>Рекомендательная система</h3>
                <button className="btn">Рассчитать</button>
            </div>
            <div className="image">
                <img src="images/home-img.svg" alt="" />
            </div>
        </section>
    );
};

export default HomeSection;