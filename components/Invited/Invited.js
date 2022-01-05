import Image from "next/image";
import Bunga from "../../assets/bunga.png";
import userData from "../../constants/data";
import { useState } from "react";

export default function Invited({ changeInvited, nameGuest }) {
    const [tamu, setTamu] = useState("")
    const [valid, setValid] = useState(false)
    const invited = (e) => {
        setValid(true)
        changeInvited(e)
        // if (tamu === "") {
        //     setValid(true)
        // } else {
        //     changeInvited(e)
        // }
    }
    const validate = (e) => {
        setTamu(e)
        setValid(false)
        nameGuest(e)
    }
    return (
        <>
            <div className={"bg-invite min-h-screen bg-cover bg-center"}>
                <div className={"text-center" +
                    " opacity-100"}>
                    <div className={"md:py-20 py-20 object-left-top"}>
                        {/* <Image src={Bunga} width={512} height={282} alt="My Awesome Image" /> */}
                    </div>
                    <h1 className={"md:text-6xl text-5xl md:mb-0 font-medium text-white leading-relaxed font-curs"}>
                        Hello, You Are Invited</h1>
                    <br />
                    <h1 className={"md:text-2xl text-xl font-medium text-white leading-relaxed"}>
                        {userData.descCelebration}
                    </h1>
                    <p className={"md:text-5xl text-4xl md:my-4 my-4 font-medium text-white leading-relaxed font-curs"}>{userData.namePengantin}</p>
                    <br />
                    <div>
                        <button
                            className="bg-color-pallete-400 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                invited(false)
                            }}
                        >
                            <p className={"flex"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                </svg>
                                &nbsp;
                                Buka Undangan
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}