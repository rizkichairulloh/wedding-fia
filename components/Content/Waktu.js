import Image from "next/image";
import MaskBottom from '../../assets/mask_bottom.png'
import Bunga from "../../assets/flower.png";
import Ring from '../../assets/ring.png'
import Wedding from '../../assets/Resepsi.png'
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";
import {useState} from "react";
import {useSpring, animated} from "react-spring";
import Instagram from "../../assets/instagram.png";
import userData from "../../constants/data";

export default function Waktu() {
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState({
        rifki: false,
        novia: false,
        alamat: false
    })
    const fade = useSpring({
        opacity: showModal ? 1 : 0,

    })
    const showInMapClicked = () => {
        window.open("https://www.google.com/maps/place/Gedung+Serbaguna+Graha+Cibening,+Jalan+Caman+Raya+No.+89,+Jatibening+II,+Pondok+Gede,+RT.006%2FRW.003,+Jatibening,+Kec.+Pondokgede,+Kota+Bks,+Jawa+Barat+17412/@-6.264685,106.94529,16z/data=!4m2!3m1!1s0x2e698d107ea38e83:0xb701d016f793eb9b?hl=id&gl=ID");
    };

    const copyText = (e) => {
        const rekeningRifki = 1242725876
        const rekeningNovia = 7510870438
        const alamatRumah = "Jl. Caman Raya Gg. H. Moh. Ali (Belakang Kopi bob) No.1 RT 07/03, Jatibening."
        if (e === 'rifki') {
            navigator.clipboard.writeText(rekeningRifki)
            setCopied({
                ...copied,
                rifki: true
            })
        } else if (e === "novia") {
            navigator.clipboard.writeText(rekeningNovia)
            setCopied({
                ...copied,
                novia: true
            })
        } else {
            navigator.clipboard.writeText(alamatRumah)
            setCopied({
                ...copied,
                alamat: true
            })
        }
    }
    return (
        <>
            <div className={"bg-color-white bg-cover bg-bottom"}>
                <Image src={MaskBottom} alt="My image"/>
                <div className={"flex justify-center items-center content-center md:-mt-10"}>
                    <Image src={Bunga} alt="My image"/>
                </div>
                <div className={"container flex flex-wrap mx-auto pt-5"}>
                    <br/>
                    <div className="shadow-lg text-center md:w-5/12 md:ml-20 mb-6 px-3 py-10">

                        <Image src={Ring} width={100} height={100} alt="My image"/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:my-5 font-medium leading-relaxed font-curs"}>
                            Akad
                            Nikah</h1>
                        <p className={"font-bold"}>{userData.date}</p>
                        <p className={"font-bold"}>{userData.timeAkad}</p>
                        <br/>
                        <p className={"font-bold"}>Rumah Mempelai Wanita</p>
                        <p className={"px-16"}>{userData.alamatAkad}</p>
                    </div>
                    <div className={"md:w-1/12"}>
                    </div>
                    <div className="shadow-lg text-center md:w-5/12 md:-ml-12 px-3 mb-6 py-10">
                        <Image src={Wedding} width={100} height={100} alt="My image"/>
                        <h1 className={"md:text-6xl capitalize text-5xl md:my-5 font-medium leading-relaxed font-curs"}>Resepsi</h1>
                        <p className={"font-bold"}>{userData.date}</p>
                        <p className={"font-bold"}>{userData.timeResepsi}</p>
                        <br/>
                        <p className={"font-bold"}>Rumah Mempelai Wanita</p>
                        <p className={"px-16"}>{userData.alamatOrangTuaWanita}</p>
                    </div>
                </div>
                <Timer/>
                <div className={"text-center mb-2"}>
                    <button
                        className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                        onClick={showInMapClicked}>
                        <p className={"flex"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                      clipRule="evenodd"/>
                            </svg>
                            &nbsp;
                            Buka Google Maps
                        </p>
                    </button>
                </div>
                <div className={"mx-auto justify-center flex"}>
                    <iframe
                        className={"md:w-8/12 w-11/12"}
                        src={userData.maps}
                        height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className={"-mb-2"}>
                    <Image src={MaskTop} alt="My image"/>
                </div>
            </div>
        </>
    )
}
