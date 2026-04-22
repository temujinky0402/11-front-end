export default function Contact() {
    return(
        <div className="bg-linear-to-r from-red-900 to-black h-screen w-screen flex justify-center items-center">
            <div className="bg-linear-to-r from-black to-red-900 h-full w-[75%] rounded-2xl flex  flex-col justify-center items-center ">
                <div>
                    <div className="text-4xl font-bold text-white">Hello! We would like to know you.</div>
                <div class="text-neutral-500 mt-5">Hello? If you need any help we are ready to help!!!</div>
                </div>
                
                <div className="h-30 w-[75%] grid grid-span-1 p-2 flex justify-center">
                    <input className="w-150 h-10 bg-white rounded-2xl pl-5" placeholder="Your email"/>
                    <input className="w-150 h-10 bg-white rounded-2xl pl-5" placeholder="Password"/>
                </div>
                <button className="text-white text-xl font-bold rounded-full bg-rose-800 w-30  h-10 hover:bg-rose-900 active:bg-rose-700 cursor-pointer">Sign in</button>
                <div class="grid grid-cols-2 w-full ml-100 mt-20">
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