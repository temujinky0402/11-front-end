export default function Content() {
    return(
        <div className="bg-[url(https://images.wallpapersden.com/image/download/starry-sky-hd-dark-blue-night_bmZpaG2UmZqaraWkpJRnbmZnrWZraGc.jpg)] h-screen w-screen flex flex-col justify-center items-center">
            <p className="text-white text-sm mt-10">click to the logo if you want to go back to the page.</p>
            <a href="http://localhost:3000"><img src="https://play-lh.googleusercontent.com/cfckIXjGbzGF7SXOONjbvcWTdO3QnRCwVRT7yOZsILt_U7TeLkK7y1Ug9TTu37-XGg" className="h-15 w-15 mt-2"></img></a>
            <div className=" h-screen w-[75%] rounded-2xl flex  flex-col items-center mt-25">
                <div className="flex justify-center">
                    <div className="text-4xl font-bold text-white">Hello<a className="text-purple-500">!</a> Welcome<a className="text-purple-500">.</a></div>
                </div>
                
                <div className="h-30 w-[75%] mt-5 flex justify-center">
                    <input className="w-150 h-10 bg-white rounded-2xl pl-5 outline-none text-blue-800" placeholder="Search"/>
                </div>
            </div>
        </div>
    );
}