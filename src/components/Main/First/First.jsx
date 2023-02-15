import React, {useState} from 'react';
import Item from "./Item/Item";
// transform: translateX(- 1573px);

const First = () => {
    const [translate, setTranslate] = useState(0)

    const transform = {
        transform: `translateX(${translate}%)`
    }

    const right = () => {
        if(translate === -220){
            setTranslate(0)
        }else{
            setTranslate(translate - 110)
        }
    }
    const left = () => {
        if(translate === 0){
            setTranslate( -220)
        }else{
            setTranslate(translate + 110)
        }
    }

    return (
        <section className="first">

            <button className="first__left-btn" onClick={left}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_15_127)">
                            <g filter="url(#filter0_b_15_127)">
                                <path d="M64 8C64 3.58172 60.4183 0 56 0H0V64H56C60.4183 64 64 60.4183 64 56V8Z" fill="white" fillOpacity="0.7"/>
                            </g>
                            <path d="M37 45L23 32L37 19" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <filter id="filter0_b_15_127" x="-20" y="-20" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_15_127"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_15_127" result="shape"/>
                            </filter>
                            <clipPath id="clip0_15_127">
                                <rect width="64" height="64" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
            </button>

            <Item transform={transform}/>

            <button className="first__right-btn" onClick={right}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15_124)">
                        <g filter="url(#filter0_b_15_124)">
                            <path d="M0 8C0 3.58172 3.58172 0 8 0H64V64H8C3.58172 64 0 60.4183 0 56V8Z" fill="white" fillOpacity="0.7"/>
                        </g>
                        <path d="M27 45L41 32L27 19" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <filter id="filter0_b_15_124" x="-20" y="-20" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_15_124"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_15_124" result="shape"/>
                        </filter>
                        <clipPath id="clip0_15_124">
                            <rect width="64" height="64" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </section>
    );
};

export default First;