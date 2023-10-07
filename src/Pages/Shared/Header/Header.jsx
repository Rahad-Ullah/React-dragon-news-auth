import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col items-center py-7 text-[#706F6F]'>
            <img src={logo} alt="" className='mb-5'/>
            <p className='text-lg mb-2.5 '>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;