import React, {useEffect, useState} from 'react';
import axios from "axios";
import LiveBg from "./LiveBg/LiveBg";
import LiveInfo from "./LiveInfo/LiveInfo";

const Live = () =>  {
    const [kitchen,setKitchen] = useState([])

    useEffect(() => {

       axios(`http://localhost:8080/kitchen`)
           .then(({data}) => console.log(setKitchen(data)))
           .catch((err) => console.log(err.message()))
    },[])

    return (
        <section className="live">
            <div className="container">
                <h1 className="live__title">
                    Живые фотографии наших работ от реальных клиентов 🥰
                </h1>

                <div  className="live__boxes">
                    {
                        kitchen.map((item) => (
                            <div key={item.id} className="live__box">

                                <LiveBg/>

                                <LiveInfo item={item}/>
                            </div>
                        ))
                    }
                </div>

                <button className="live__btn btn">
                    Смотреть все работы
                </button>
            </div>
        </section>
    );
};

export default Live;