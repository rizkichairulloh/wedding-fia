import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import Instagram from '../../assets/instagram.png'
import userData from "../../constants/data";

export default function Footer({}) {
    return (
        <>
            <div className={"bg-white bg-cover bg-no-repeat bg-center "}>
                <Image src={MaskBottom} alt="My image"/>
                <div className={"container mx-auto pt-2 pb-20"}>
                    <div className={"flex justify-center items-center content-center"}>
                        <p className={"text-center block md:mb-4 font-medium text-black leading-relaxed"}>Thank You</p>
                    </div>
                    <div className={"flex justify-center items-center"}>
                        <h1 className={"md:text-6xl text-center  text-5xl mb-0 font-medium text-black leading-relaxed font-curs"}>
                        {userData.namePengantin}
                        </h1>
                    </div>
                    <div className={"flex justify-center items-center md:mt-28 mt-28"}>
                        <h1 className={"md:text-sm text-center text-sm mb-0 font-medium text-black leading-relaxed font-sans"}>
                            Made by
                        </h1>
                    </div>
                    <a href="https://www.instagram.com/rizkichairulloh/">
                        <div className="flex justify-center items-center">
                            <Image src={Instagram} width={15} height={15} alt="instagram" />
                            <h1 className={"md:text-sm text-center text-sm ml-1 font-medium text-black font-sans"}>
                                @rizkichairulloh
                            </h1>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}