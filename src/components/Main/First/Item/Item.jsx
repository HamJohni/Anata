import React from 'react';

const Item = ({transform}) => {
    return (
        <div className="first__items">
            <div style={transform} className="first__slider">
                <div className="first__bg"></div>
                <div className="first__content">
                    <div className="first__content-text">
                        <h2 className="first__content-title">
                            Кухни от производителя
                        </h2>

                        <p className="first__content-sale">
                            -40%
                        </p>

                        <p className="first__content-collection">
                            На коллекции кухонь
                        </p>
                    </div>

                    <button className="first__content-btn btn">
                        Выбрать
                    </button>
                </div>
            </div>
            <div style={transform} className="first__slider">
                <div className="first__content">
                    <div className="first__content-text">
                        <h2 className="first__content-title">
                            Кухни от производителя
                        </h2>

                        <p className="first__content-sale">
                            -40%
                        </p>

                        <p className="first__content-collection">
                            На коллекции кухонь
                        </p>
                    </div>

                    <button className="first__content-btn btn">
                        Выбрать
                    </button>
                </div>
                <div className="first__bg first__bg-second"></div>
            </div>
            <div style={transform} className="first__slider">
                <div className="first__bg first__bg-third"></div>
                <div className="first__content">
                    <div className="first__content-text">
                        <h2 className="first__content-title">
                            Кухни от производителя
                        </h2>

                        <p className="first__content-sale">
                            -40%
                        </p>

                        <p className="first__content-collection">
                            На коллекции кухонь
                        </p>
                    </div>

                    <button className="first__content-btn btn">
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;