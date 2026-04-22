export default function NotFound() {
    return(
        <div className="bg-linear-to-r from-red-900 to-black h-screen w-screen flex justify-center items-center">
            <div className="bg-linear-to-r from-black to-red-900 h-[50%] w-[50%] rounded-2xl flex  flex-col justify-center items-center">
                <div className="text-4xl font-bold text-white">404!</div>
                <div class="text-neutral-500 mt-5">maybe double checking is the solution.</div>
            </div>
        </div>
    );
}