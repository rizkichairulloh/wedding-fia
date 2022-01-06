/* eslint-disable @next/next/no-img-element */
import userData from "../../constants/data";

export default function Pengantin() {
    return (
        <>
            <div className={"container mx-auto hidden md:block"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <div className={"flex items-center justify-center"}>
                            <img className={"rounded-full  w-52 h-52"} src={userData.avatarPria} alt="avatar" />
                        </div>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>
                            {userData.shortNamePengantinWanita}
                        </h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>
                            {userData.fullNamePengantinWanita}</h1>
                        <br/>
                        <p className={"text-white"}>
                            Putri Keempat <br/><span className={"font-bold"}>{userData.nameOrangTuaWanita}
                        </span>
                        </p>
                        <p className={"text-white"}>
                            {userData.alamatOrangTuaWanita}
                        </p>
                        <p className={"text-white"}>
                            Jawa Tengah
                        </p>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <div className={"flex items-center justify-center"}>
                            <img
                                className={"rounded-full  w-[200px] h-[200px]"}
                                src={userData.avatarPria} alt="avatar"/>
                        </div>

                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>
                            {userData.shortNamePengantinPria}
                        </h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed mt-5 font-curs"}>
                            {userData.fullNamePengantinPria}</h1>
                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putra Ketiga <br/> <span className={"font-bold"}>{userData.nameOrangTuaPria}</span>
                        </p>
                        <p className={"text-white"}>
                            {userData.alamatOrangTuaPria}
                        </p>
                        <p className={"text-white"}>
                            Jawa Timur
                        </p>
                    </div>


                </div>
            </div>
            {/*Mobile*/}
            <div className={"container mx-auto md:hidden"}>
                <div className={"flex flex-wrap text-center mt-10 pb-10"}>
                    <div className={'md:w-6/12 w-full'}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5 "}>
                            {userData.shortNamePengantinWanita}
                        </h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs"}>
                            {userData.fullNamePengantinWanita}   
                        </h1>
                        <br/>
                        <p className={"text-white mb-5"}>
                            Putri Keempat <br/><span className={"font-bold"}> 
                            {userData.nameOrangTuaWanita}
                    </span>
                        </p>

                    </div>
                    <div className={"flex items-center w-full justify-center"}>
                        <img
                            className={"rounded-full mr-10 w-[150px] h-[150px]"}
                            src={userData.avatarWanita}
                            alt=""/>
                        <img
                            className={"rounded-full bg-auto h-[150px] w-[150px]"}
                            src={userData.avatarPria}
                            alt=""/>
                    </div>
                    <div className={'md:w-6/12 w-full '}>
                        <h1 className={"md:text-5xl text-4xl font-medium text-white leading-relaxed mt-5"}>
                            {userData.shortNamePengantinPria}
                        </h1>
                        <h1 className={"md:text-4xl text-3xl font-medium text-white leading-relaxed font-curs"}>
                            {userData.fullNamePengantinPria}
                        </h1>
                        <br/>
                        <p className={"text-white mb-5 md:mb-0"}>
                            Putra Ketiga <br/> <span className={"font-bold"}>
                        {userData.nameOrangTuaPria}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
