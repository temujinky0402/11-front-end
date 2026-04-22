export default function Content() {
    return(
        <div className="bg-linear-to-r from-red-900 to-black h-screen w-screen flex justify-center items-center">
            <div className="bg-linear-to-r from-black to-red-900 h-full w-[75%] rounded-2xl flex  flex-col justify-center items-center ">
                <div className="flex justify-center">
                    <div className="text-4xl font-bold text-white">Hello! Welcome.</div>
                </div>
                
                <div className="h-30 w-[75%] mt-5 flex justify-center">
                    <input className="w-150 h-10 bg-white rounded-2xl pl-5" placeholder="Search"/>
                </div>
                <p className="text-gray-600">Search whatever you like</p>
            </div>
        </div>
    );
}