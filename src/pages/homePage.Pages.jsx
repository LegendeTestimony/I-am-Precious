import React from "react";
import CollageGrid from "../components/CollageGrid";


function HomePage() {

    
  return (
    <>
        <div>
            <div className="relative">
                <div className=" w-full ">
                    <div className=" bg-[#000] relative h-[100dvh] rounded-4xl flex justify-center pt-16 overflow-clip mb-48">
                        <div className="w-full top-0 l-0">
                            <div className="w-[58rem] h-[58rem] relative border-red border-[120px] blur-sm left-20 r-0 rounded-full z-0" />
                        </div>
                        <div className="absolute w-full h-full top-0">
                            <div className="relative w-3xl top-14 h-dvh left-64 pt-20 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-04/w6VB3xE6ej.png)] bg-cover bg-no-repeat " />
                        </div>

                        <span className="text-[216px] font-bold text-center text-white/60 absolute top-[27rem] whitespace-wrap z-[3]">
                            Precious Ebere
                        </span>
                    </div>
                </div>
            </div> 
        </div>

        <div className="h-[80dvh] max-w-[55%] min-w-[200px] pl-28">
            <h5 className="text-5xl font-inter font-extralight text-[#000] leading-14 tracking-tight  mt-10 mb-5">
            She is a development practitioner, education technology professional, policy analyst, and social innovator on a mission to inspire a billion Africans to take action for sustainable development by 2050. Join the movement for positive change and explore impactful initiatives.
            </h5>
        </div>

        <div className="flex relative justify-center items-center mt-10 mb-38">
                <div className="bg-red w-full h-0.5"></div>
                <div className="h-52 w-52 bg-red rounded-full right-48 absolute"></div>
        </div>

        <div className="flex h-[80dvh] pl-28 wrap-normal">
            <h2 className="text-[9rem] font-bold text-black/20 pr-60  mt-10 mb-5">
            Mission
            </h2>
            <h5 className="text-5xl pl-36 pr-24 font-inter font-extralight text-[#000] leading-14 tracking-tight  mt-10 mb-5">
            To inspire, mobilize, and empower individuals to drive positive change in their communities while advocating for equality, transparency, and accountability.
            </h5>
        </div>

        <div className="flex relative justify-center items-center mt-10 mb-38">
                <div className="bg-red w-full h-0.5"></div>
                <div className="h-52 w-52 bg-red rounded-full left-48 absolute"></div>
        </div>

        <div className="wrap-normal mb-52">
            <h2 className="text-7xl font-light pl-28 text-black/20  mt-10 mb-24">
            Projects
            </h2>
            <CollageGrid    />
        </div>

        <div className="flex relative justify-center items-center mt-10 mb-38">
                <div className="bg-red w-full h-0.5"></div>
                <div className="h-52 w-52 bg-red rounded-full right-48 absolute"></div>
        </div>

        <div className=" pl-28 wrap-normal mb-52 ">
            <h2 className="text-7xl font-light text-black/20 leading-14 tracking-tight pr-60  mt-10 mb-24">
            Featured Articles:
            </h2>

            <div className="flex relative justify-center items-center mt-10 mb-38">

                <div className="main-container w-[692.556px] h-[481px] relative mx-auto my-0">
                    <div className="w-[692.556px] h-[481px] bg-[#d9d9d9] rounded-[51.489px] opacity-[0.14] absolute top-0 left-0" />
                    <div className="w-[398.904px] h-[423.112px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-05/0MSpTqMz3L.png)] bg-cover bg-no-repeat rounded-[39.787px] absolute top-[30.523px] left-[28.418px] z-[1]" />
                    <span className="flex w-[224.186px] h-[64.203px] justify-start items-start font-['Nohemi'] text-[30.61276626586914px] font-semibold leading-[30.751px] text-[#000] absolute top-[30.523px] left-[461.003px] text-left z-[2]">
                        Bridging the Skills Gap in Africa
                    </span>
                    <span className="flex w-[221.028px] h-[158.93px] justify-start items-start font-['Nohemi'] text-[22.421276092529297px] font-light opacity-60 leading-[22.522px] text-[#000] absolute top-[137.88px] left-[461.003px] text-left z-[3]">
                        The learning kit is also accompanied by printed take-home activity
                        books, worksheets and assessment cards, designed for parents,
                        caregivers...
                    </span>
                        <div className="flex w-[112.619px] h-[41.048px] pt-[11.702px] pr-[35.106px] pb-[11.702px] pl-[35.106px] gap-[11.702px] justify-center items-center flex-nowrap bg-red rounded-[43.298px] absolute top-[412.586px] left-[461.003px] z-[4]">
                            <span className="h-[23px] shrink-0 basis-auto font-['Nohemi'] text-[22.421276092529297px] font-semibold leading-[22.522px] text-[#fff] relative text-left whitespace-nowrap z-[5]">
                            Read
                            </span>
                        </div>
                </div>


                <div className="main-container w-[692.556px] h-[481px] relative mx-auto my-0">
                    <div className="w-[692.556px] h-[481px] bg-[#d9d9d9] rounded-[51.489px] opacity-[0.14] absolute top-0 left-0" />
                    <div className="w-[398.904px] h-[423.112px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-05/0MSpTqMz3L.png)] bg-cover bg-no-repeat rounded-[39.787px] absolute top-[30.523px] left-[28.418px] z-[1]" />
                    <span className="flex w-[224.186px] h-[64.203px] justify-start items-start font-['Nohemi'] text-[30.61276626586914px] font-semibold leading-[30.751px] text-[#000] absolute top-[30.523px] left-[461.003px] text-left z-[2]">
                        Bridging the Skills Gap in Africa
                    </span>
                    <span className="flex w-[221.028px] h-[158.93px] justify-start items-start font-['Nohemi'] text-[22.421276092529297px] font-light opacity-60 leading-[22.522px] text-[#000] absolute top-[137.88px] left-[461.003px] text-left z-[3]">
                        The learning kit is also accompanied by printed take-home activity
                        books, worksheets and assessment cards, designed for parents,
                        caregivers...
                    </span>
                        <div className="flex w-[112.619px] h-[41.048px] pt-[11.702px] pr-[35.106px] pb-[11.702px] pl-[35.106px] gap-[11.702px] justify-center items-center flex-nowrap bg-red rounded-[43.298px] absolute top-[412.586px] left-[461.003px] z-[4]">
                            <span className="h-[23px] shrink-0 basis-auto font-['Nohemi'] text-[22.421276092529297px] font-semibold leading-[22.522px] text-[#fff] relative text-left whitespace-nowrap z-[5]">
                            Read
                            </span>
                        </div>
                </div>
            </div>
        </div>


    </>
  );
}

export default HomePage;