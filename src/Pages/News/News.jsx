import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSidebar from "../Shared/RightSidebar/RightSidebar";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {

    const {id} = useParams()
    const newses = useLoaderData()
    const news = newses.find(news => news._id === id)
    const {image_url, title, details} = news;
    console.log(news)
    
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <Header></Header>
            <Navbar></Navbar>
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-6 lg:gap-6 pb-10">
                {/* Left Side */}
                <div className="col-span-3">
                    <h2 className="text-xl font-semibold mb-5">Dragon News</h2>
                    <div className="border p-8 rounded-md">
                        <img src={image_url} alt="" />
                        <h1 className="text-2xl font-bold text-[#403F3F] my-5">{title}</h1>
                        <p className="text-[#706F6F]">{details}</p>
                        <Link to={"/"} className="btn btn-error bg-rose-600 text-white rounded-none normal-case text-base font-medium group mt-8"><span className="text-2xl group-hover:-translate-x-2 transition">&#x1F850;</span> All news in this category</Link>
                    </div>
                </div>

                {/* Right Sidebar */}
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default News;