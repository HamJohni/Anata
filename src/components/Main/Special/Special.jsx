import React from 'react';

const Special = () => {
    return (
        <section className="special">
            <div className="container">
                <h2 className="special__title">
                    Специально для Вас видео наших кухонь
                </h2>

                <div className="special__boxes">

                    <div className="special__box">

                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/xSETaLiHTHI"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>

                    <div className="special__box">

                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/H8Kn26V_HTM"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>

                    <div className="special__box">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/1ba7C9kuCus"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>

                </div>

                <button className="special__btn btn">
                    Смотреть больше видео
                </button>

            </div>
        </section>
    );
};

export default Special;