import React,{useState} from 'react';
import Project from "./Project/Project";
import Call from "./Call/Call";

const Header = () => {
    const [openTwo,setOpenTwo] = useState(false)
    const [openOne, setOpenOne] = useState(false)

    return (
        <header className="header">

            <div className="container container-header">

                <nav className="header__nav">
                    <h1 className="header__title">
                        <a href="">
                            <svg width="275" height="38" viewBox="0 0 275 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M155.418 19.43H170.418V21.89H155.418V19.43Z" fill="black"/>
                            <path d="M189.389 20.15H185.489V29H181.649V8H185.489V16.79H189.509L195.539 8H199.679L192.509 18.17L199.949 29H195.539L189.389 20.15Z" fill="black"/>
                            <path d="M217.091 12.98L209.591 30.29C208.891 32.03 208.041 33.25 207.041 33.95C206.041 34.67 204.831 35.03 203.411 35.03C202.611 35.03 201.821 34.9 201.041 34.64C200.261 34.38 199.621 34.02 199.121 33.56L200.621 30.8C200.981 31.14 201.401 31.41 201.881 31.61C202.381 31.81 202.881 31.91 203.381 31.91C204.041 31.91 204.581 31.74 205.001 31.4C205.441 31.06 205.841 30.49 206.201 29.69L206.471 29.06L199.481 12.98H203.381L208.421 24.83L213.491 12.98H217.091Z" fill="black"/>
                            <path d="M228.808 29L224.698 23.45L220.558 29H216.418L222.658 20.87L216.688 12.98H220.858L224.788 18.23L228.718 12.98H232.768L226.768 20.81L233.038 29H228.808Z" fill="black"/>
                            <path d="M235.721 12.98H239.471V19.49H247.541V12.98H251.291V29H247.541V22.67H239.471V29H235.721V12.98Z" fill="black"/>
                            <path d="M256.317 12.98H260.067V23.54L268.917 12.98H272.337V29H268.587V18.44L259.767 29H256.317V12.98Z" fill="black"/>
                            <path d="M68.86 24.14H58.36L56.29 29H52.27L61.72 8H65.56L75.04 29H70.96L68.86 24.14ZM67.57 21.08L63.61 11.9L59.68 21.08H67.57Z" fill="#B17955"/>
                            <path d="M77.8403 12.98H81.5903V19.49H89.6603V12.98H93.4103V29H89.6603V22.67H81.5903V29H77.8403V12.98Z" fill="#B17955"/>
                            <path d="M104.406 12.8C106.766 12.8 108.566 13.37 109.806 14.51C111.066 15.63 111.696 17.33 111.696 19.61V29H108.156V27.05C107.696 27.75 107.036 28.29 106.176 28.67C105.336 29.03 104.316 29.21 103.116 29.21C101.916 29.21 100.866 29.01 99.966 28.61C99.066 28.19 98.366 27.62 97.866 26.9C97.386 26.16 97.146 25.33 97.146 24.41C97.146 22.97 97.676 21.82 98.736 20.96C99.816 20.08 101.506 19.64 103.806 19.64H107.946V19.4C107.946 18.28 107.606 17.42 106.926 16.82C106.266 16.22 105.276 15.92 103.956 15.92C103.056 15.92 102.166 16.06 101.286 16.34C100.426 16.62 99.696 17.01 99.096 17.51L97.626 14.78C98.466 14.14 99.476 13.65 100.656 13.31C101.836 12.97 103.086 12.8 104.406 12.8ZM103.896 26.48C104.836 26.48 105.666 26.27 106.386 25.85C107.126 25.41 107.646 24.79 107.946 23.99V22.13H104.076C101.916 22.13 100.836 22.84 100.836 24.26C100.836 24.94 101.106 25.48 101.646 25.88C102.186 26.28 102.936 26.48 103.896 26.48Z" fill="#B17955"/>
                            <path d="M129.026 16.16H123.416V29H119.666V16.16H114.026V12.98H129.026V16.16Z" fill="#B17955"/>
                            <path d="M137.717 12.8C140.077 12.8 141.877 13.37 143.117 14.51C144.377 15.63 145.007 17.33 145.007 19.61V29H141.467V27.05C141.007 27.75 140.347 28.29 139.487 28.67C138.647 29.03 137.627 29.21 136.427 29.21C135.227 29.21 134.177 29.01 133.277 28.61C132.377 28.19 131.677 27.62 131.177 26.9C130.697 26.16 130.457 25.33 130.457 24.41C130.457 22.97 130.987 21.82 132.047 20.96C133.127 20.08 134.817 19.64 137.117 19.64H141.257V19.4C141.257 18.28 140.917 17.42 140.237 16.82C139.577 16.22 138.587 15.92 137.267 15.92C136.367 15.92 135.477 16.06 134.597 16.34C133.737 16.62 133.007 17.01 132.407 17.51L130.937 14.78C131.777 14.14 132.787 13.65 133.967 13.31C135.147 12.97 136.397 12.8 137.717 12.8ZM137.207 26.48C138.147 26.48 138.977 26.27 139.697 25.85C140.437 25.41 140.957 24.79 141.257 23.99V22.13H137.387C135.227 22.13 134.147 22.84 134.147 24.26C134.147 24.94 134.417 25.48 134.957 25.88C135.497 26.28 136.247 26.48 137.207 26.48Z" fill="#B17955"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM11.741 27.3L13.742 22.602H23.892L25.922 27.3H29.866L20.702 7H16.99L7.85498 27.3H11.741ZM18.817 10.77L22.645 19.644H15.018L18.817 10.77Z" fill="#B17955"/>
                        </svg>
                        </a>
                    </h1>

                    <div className="header__right">

                            <a className="header__right-li">
                                ????????????,<br/>
                                ?????????????????????? ??????????, ?? 62 ?????? 5
                            </a>

                        <a className="header__right-li header__right-bold">
                            +7 499 321-20-63
                            <span className="header__right-li header__right-grey">
                                ???????????????? ????????????
                            </span>
                        </a>

                        <a className="header__right-li">
                            9:00 - 20:00 <br/>
                            ??????????????????
                        </a>

                    </div>

                </nav>

                <div className="header__bottom">

                    <div className="header__bottom-left">
                        <div className="header__bottom-burger">
                            <div className="header__bottom-line" style={{width:'25px'}}></div>
                            <div className="header__bottom-line" style={{width:'33px'}}></div>
                            <div className="header__bottom-line" style={{width:'20px'}}></div>
                        </div>


                        <div className="header__bottom-ul">
                            <a className="header__bottom-li">???????? ????????????</a>
                            <a className="header__bottom-li">????????????</a>
                            <a className="header__bottom-li">??????????</a>
                            <a href="https://web.telegram.org/" className="header__bottom-li telegram" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_90)">
                                        <path d="M11.5 24H12.5C17.94 24 20.65 24 22.33 22.32C24 20.64 24 17.92 24 12.5V11.48C24 6.08 24 3.36 22.33 1.68C20.65 0 17.93 0 12.5 0H11.5C6.06 0 3.35 0 1.67 1.68C0 3.36 0 6.08 0 11.5V12.52C0 17.92 0 20.64 1.68 22.32C3.36 24 6.08 24 11.5 24Z" fill="#878B90"/>
                                        <path d="M4.9704 11.0368C8.76072 9.38577 11.2876 8.29723 12.551 7.77134C16.1626 6.26963 16.9121 6.00882 17.4016 6.00009C17.5092 5.99826 17.7489 6.02487 17.9053 6.15141C18.0353 6.25805 18.0719 6.40227 18.0902 6.50343C18.1065 6.60459 18.1288 6.83513 18.1105 7.0151C17.9155 9.07073 17.0685 14.0591 16.6379 16.3615C16.4571 17.3357 16.0976 17.6623 15.7502 17.6942C14.9946 17.7637 14.4217 17.1954 13.6905 16.7161C12.5469 15.966 11.901 15.4992 10.7899 14.7674C9.50617 13.9216 10.339 13.4566 11.0702 12.6969C11.2611 12.4981 14.5883 9.47251 14.6513 9.19809C14.6594 9.16376 14.6676 9.03579 14.5904 8.96835C14.5152 8.90071 14.4034 8.92387 14.3222 8.94215C14.2064 8.96815 12.3803 10.1763 8.83781 12.5665C8.31984 12.9228 7.85064 13.0965 7.42814 13.0873C6.96501 13.0774 6.07132 12.8249 5.4071 12.6092C4.5946 12.3445 3.9466 12.2045 4.00348 11.755C4.03192 11.521 4.35494 11.2815 4.9704 11.0368Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_90">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                ????????????????
                            </a>
                        </div>

                    </div>

                    <div className="header__bottom-right">
                        <button className="header__bottom-btn1 header__bottom-btn" type="button" onClick={() => setOpenOne(true)}>
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
                            ???????????? + ????????????
                        </button>

                        <button type="button" className="header__bottom-btn1" onClick={() => setOpenTwo(true)}>
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
                            ?????????????? ?????????????????? ?? ??????????????????
                        </button>
                    </div>

                </div>

            </div>

            <div className="container-adaptation">

                <nav className="header__nav">
                    <h1 className="header__title">
                        <a href="">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1367_2532)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM12.3589 28.7369L14.4652 23.7916H25.1494L27.2863 28.7369H31.4379L21.7915 7.36849H17.8842L8.26839 28.7369H12.3589ZM19.8073 11.3369L23.8368 20.678H15.8084L19.8073 11.3369Z" fill="#B17955"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1367_2532">
                                        <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </h1>

                    <a className="header__right-li header__right-bold">
                        +7 499 321-20-63
                        <span className="header__right-li header__right-grey">
                                 9:00 - 20:00 ??????????????????
                            </span>
                    </a>

                    <div className="header__bottom-burger">
                        <div className="header__bottom-line" style={{width:'25px'}}></div>
                        <div className="header__bottom-line" style={{width:'33px'}}></div>
                        <div className="header__bottom-line" style={{width:'20px'}}></div>
                    </div>

                </nav>

                <div className="header__bottom">

                    <div className="header__bottom-left">

                        <div className="header__bottom-ul">
                            <a className="header__bottom-li">???????? ????????????</a>
                            <a className="header__bottom-li">????????????</a>
                            <a className="header__bottom-li">??????????</a>
                            <a href="https://web.telegram.org/" className="header__bottom-li telegram" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_90)">
                                        <path d="M11.5 24H12.5C17.94 24 20.65 24 22.33 22.32C24 20.64 24 17.92 24 12.5V11.48C24 6.08 24 3.36 22.33 1.68C20.65 0 17.93 0 12.5 0H11.5C6.06 0 3.35 0 1.67 1.68C0 3.36 0 6.08 0 11.5V12.52C0 17.92 0 20.64 1.68 22.32C3.36 24 6.08 24 11.5 24Z" fill="#878B90"/>
                                        <path d="M4.9704 11.0368C8.76072 9.38577 11.2876 8.29723 12.551 7.77134C16.1626 6.26963 16.9121 6.00882 17.4016 6.00009C17.5092 5.99826 17.7489 6.02487 17.9053 6.15141C18.0353 6.25805 18.0719 6.40227 18.0902 6.50343C18.1065 6.60459 18.1288 6.83513 18.1105 7.0151C17.9155 9.07073 17.0685 14.0591 16.6379 16.3615C16.4571 17.3357 16.0976 17.6623 15.7502 17.6942C14.9946 17.7637 14.4217 17.1954 13.6905 16.7161C12.5469 15.966 11.901 15.4992 10.7899 14.7674C9.50617 13.9216 10.339 13.4566 11.0702 12.6969C11.2611 12.4981 14.5883 9.47251 14.6513 9.19809C14.6594 9.16376 14.6676 9.03579 14.5904 8.96835C14.5152 8.90071 14.4034 8.92387 14.3222 8.94215C14.2064 8.96815 12.3803 10.1763 8.83781 12.5665C8.31984 12.9228 7.85064 13.0965 7.42814 13.0873C6.96501 13.0774 6.07132 12.8249 5.4071 12.6092C4.5946 12.3445 3.9466 12.2045 4.00348 11.755C4.03192 11.521 4.35494 11.2815 4.9704 11.0368Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_90">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                ????????????????
                            </a>
                        </div>

                    </div>

                    <div className="header__bottom-right">
                        <button onClick={() => setOpenOne(true)} className="header__bottom-btn1 header__bottom-btn" type="button" >
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
                            ???????????? + ????????????
                        </button>

                        <button type="button" className="header__bottom-btn1"  onClick={() => setOpenTwo(true)}>
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
                            ?????????????? ??????????????????
                        </button>
                    </div>

                </div>

            </div>

            <Project openOne={openOne} setOpenOne={setOpenOne}/>

            <Call openTwo={openTwo} setOpenTwo={setOpenTwo}/>

        </header>

);
};

export default Header;