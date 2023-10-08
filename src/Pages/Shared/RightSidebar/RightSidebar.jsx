import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSidebar = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-5">Login With</h2>
            <div className="space-y-3">
                <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Github
                </button>
            </div>
            <div className="">
                <h2 className="text-xl font-semibold mb-5">Find Us On</h2>
                <button className="btn btn-outline rounded-none rounded-t-lg w-full justify-start">
                <FaFacebook></FaFacebook>
                Facebook
                </button>
                <button className="btn btn-outline w-full rounded-none justify-start border-y-0">
                <FaTwitter></FaTwitter>
                Twitter
                </button>
                <button className="btn btn-outline w-full rounded-none rounded-b-lg justify-start">
                <FaInstagram></FaInstagram>
                Instagram
                </button>
            </div>
            <div className="bg-[#F3F3F3] p-3 pb-10 rounded-sm">
                <h2 className="text-xl font-semibold mb-5">Q-Zone</h2>
                <div className="space-y-6 flex flex-col items-center">
                    <img src={qZone1} alt="" className="w-full md:w-3/4 lg:w-full"/>
                    <img src={qZone2} alt="" className="w-full md:w-3/4 lg:w-full"/>
                    <img src={qZone3} alt="" className="w-full md:w-3/4 lg:w-full"/>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;