export default function Nest() {
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-auto h-auto flex justify-center items-center flex-col">
                <img src="https://play-lh.googleusercontent.com/cfckIXjGbzGF7SXOONjbvcWTdO3QnRCwVRT7yOZsILt_U7TeLkK7y1Ug9TTu37-XGg" className="h-60 w-60"></img>
                <div className="mt-3 grid grid-cols-4">
                    <a href="http://localhost:3000/contact"><button className="h-auto w-auto p-5 bg-white rounded-xl font-bold cursor-pointer active:bg-gray-300 transition duration-300 easy-in-out active:border border-gray-500">Contact</button></a>
                    <a href="http://localhost:3000/content"><button className="h-auto w-auto p-5 bg-white rounded-xl font-bold cursor-pointer active:bg-gray-300 transition duration-300 easy-in-out active:border border-gray-500">Content</button></a>
                    <a href="http://localhost:3000/weather"><button className="h-auto w-auto p-5 bg-white rounded-xl font-bold cursor-pointer active:bg-gray-300 transition duration-300 easy-in-out active:border border-gray-500">Weather</button></a>
                    <a href="http://localhost:3000/lesson"><button className="h-auto w-auto p-5 bg-white rounded-xl font-bold cursor-pointer active:bg-gray-300 transition duration-300 easy-in-out active:border border-gray-500">Utils</button></a> 
                </div>
                
            </div>
        </div>
    );
}