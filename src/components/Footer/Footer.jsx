import React,{useState} from 'react';
import Project from "../Header/Project/Project";
import Call from "../Header/Call/Call";

const Footer = () => {

    const [openOne, setOpenOne] = useState(false)

    const [openTwo,setOpenTwo] = useState(false)

    const [style,setStyle] = useState(false)

    const [front,setFront] = useState(false)

    const [form,setForm] = useState(false)

    const [size,setSize] = useState(false)

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">

                    <div className="footer__bottom">
                        <h2 className="footer__bottom-title">
                            Стиль
                        </h2>
                        <div className="footer__bottom-ul">
                            <a className="footer__bottom-li">Классика</a>
                            <a className="footer__bottom-li">Неоклассика</a>
                            <a className="footer__bottom-li">Прованс</a>
                            <a className="footer__bottom-li">Современный</a>
                            <a className="footer__bottom-li">Скандинавский</a>
                            <a className="footer__bottom-li">Лофт</a>
                            <a className="footer__bottom-li">Барокко</a>
                            <a className="footer__bottom-li">Минимализм</a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <h2 className="footer__bottom-title">
                            Фасад
                        </h2>
                        <div className="footer__bottom-ul">
                            <a className="footer__bottom-li">МДФ</a>
                            <a className="footer__bottom-li">Эмаль</a>
                            <a className="footer__bottom-li">Пластик</a>
                            <a className="footer__bottom-li">Массив дерева</a>
                            <a className="footer__bottom-li">Акрил</a>
                            <a className="footer__bottom-li">ЛДСП</a>
                            <a className="footer__bottom-li">Дуб</a>
                            <a className="footer__bottom-li">Шпон</a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <h2 className="footer__bottom-title">
                            Форма кухни
                        </h2>
                        <div className="footer__bottom-ul">
                            <a className="footer__bottom-li">Прямые</a>
                            <a className="footer__bottom-li">Г-образные</a>
                            <a className="footer__bottom-li">П-образные</a>
                            <a className="footer__bottom-li">Угловые</a>
                            <a className="footer__bottom-li">С барной стойкой</a>
                            <a className="footer__bottom-li">С островом</a>
                            <a className="footer__bottom-li">С пеналом</a>
                            <a className="footer__bottom-li">Нестандартные</a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <h2 className="footer__bottom-title">
                            Размер
                        </h2>
                        <div className="footer__bottom-ul">
                            <a className="footer__bottom-li">Небольшие кухни</a>
                            <a className="footer__bottom-li">Кухни 4 метра</a>
                            <a className="footer__bottom-li">Кухни 5 метра</a>
                            <a className="footer__bottom-li">Кухни 6 метра</a>
                            <a className="footer__bottom-li">Кухни 8 метра</a>
                            <a className="footer__bottom-li">Кухни 10 метра</a>
                            <a className="footer__bottom-li">Кухни 12 метра</a>
                            <a className="footer__bottom-li">Кухни 14 метра</a>
                        </div>
                    </div>

                </div>

                <div className="footer__top-adaptation">

                    <div className="footer__bottom">
                        <h2 className={style? "footer__bottom-title active" : "footer__bottom-title"} onClick={() => style? setStyle(false):setStyle(true) }>
                            Стиль
                            {
                                style? <span className="footer__down" >
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 9L8 1L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                </span>  : <span className="footer__down" >
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 1L8 9L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                   </svg>
                                </span>
                            }
                        </h2>
                        <div className={style? "footer__bottom-ul active": "footer__bottom-ul" }>
                            <a className="footer__bottom-li">Классика</a>
                            <a className="footer__bottom-li">Неоклассика</a>
                            <a className="footer__bottom-li">Прованс</a>
                            <a className="footer__bottom-li">Современный</a>
                            <a className="footer__bottom-li">Скандинавский</a>
                            <a className="footer__bottom-li">Лофт</a>
                            <a className="footer__bottom-li">Барокко</a>
                            <a className="footer__bottom-li">Минимализм</a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <h2 className={front? "footer__bottom-title active" : "footer__bottom-title"} onClick={() => front? setFront(false):setFront(true)}>
                            Фасад
                            {
                                style? <span className="footer__down" >
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 9L8 1L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                </span>  : <span className="footer__down" >
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 1L8 9L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                   </svg>
                                </span>
                            }
                        </h2>
                        <div className={front? "footer__bottom-ul active": "footer__bottom-ul" }>
                            <a className="footer__bottom-li">МДФ</a>
                            <a className="footer__bottom-li">Эмаль</a>
                            <a className="footer__bottom-li">Пластик</a>
                            <a className="footer__bottom-li">Массив дерева</a>
                            <a className="footer__bottom-li">Акрил</a>
                            <a className="footer__bottom-li">ЛДСП</a>
                            <a className="footer__bottom-li">Дуб</a>
                            <a className="footer__bottom-li">Шпон</a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <h2 className={form? "footer__bottom-title active" : "footer__bottom-title"} onClick={() => form? setForm(false):setForm(true)}>
                            Форма кухни
                            {
                                style? <span className="footer__down" >
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 9L8 1L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                </span>  : <span className="footer__down" >
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 1L8 9L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                   </svg>
                                </span>
                            }
                        </h2>
                        <div className={form? "footer__bottom-ul active": "footer__bottom-ul" }>
                            <a className="footer__bottom-li">Прямые</a>
                            <a className="footer__bottom-li">Г-образные</a>
                            <a className="footer__bottom-li">П-образные</a>
                            <a className="footer__bottom-li">Угловые</a>
                            <a className="footer__bottom-li">С барной стойкой</a>
                            <a className="footer__bottom-li">С островом</a>
                            <a className="footer__bottom-li">С пеналом</a>
                            <a className="footer__bottom-li">Нестандартные</a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <h2 className={size? "footer__bottom-title active" : "footer__bottom-title"} onClick={() => size? setSize(false):setSize(true)}>
                            Размер
                            {
                                size? <span className="footer__down" >
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 9L8 1L1 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                </span>  : <span className="footer__down" >
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 1L8 9L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                   </svg>
                                </span>
                            }
                        </h2>
                        <div className={size? "footer__bottom-ul active": "footer__bottom-ul" }>
                            <a className="footer__bottom-li">Небольшие кухни</a>
                            <a className="footer__bottom-li">Кухни 4 метра</a>
                            <a className="footer__bottom-li">Кухни 5 метра</a>
                            <a className="footer__bottom-li">Кухни 6 метра</a>
                            <a className="footer__bottom-li">Кухни 8 метра</a>
                            <a className="footer__bottom-li">Кухни 10 метра</a>
                            <a className="footer__bottom-li">Кухни 12 метра</a>
                            <a className="footer__bottom-li">Кухни 14 метра</a>
                        </div>
                    </div>

                </div>

                <div className="footer__bottom">
                    <nav className="header__nav">
                        <h1 className="header__title">
                            <svg width="275" height="39" viewBox="0 0 275 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M155.418 19.93H170.418V22.39H155.418V19.93Z" fill="white"/>
                                <path d="M189.389 20.65H185.489V29.5H181.649V8.5H185.489V17.29H189.509L195.539 8.5H199.679L192.509 18.67L199.949 29.5H195.539L189.389 20.65Z" fill="white"/>
                                <path d="M217.091 13.48L209.591 30.79C208.891 32.53 208.041 33.75 207.041 34.45C206.041 35.17 204.831 35.53 203.411 35.53C202.611 35.53 201.821 35.4 201.041 35.14C200.261 34.88 199.621 34.52 199.121 34.06L200.621 31.3C200.981 31.64 201.401 31.91 201.881 32.11C202.381 32.31 202.881 32.41 203.381 32.41C204.041 32.41 204.581 32.24 205.001 31.9C205.441 31.56 205.841 30.99 206.201 30.19L206.471 29.56L199.481 13.48H203.381L208.421 25.33L213.491 13.48H217.091Z" fill="white"/>
                                <path d="M228.808 29.5L224.698 23.95L220.558 29.5H216.418L222.658 21.37L216.688 13.48H220.858L224.788 18.73L228.718 13.48H232.768L226.768 21.31L233.038 29.5H228.808Z" fill="white"/>
                                <path d="M235.721 13.48H239.471V19.99H247.541V13.48H251.291V29.5H247.541V23.17H239.471V29.5H235.721V13.48Z" fill="white"/>
                                <path d="M256.317 13.48H260.067V24.04L268.917 13.48H272.337V29.5H268.587V18.94L259.767 29.5H256.317V13.48Z" fill="white"/>
                                <path d="M68.86 24.64H58.36L56.29 29.5H52.27L61.72 8.5H65.56L75.04 29.5H70.96L68.86 24.64ZM67.57 21.58L63.61 12.4L59.68 21.58H67.57Z" fill="#B17955"/>
                                <path d="M77.8403 13.48H81.5903V19.99H89.6603V13.48H93.4103V29.5H89.6603V23.17H81.5903V29.5H77.8403V13.48Z" fill="#B17955"/>
                                <path d="M104.406 13.3C106.766 13.3 108.566 13.87 109.806 15.01C111.066 16.13 111.696 17.83 111.696 20.11V29.5H108.156V27.55C107.696 28.25 107.036 28.79 106.176 29.17C105.336 29.53 104.316 29.71 103.116 29.71C101.916 29.71 100.866 29.51 99.966 29.11C99.066 28.69 98.366 28.12 97.866 27.4C97.386 26.66 97.146 25.83 97.146 24.91C97.146 23.47 97.676 22.32 98.736 21.46C99.816 20.58 101.506 20.14 103.806 20.14H107.946V19.9C107.946 18.78 107.606 17.92 106.926 17.32C106.266 16.72 105.276 16.42 103.956 16.42C103.056 16.42 102.166 16.56 101.286 16.84C100.426 17.12 99.696 17.51 99.096 18.01L97.626 15.28C98.466 14.64 99.476 14.15 100.656 13.81C101.836 13.47 103.086 13.3 104.406 13.3ZM103.896 26.98C104.836 26.98 105.666 26.77 106.386 26.35C107.126 25.91 107.646 25.29 107.946 24.49V22.63H104.076C101.916 22.63 100.836 23.34 100.836 24.76C100.836 25.44 101.106 25.98 101.646 26.38C102.186 26.78 102.936 26.98 103.896 26.98Z" fill="#B17955"/>
                                <path d="M129.026 16.66H123.416V29.5H119.666V16.66H114.026V13.48H129.026V16.66Z" fill="#B17955"/>
                                <path d="M137.717 13.3C140.077 13.3 141.877 13.87 143.117 15.01C144.377 16.13 145.007 17.83 145.007 20.11V29.5H141.467V27.55C141.007 28.25 140.347 28.79 139.487 29.17C138.647 29.53 137.627 29.71 136.427 29.71C135.227 29.71 134.177 29.51 133.277 29.11C132.377 28.69 131.677 28.12 131.177 27.4C130.697 26.66 130.457 25.83 130.457 24.91C130.457 23.47 130.987 22.32 132.047 21.46C133.127 20.58 134.817 20.14 137.117 20.14H141.257V19.9C141.257 18.78 140.917 17.92 140.237 17.32C139.577 16.72 138.587 16.42 137.267 16.42C136.367 16.42 135.477 16.56 134.597 16.84C133.737 17.12 133.007 17.51 132.407 18.01L130.937 15.28C131.777 14.64 132.787 14.15 133.967 13.81C135.147 13.47 136.397 13.3 137.717 13.3ZM137.207 26.98C138.147 26.98 138.977 26.77 139.697 26.35C140.437 25.91 140.957 25.29 141.257 24.49V22.63H137.387C135.227 22.63 134.147 23.34 134.147 24.76C134.147 25.44 134.417 25.98 134.957 26.38C135.497 26.78 136.247 26.98 137.207 26.98Z" fill="#B17955"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 38.5C29.4934 38.5 38 29.9934 38 19.5C38 9.00659 29.4934 0.5 19 0.5C8.50659 0.5 0 9.00659 0 19.5C0 29.9934 8.50659 38.5 19 38.5ZM11.741 27.8L13.742 23.102H23.892L25.922 27.8H29.866L20.702 7.5H16.99L7.85498 27.8H11.741ZM18.817 11.27L22.645 20.144H15.018L18.817 11.27Z" fill="#B17955"/>
                            </svg>
                        </h1>

                        <div className="footer__bottom-icons">
                            <a href="https://vk.com/" className="footer__bottom-icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_36_628)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6667 32H15.3333C8.10667 32 4.48 32 2.24 29.76C0 27.52 0 23.8933 0 16.6933V15.3333C0 8.10667 0 4.48 2.22667 2.24C4.46667 0 8.08 0 15.3333 0H16.6667C23.9067 0 27.5333 0 29.7733 2.24C32 4.48 32 8.10667 32 15.3067V16.6667C32 23.8933 32 27.52 29.7733 29.76C27.5333 32 23.92 32 16.6667 32ZM5.40002 9.73328C5.57336 18.0533 9.73336 23.0533 17.0267 23.0533H17.44V18.2933C18.7265 18.4553 19.9365 18.9934 20.9185 19.8401C21.9004 20.6869 22.6106 21.8046 22.96 23.0533H26.7467C26.3574 21.6157 25.6677 20.277 24.7231 19.1255C23.7785 17.9741 22.6005 17.036 21.2667 16.3733C22.4616 15.648 23.4939 14.6839 24.2992 13.5414C25.1045 12.3988 25.6653 11.1025 25.9467 9.73328H22.5067C21.76 12.3733 19.5467 14.7733 17.44 14.9999V9.73328H14V18.9599C11.8667 18.4266 9.17336 15.8399 9.05336 9.73328H5.40002Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_36_628">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            </a>

                            <a href="https://telegram.org" className="footer__bottom-icon">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_36_633)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6667 32H15.3333C8.10667 32 4.48 32 2.24 29.76C0 27.52 0 23.8933 0 16.6933V15.3333C0 8.10667 0 4.48 2.22667 2.24C4.46667 0 8.08 0 15.3333 0H16.6667C23.9067 0 27.5333 0 29.7733 2.24C32 4.48 32 8.10667 32 15.3067V16.6667C32 23.8933 32 27.52 29.7733 29.76C27.5333 32 23.92 32 16.6667 32ZM16.7346 10.3618C15.0501 11.063 11.6809 12.5144 6.62719 14.7157C5.80656 15.0421 5.37587 15.3614 5.33795 15.6734C5.27127 16.2004 5.93135 16.4083 6.82825 16.6908C6.95128 16.7295 7.07877 16.7696 7.20945 16.8122C8.09508 17.0998 9.28666 17.4365 9.90416 17.4498C10.4675 17.4619 11.0931 17.2304 11.7837 16.7553C16.5071 13.5684 18.9419 11.9575 19.0962 11.9229C19.2046 11.8985 19.3536 11.8676 19.4538 11.9578C19.5567 12.0477 19.5458 12.2183 19.535 12.2641C19.4711 12.5425 16.888 14.9441 15.5438 16.1939C15.1213 16.5868 14.8211 16.8658 14.7603 16.9292C14.6242 17.0706 14.4855 17.2042 14.3522 17.3327C13.5303 18.125 12.9137 18.7194 14.3865 19.6898C15.1007 20.1602 15.6707 20.5485 16.2404 20.9365C16.8525 21.3535 17.4642 21.7702 18.254 22.2882C18.457 22.4213 18.6509 22.5595 18.8398 22.6941C19.5577 23.2059 20.2026 23.6656 21.0003 23.5923C21.4634 23.5498 21.9428 23.1143 22.1838 21.8153C22.758 18.7454 23.8874 12.0943 24.1474 9.35347C24.1718 9.11351 24.1419 8.80611 24.1203 8.67124C24.0959 8.53636 24.0471 8.34407 23.8738 8.20189C23.6652 8.03316 23.3456 7.99768 23.2021 8.00011C22.5494 8.01176 21.5501 8.35951 16.7346 10.3618Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_36_633">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            </a>

                        </div>

                        <ul className="header__right footer__bottom-text">
                            <li>
                                <a  className="header__right-li footer__bottom-text">
                                    Москва,<br/>
                                    Дмитровское шоссе, д 62 стр 5
                                </a>
                            </li>

                            <li className="header__right-li header__right-bold footer__bottom-text">
                                +7 499 321-20-63
                                <a className="header__right-li header__right-grey">
                                    Заказать звонок
                                </a>
                            </li>

                            <li className="header__right-li footer__bottom-text">
                                9:00 - 20:00 <br/>
                                ежедневно
                            </li>

                        </ul>

                    </nav>

                    <div className="header__bottom">
                        <div className="header__bottom-left">
                            <div className="header__bottom-ul">
                                <a className="header__bottom-li footer__bottom-link">Каталог</a>
                                <a className="header__bottom-li footer__bottom-link">Наши работы</a>
                                <a className="header__bottom-li footer__bottom-link">Отзывы</a>
                                <a className="header__bottom-li footer__bottom-link">Видео</a>
                            </div>
                        </div>

                        <div className="header__bottom-right footer__bottom-right">
                            <button className="header__bottom-btn1 header__bottom-btn footer__bottom-btn" onClick={() =>setOpenOne(true)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_97)">
                                        <path d="M15.2001 8.32955V3.00226L10.0001 0L4.79999 3.00226V8.32959L0.186401 10.9932V16.9977L5.38647 20L10.0001 17.3364L14.6136 20L19.8137 16.9977V10.9932L15.2001 8.32955ZM4.79999 18.307L1.35933 16.3205V12.3476L4.79999 14.3341V18.307ZM1.94581 11.3318L5.38647 9.34537L8.82713 11.3318L5.38647 13.3183L1.94581 11.3318ZM9.41357 16.3205L5.97291 18.307V14.334L9.41357 12.3476V16.3205ZM9.41357 10.316L5.97291 8.32955V4.35663L9.41357 6.34307V10.316ZM6.5594 3.34085L10.0001 1.35441L13.4407 3.34085L10.0001 5.32729L6.5594 3.34085ZM14.0272 4.35663V8.32955L10.5865 10.316V6.34307L14.0272 4.35663ZM14.0272 18.307L10.5865 16.3205V12.3476L14.0272 14.3341V18.307ZM11.173 11.3318L14.6136 9.34537L18.0543 11.3318L14.6136 13.3183L11.173 11.3318ZM18.6407 16.3205L15.2001 18.307V14.334L18.6407 12.3476V16.3205Z" fill="#B17955"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_97">
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Проект + Расчет
                            </button>

                            <button className="header__bottom-btn1" onClick={() => setOpenTwo(true)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_107)">
                                        <path d="M8.84073 0.000396729H2.59103C2.24586 0.000396729 1.96606 0.280188 1.96606 0.625366V19.3744C1.96606 19.7196 2.24586 19.9994 2.59103 19.9994H8.84073C9.18591 19.9994 9.4657 19.7196 9.4657 19.3744V0.625366C9.4657 0.280188 9.18587 0.000396729 8.84073 0.000396729ZM8.21576 18.7495H3.216V16.8746H6.34085V15.6246H3.216V13.7497H5.09091V12.4998H3.216V10.6249H6.34085V9.37494H3.216V7.50003H5.09091V6.25009H3.216V4.37518H6.34085V3.12524H3.216V1.25034H8.21576V18.7495Z" fill="#B17955"/>
                                                <path d="M17.1528 15.8122L15.0904 17.8684V2.13165L17.1465 4.1878L18.0278 3.3066L14.9029 0.181749C14.6591 -0.060583 14.2655 -0.060583 14.0217 0.181749L10.8969 3.3066L11.7781 4.1878L13.8405 2.13165V17.8684L11.7843 15.8122L10.9031 16.6934L14.0279 19.8183C14.2717 20.0606 14.6654 20.0606 14.9092 19.8183L18.034 16.6934L17.1528 15.8122Z" fill="#B17955"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_15_107">
                                                    <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                Вызвать замерщика с образцами
                            </button>
                        </div>
                    </div>
                </div>

                <p className="footer__bottom-sub">
                    © 2022 Аната-Кухни. Все ресурсы сайта www.anata-kitchen.ru, включая (но не ограничиваясь) текстовую, графическую, фотографическую и видео информацию, структуру, дизайн и оформление страниц, товарные знаки, доменное имя, фирменное наименование являются объектами авторского права и прав на интеллектуальную собственность, защищены российским законодательством и международными соглашениями об охране авторских прав и интеллектуальной собственности.
                </p>
            </div>

            <Project openOne={openOne} setOpenOne={setOpenOne}/>

            <Call openTwo={openTwo} setOpenTwo={setOpenTwo}/>

        </footer>
    );
};

export default Footer;