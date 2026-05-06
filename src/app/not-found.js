export default function NotFound() {
    return(
        <div className="bg-[url(https://images.wallpapersden.com/image/download/starry-sky-hd-dark-blue-night_bmZpaG2UmZqaraWkpJRnbmZnrWZraGc.jpg)] h-screen w-screen flex justify-center items-center">
            <div className="h-[50%] w-[50%] rounded-2xl flex  flex-col justify-center items-center">
                <div className="text-9xl font-bold text-white">404<a className="text-purple-500">!</a></div>
                <div className="text-blue-300 text-xl">maybe double checking is the solution<a className="text-purple-500">.</a></div>
                <a href="http://localhost:3000">< button className="text-purple-300 cursor-pointer text-sm">click here to go to the homepage!</button></a>
            </div>
        </div>
    );
}