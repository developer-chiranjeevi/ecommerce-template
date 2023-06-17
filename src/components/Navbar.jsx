import {useState} from 'react';

const Navbar = () =>{

    //navbar state
    const [sidebar ,setSidebar] = useState(true);

    const sidebarToggler = () => {
        if(sidebar){
            setSidebar(false);
        }else{
            setSidebar(true);
        }
    }

    return(
        <div id="navbar_container" className="">
            <div className="bg-white relative z-10 flex justify-between  border-b-2 border-black items-center p-4 lg:py-6 lg:px-10 lg:border-none">
                <div className="select-none">
                    <h1 className="text-md lg:text-2xl font-semibold">RealGadgets</h1>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex">
                        <li className="capitalize mx-4 text-gray-600 hover:text-black"><a href="#">home</a></li>
                        <li className="capitalize mx-4 text-gray-600 hover:text-black"><a href="#">products</a></li>
                        <li className="capitalize mx-4 text-gray-600 hover:text-black"><a href="#">reviews</a></li>
                        <li className="capitalize mx-4 text-gray-600 hover:text-black"><a href="#">contact us</a></li>
                        <li className="capitalize mx-4 text-gray-600 hover:text-black"><a href="#">about us</a></li>
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <button className="capitalize bg-transparent border border-black px-8 py-1 rounded-full hover:bg-black hover:text-white duration-150">
                        sign up
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-1 mb-1 inline-flex items-center">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                    </button>
                </div>
                <div className="block lg:hidden mt-1">
                    <svg onClick={sidebarToggler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
            </div>
            <div id="sidebar_container" className={(sidebar?"bg-white w-full absolute top-16 duration-500 border-b-2 border-black lg:hidden":"bg-white w-full absolute -top-80 duration-500 lg:hidden")}>
                <div className="">
                    <ul className="">
                        <li className="capitalize m-4 text-gray-600 hover:text-black"><a href="#">home</a></li>
                        <li className="capitalize m-4 text-gray-600 hover:text-black"><a href="#">products</a></li>
                        <li className="capitalize m-4 text-gray-600 hover:text-black"><a href="#">reviews</a></li>
                        <li className="capitalize m-4 text-gray-600 hover:text-black"><a href="#">contact us</a></li>
                        <li className="capitalize m-4 text-gray-600 hover:text-black"><a href="#">about us</a></li>
                    </ul>
                </div>
                <div className="m-4">
                    <button className="w-full capitalize bg-black text-white border border-black px-8 py-1 rounded hover:bg-black hover:text-white duration-150">
                        sign up
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-1 mb-1 inline-flex items-center">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;