


const Card = () =>{



    return(
        <div className="w-full mx-0 my-6 lg:mx-4 lg:w-1/4 bg-gray-100 rounded-lg">
            <div className="w-full rounded-lg">
                <img src="https://picsum.photos/400" className="w-full rounded-lg" alt="product_image" />
            </div>
            <div className="w-full py-4 px-2">
                <div className="w-full">
                    <h1 className="text-xl text-gray-700">$2000</h1>
                    <h1 className="capitalize text-xl mt-2">Lorem ipsum</h1>
                    <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="w-full mt-4">
                    <ul className="inline-flex">
                        <li className="capitalize inline-flex items-center text-sm bg-gray-200 px-3 py-1 rounded-full text-gray-800">
                            top seller
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-3">
                                <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clip-rule="evenodd" />
                            </svg>
                        </li>
                        <li className="capitalize inline-flex items-center text-sm bg-gray-200 px-3 py-1 rounded-full text-gray-800 ml-2">
                            exclusive
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-3">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;