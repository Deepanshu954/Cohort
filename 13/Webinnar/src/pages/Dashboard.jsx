import GradientText from '../component/GradientText';
import { useState } from "react";


export function Dashboard()
{
    const [open,setOpen] = useState(true);

    return (
        <div className="relative">
            <div>
                <TopBar />
            </div>
            <div className="flex flex-col md:flex-row z-10 relative">
                <div> <Section1 /></div>
                <div> <Section2 /></div>
                <div> <Section3 /></div>
                <div> <Section4 /></div>
            </div>
        </div>
    );
}


function TopBar() {
  return (
    <div className="absolute top-0 left-0 w-full h-auto z-0">
      <img 
        src="https://webinar.gg/homeBg.svg"
        className="w-full h-full object-fill"
        alt="top-banner"
      />
    </div>
  );
}


function Section1()
{
    const [open,setOpen] = useState(true);

    function toggle()
    {
        setOpen(!open);
    }

    return(
        <div>
            <div className = {` w-75 h-[100vh] bg-white rounded-xl text-gray-500 border-1 border-[#ccc] hidden md:block`}>
                
                <div className = "flex justify-between">
                    <div className = "bg-[#002a5a] rounded-lg p-2 w-30 mt-5 ml-4" >
                        <img src = "https://webinar.gg/loginLogo.svg"></img>
                    </div>
                    <div className = "rounded-lg p-2 w-10 mt-5 ml-4 mr-4">
                        <img src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"></img>
                    </div>
                </div>

                <div className = "flex justify-between">
                    <div className = "p-2 mt-5 ml-4 mr-4">
                        Home
                    </div>
                    <button className = "rounded-lg p-2 w-10 mt-5 ml-4 mr-4 hover:bg-sky-200 transform-all duration-1000 hover:w-12">
                        <img src = "https://cdn-icons-png.flaticon.com/128/553/553376.png"></img>
                    </button>
                </div>

                <div className = "flex justify-between">
                    <div className = "p-2 mt-5 ml-4 mr-4">
                        Webinars
                    </div>
                    <button className = "rounded-lg p-2 w-10 mt-5 ml-4 mr-4 hover:bg-sky-200 transform-all duration-1000 hover:w-12">
                        <img src = "https://marketplace.canva.com/vDZC0/MAFDRGvDZC0/1/tl/canva-community-icon-MAFDRGvDZC0.png"></img>
                    </button>
                </div>

                <div className = "flex justify-between">
                    <div className = "p-2 mt-5 ml-4 mr-4">
                        Billing
                    </div>
                    <button className = "rounded-lg p-2 w-10 mt-5 ml-4 mr-4 hover:bg-sky-200 transform-all duration-1000 hover:w-12">
                        <img src = "https://cdn-icons-png.flaticon.com/512/4400/4400532.png"></img>
                    </button>
                </div>

                <div className = "flex justify-between">
                    <div className = "p-2 mt-5 ml-4 mr-4">
                        User Management
                    </div>
                    <button className = "rounded-lg p-2 w-10 mt-5 ml-4 mr-4 hover:bg-sky-200 transform-all duration-1000 hover:w-12">
                        <img src = "https://static.thenounproject.com/png/1034785-200.png"></img>
                    </button>
                </div>

                <div className = "flex justify-between">
                    <div className = "p-2 mt-5 ml-4 mr-4">
                        Settings
                    </div>
                    <button className = "rounded-lg p-2 w-10 mt-5 ml-4 mr-4 hover:bg-sky-200 transform-all duration-1000 hover:w-12">
                        <img src = "https://cdn-icons-png.freepik.com/256/1103/1103621.png?semt=ais_hybrid"></img>
                    </button>
                </div>

                {/* Collapse Button */}
                <div className = "flex justify-end mt-15 p-5">
                    <button onClick ={() => {setOpen(e => !e)}} className = "rounded-lg p-2 w-15 mt-5 ml-4 mr-4 transform-all duration-1000 hover:w-20">
                        <img src = "https://images.icon-icons.com/67/PNG/512/previous_13715.png"></img>
                    </button>
                </div>
            </div>

            {/* Expand Button */}
            <div className = "w-25 h-[100vh] bg-white rounded-xl border-1 border-[#ccc] md:hidden block flex">
                <button className = "rounded-lg p-2 w-15 mt-5 ml-4 mr-4 transform-all duration-1000 hover:w-20">
                    <img src = "https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/fast-forward-28.png"></img>
                </button>
            </div>
        
        </div>
    )
}

function Section2()
{
    return(
        <div className = "w-60 h-100 bg-white rounded-lg text-gray-500 mt-30 mx-10 border-1 border-[#ccc] shadow-lg">
            <div className = "p-10 rounded-xl">
                <img className = "rounded-xl" src = "https://resource-cdn.obsbothk.com/product_system_back/product_img/4k-60fps-camera.jpg"></img>
            </div>

            <div className="flex justify-center text-gray-600 font-bold text-xl">
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                >
                    Deepanshu Chauhan
                </GradientText>
            </div>

            <div className="flex justify-center text-gray-600 text-lg mt-4">
                deepanshu95@gmail.com
            </div>

            <div className="flex justify-center text-gray-600 text-lg">
                9548864851
            </div>

            <div className="flex justify-center text-gray-600 text-lg mt-5">
                Greater Noida
            </div>
            
        </div>
    )
}

function Section3()
{
    return(
        <div>
            <div className = "mt-50 bg-white fond-bold text-xl">
                <div>
                    Monday, 30 June
                </div>
                <div className = "text-[#062f5d] text-2xl font-bold">
                    Good Morning,Deepanshu! 👋🏻
                </div>
            </div>

            <div className = "w-125 h-110 rounded-lg p-5 border-1 border-[#ccc] rounded-lg mt-5 shadow-lg">

                <div>
                    Date
                </div>
                <div>
                    Time 1
                </div>
                 <div>
                    Time 2
                </div>
                 <div>
                    Time 3
                </div>
                 <div>
                    Time 4
                </div>
            </div>
        </div>
    )
}

function Section4()
{
    return(
        <div className = "w-70 h-70 bg-white mx-10 mt-70 rounded-lg p-5 border-1 border-[#ccc] shadow-lg">
            <div className = "flex justify-between">
                <div className = "rounded-lg p-2 w-18 h-18 p-3 bg-[#40e0d0] mt-5 ml-4 mr-4">
                    <img src = "https://cdn-icons-png.freepik.com/512/3652/3652191.png"></img>
                </div>
                <div className = "rounded-lg p-2 w-18 h-18 bg-[#40e0d0] m-5 pl-5 text-5xl ">
                    +
                </div>
            </div>

            <div className = "rounded-lg p-2 w-18 h-18 p-3 bg-[#40e0d0] mt-5 ml-4 mr-4">
                <img src = "https://www.pngplay.com/wp-content/uploads/8/Video-Player-Icon-PNG-Clipart-Background.png"></img>
            </div>
        </div>
    )
}