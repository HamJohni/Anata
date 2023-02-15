import React from 'react';

const Call = ({openTwo,setOpenTwo}) => {

    return (
        <div>
            <div className={openTwo? "overlayCall active": "overlayCall"} onClick={() => setOpenTwo(false)}>

                <div className={openTwo? "call active": "call"} onClick={e => e.stopPropagation()}>
                    <p className="project__svg">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_116_4358)">
                                <path d="M21.2179 0.00100708H6.21868C5.39025 0.00100708 4.71875 0.672505 4.71875 1.50093V46.4987C4.71875 47.3272 5.39025 47.9987 6.21868 47.9987H21.2179C22.0464 47.9987 22.7179 47.3272 22.7179 46.4987V1.50093C22.7179 0.672505 22.0463 0.00100708 21.2179 0.00100708ZM19.718 44.9988H7.7186V40.499H15.2182V37.4992H7.7186V32.9994H12.2184V29.9995H7.7186V25.4998H15.2182V22.4999H7.7186V18.0001H12.2184V15.0003H7.7186V10.5005H15.2182V7.50064H7.7186V3.00086H19.718V44.9988Z" fill="#B17955"/>
                                <path d="M41.1666 37.9494L36.2169 42.8841V5.11597L41.1516 10.0507L43.2665 7.93583L35.7669 0.436197C35.1818 -0.145399 34.237 -0.145399 33.652 0.436197L26.1523 7.93583L28.2672 10.0507L33.217 5.11597V42.8841L28.2822 37.9494L26.1673 40.0643L33.667 47.5639C34.252 48.1455 35.1968 48.1455 35.7819 47.5639L43.2815 40.0643L41.1666 37.9494Z" fill="#B17955"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_116_4358">
                                    <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </p>

                    <h1 className="project__title">
                        Вызвать замерщика<br/>
                        с образцами
                    </h1>

                    <form className="project__form" onSubmit={() => setOpenTwo(false)}>

                        <label className="project__label">

                    <span className="project__label-span">
                        Представьтесь
                    </span>

                            <input className="project__label-input" type="text" placeholder="Ваше имя..." minLength="3"/>
                        </label>

                        <label className="project__label">
                        <span className="project__label-span">
                            Телефон
                        </span>

                            <input className="project__label-input" type="number" placeholder="Ваш телефонный номер..."/>

                        </label>

                        <button className="project__form-btn btn" type="submit">
                            Рассчитать
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Call;