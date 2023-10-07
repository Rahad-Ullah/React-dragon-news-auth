import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex p-4 bg-zinc-100">
            <button className="btn btn-secondary rounded-none">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} className="text-2xl text-[#403F3F]">
                <Link to={"/"} className="mr-8">Flood could be affected large in north teritory of Bangladesh...</Link>
                <Link to={"/"} className="mr-8">Heavy rain in Sikkim in India cause flood in northern side of Bangladesh...</Link>
                <Link to={"/"} className="mr-8">Most big cities of Bangladesh are going to underwater for heavy rain...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;