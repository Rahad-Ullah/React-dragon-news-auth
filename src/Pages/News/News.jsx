import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSidebar from "../Shared/RightSidebar/RightSidebar";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {

    const {id} = useParams()
    
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <Header></Header>
            <Navbar></Navbar>
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Side */}
                <div className="col-span-3">
                    <h2 className="text-xl font-semibold mb-5">Dragon News</h2>
                    <p>{id}</p>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                </div>

                {/* Right Sidebar */}
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default News;