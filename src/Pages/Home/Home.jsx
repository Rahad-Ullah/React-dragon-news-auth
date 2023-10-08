
import Header from "../Shared/Header/Header";
import LeftSidebar from "../Shared/LeftSidebar/LeftSidebar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSidebar from "../Shared/RightSidebar/RightSidebar";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
    const newses = useLoaderData()

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-16">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-6 lg:gap-6">
                <div className="">
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className="col-span-2">
                    <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>

                    {/* News container */}
                    <div className="space-y-6">
                        {
                            newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                        }
                    </div>
                </div>
                <div className="">
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;