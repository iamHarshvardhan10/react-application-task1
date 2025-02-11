import logo from '../assets/logo.png'
import btn from '../assets/btncta.png'
import back1 from '../assets/back1.jpeg'
const Navbar = () => {
    return (
        <div className='px-12 py-4 flex item-center justify-between relative'>
            <div>
                <img src={logo} alt="Logo image" className='w-[226px] h-[86px]' />
            </div>
            <div className='flex item-center justify-center'>
                <ul className='flex item-center gap-12 pt-10 px-10 py-2'>
                    <li className='text-gray-500  capitalize'>About Us</li>
                    <li className='text-gray-500  capitalize'>Our Work</li>
                    <li className='text-gray-500 capitalize'>Services</li>
                    <li className='text-gray-500  capitalize'>Contact</li>
                </ul>
            </div>
            <div className='px-10 py-8'>
                <div className='flex item-center justify-center gap-4 border px-10 py-4 rounded-full'>
                    <img src={btn} alt="Button" className='w-[20px] h-[20px]' />
                    <h3 className='text-white'>Get In Touch</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar;