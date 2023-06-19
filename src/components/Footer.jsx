


const Footer = () =>{



    return(
        <div className="bg-gray-100 p-4 w-full lg:flex justify-between lg:py-6 lg:px-10">
            <div className="w-full lg:w-1/2">
                <h1 className="capitalize text-md text-center lg:text-xl lg:text-start">sign up for our newsletter to get latest notifications on our products</h1>
                <input className="focus:outline-none mx-auto px-2 py-3 w-3/5 rounded-lg mt-2" type="email" placeholder="Enter Your Email Address" />
                <button className="bg-red-600 text-white py-3 px-8 rounded-r-lg relative right-1 lg:px-5">Subscribe</button>           
            </div>
            <div className="w-full hidden mt-5 lg:mt-0 lg:w-1/2  lg:flex lg:justify-end">
                <div>
                    <ul className="inline-flex text-gray-700">
                        <li className="mr-6 hover:text-gray-900"><a href="#">About</a></li>
                        <li className="mr-6 hover:text-gray-900"><a href="#">Contact us</a></li>
                        <li className="mr-6 hover:text-gray-900"><a href="#">Copyrights</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;