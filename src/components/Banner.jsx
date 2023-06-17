


const Banner = () =>{



    return(
        <div className="p-4 w-full flex items-center justify-between lg:py-6 lg:px-10">
            <div className="w-full lg:w-1/2">
                <h1 className="capitalize text-7xl md:text-8xl lg:text-7xl">step into <span className="text-blue-600">distinctive</span> products</h1>
                <p className="my-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <button className="mt-2 lg:mt-8 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full">
                    Explore More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-1 mb-1 inline-flex items-center">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </button>
            </div>
            <div className="hidden lg:block w-1/2">
                <div className="bg-blue-600 rounded-lg" >
                    <img className="relative left-2 top-2 rounded-lg rotate-6 " src="./banner_image.jpg" alt="banner image"/>
                </div>
            </div>
        </div>
    )
}

export default Banner;