import {motion} from "framer-motion";
import Image from "next/image";
import Bunga from '../../assets/bunga.png'
import {animated, useSpring} from "react-spring";
import MaskTop from "../../assets/mask.png";
import userData from "../../constants/data";

export default function Hero({
                                 guest
                             }) {
    const fade = useSpring({
        from: {opacity: 0, y: 1000},
        to:
            {opacity: 1, y: 0},
        delay: 1000,
    })
    return (
        <>
            <div className={"bg-slate-600 bg-cover bg-top"}>
                <div className={"text-center opacity-100"}>
                    <div className={"md:py-10 object-left-top"}>
                        <Image src={Bunga} width={512} height={282} alt="My image"/>
                    </div>
                    <animated.div style={fade}>
                        <h1 className={"md:text-4xl text-3xl md:mb-0 font-medium text-white leading-relaxed font-curs"}>
                            WE ARE GETTING MARRIED</h1>
                        <h1 className={"md:text-3xl text-2xl font-medium text-white leading-relaxed md:my-6 font-curs"}>
                        {userData.namePengantin}
                        </h1>
                    </animated.div>
                    <p className={"text-white"}>{userData.date}</p>
                    {/*<Timer/>*/}
                   
                </div>
                {/*</motion.div>*/}
                <div className={"-mb-2"}>
                    <Image src={MaskTop} alt="My image"/>
                </div>
            </div>
            <audio src={"../../assets/pernikahanImpian.mp3"}/>
        </>
    )
}