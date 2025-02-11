import back1 from '../assets/back1.jpeg'

const Home = () => {
    return (
        <div className='relative'>
            <div className="absolute">
                <h1 className="text-white">Infinite Possibilities & Limitless Growth</h1>
                <h1 className="text-white text-[115px] uppercase">Unstoppable</h1>
            </div>
            <div className='absolute -top-[100%]'>
                <img src={back1} alt="" />
            </div>
        </div>
    )
}

export default Home;