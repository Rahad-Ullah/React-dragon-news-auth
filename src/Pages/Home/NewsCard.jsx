import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const NewsCard = ({news}) => {
    const {_id, title, image_url, details, author, rating, total_view} = news;

    return (
            <div className="border rounded-lg">

                {/* Top bar */}
                <div className="p-5 bg-[#F3F3F3] mb-2 flex gap-3 justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={author.img} alt="" className="w-auto h-11 rounded-full"/>
                        <div>
                            <h3 className="font-medium">{author?.name}</h3>
                            <p>{author?.published_date?.slice(0, 10)}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaBookmark></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>
                {/* News Body */}
                <div className="px-5">
                    <h2 className="text-xl font-bold my-4">{title}</h2>
                    <img src={image_url} alt="" className="mb-8"/>

                    {/* News Details */}
                        {
                            details.length > 200 ?
                            <p className="text-[#706F6F] mb-5">{details.slice(0, 200)}.....<Link to={`/news/${_id}`} className="font-semibold text-orange-500 ml-4 link link-hover">Read More</Link></p>
                            : <p className="text-[#706F6F] mb-5">{details}</p>
                        }

                    {/* Bottom bar */}
                    <div className=" border-t py-5 flex items-center justify-between gap-2 text-[#706F6F]">
                        <div className="flex items-center gap-2">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-[#706F6F] font-medium">{rating.number}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEye></FaEye>
                            <p className="text-[#706F6F] font-medium">{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object,
}

export default NewsCard;