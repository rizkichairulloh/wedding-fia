import Image from "next/image";
import {animated, useSpring} from "react-spring";
import MaskTop from "../../assets/mask.png";
import userData from "../../constants/data";

export default function Hero() {
    const fade = useSpring({
        from: {opacity: 0, y: 1000},
        to: {opacity: 1, y: 0},
        delay: 1000,
    })

    return (
        <>
            <div className={"bg-hero-banner min-h-screen bg-cover bg-top"}>
                <div className={"text-center opacity-100"}>
                    <div className={"md:py-10 py-10 object-left-top"}>
                        {/* <Image src={Bunga} width={512} height={282} alt="My image"/> */}
                    </div>
                    <animated.div style={fade}>
                        <h1 className={"md:text-4xl text-2xl md:mb-0 font-medium text-white leading-relaxed font-sans"}>
                            WE ARE GETTING MARRIED</h1>
                        <h1 className={"md:text-3xl text-2xl font-medium text-white leading-relaxed md:my-6 font-curs"}>
                        {userData.namePengantin}
                        </h1>
                    </animated.div>
                    <p className={"text-white text-sm font-sans"}>February 12, 2022</p>
                </div>
            </div>
            <div className={"-mb-2"}>
                <Image src={MaskTop} alt="My image" />
            </div>
        </>
    )
}