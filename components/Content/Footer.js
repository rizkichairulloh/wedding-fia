import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import Instagram from '../../assets/instagram.png'
import userData from "../../constants/data";

export default function Footer({}) {
    return (
        <>
            <div className={"bg-slate-600 bg-cover bg-no-repeat bg-center "}>
                <Image src={MaskBottom} alt="My image"/>
                <div className={"container mx-auto pt-5 pb-20"}>
                    <div className={"flex justify-center items-center content-center"}>
                        <p className={"text-center block md:mb-4 font-medium text-white leading-relaxed"}>With Love,</p>
                    </div>
                    <div className={"flex justify-center items-center"}>
                        <h1 className={"md:text-6xl text-center  text-5xl mb-0 font-medium text-white leading-relaxed font-curs"}>
                        {userData.fullNamePengantinPria}
                        </h1>
                    </div>
                    <div className={"flex justify-center items-center content-center "}>
                        <h1 className={"md:text-6xl text-center text-5xl mb-0 font-medium text-white leading-relaxed font-curs"}>
                            & </h1>
                    </div>
                    <div className={"flex justify-center items-center content-center "}>
                        <h1 className={"md:text-6xl text-center  text-5xl mb-5 font-medium text-white leading-relaxed font-curs"}>
                        {userData.fullNamePengantinWanita}
                        </h1>
                    </div>
                    <br/>
                </div>
            </div>
        </>
    )
}