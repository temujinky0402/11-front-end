export default function Contact() {
    return(
        <div className="bg-[url(https://images.wallpapersden.com/image/download/starry-sky-hd-dark-blue-night_bmZpaG2UmZqaraWkpJRnbmZnrWZraGc.jpg)] h-screen w-full flex flex-col justify-center items-center">
            <p className="text-white text-sm mt-10">click to the logo if you want to go back to the page.</p>
            <a href="http://localhost:3000"><img src="https://play-lh.googleusercontent.com/cfckIXjGbzGF7SXOONjbvcWTdO3QnRCwVRT7yOZsILt_U7TeLkK7y1Ug9TTu37-XGg" className="h-15 w-15 mt-2"></img></a>
            <div className=" h-full w-[75%] rounded-2xl flex  flex-col justify-center items-center ">
                <div>
                    <div className="text-4xl font-bold text-white">Hello! We would like to know you.</div>
                <div class="text-blue-100 mt-5">Hello? If you need any help we are ready to help!!!</div>
                </div>
                
                <div className="h-30 w-[75%] grid grid-span-1 p-2 flex justify-center">
                    <input className="w-150 h-10 bg-white rounded-2xl pl-5 outline-none" placeholder="Your email"/>
                    <input className="w-150 h-10 bg-white rounded-2xl pl-5 outline-none" placeholder="Password"/>
                </div>
                <button className="text-white text-xl font-bold rounded-full bg-purple-800 w-30  h-10 hover:bg-rose-900 active:bg-purple-700 cursor-pointer">Sign in</button>
                <div class="grid grid-cols-2 w-full pl-65 mt-20">
                    <p class="text-white font-bold text-sm">
                        Email:temujinky0402@gmail.com
                    </p>
                    <p class="text-white font-bold text-sm">
                        Phone:95515490
                    </p>
                </div>
            </div>
        </div>
    );
}