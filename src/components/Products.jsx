import Card from './Card.jsx';

const Products = () =>{


    return(
        <div className="p-4 w-full lg:py-6 lg:px-10">
            <div className="my-6">
                <h1 className="capitalize text-3xl text-center">popular products</h1>
            </div>
            <div className="">
                <ul className="capitalize inline-flex">
                    <li className="text-sm lg:text-md mx-2 lg:mx-4 bg-gray-900 text-white border-2 border-gray-800 px-4 py-1 rounded-full"><a href="#" className="">electronics</a></li>
                    <li className="text-sm lg:text-md mx-4 border-2 border-gray-800 px-4 py-1 rounded-full"><a href="#">furnitures</a></li>
                    <li className="text-sm lg:text-md mx-4 border-2 border-gray-800 px-4 py-1 rounded-full"><a href="#">clothing</a></li>
                </ul>
            </div>
            <div className="w-full flex flex-col md:flex-row flex-wrap justify-between">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Products;