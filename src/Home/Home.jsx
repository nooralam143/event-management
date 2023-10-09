import Services from "../Component/Page/Services";
import Bannar from "../Header/Bannar";


const Home = () => {

    return (
        <div className="">
            <Bannar></Bannar>
            <div className="py-10">
            <h2 className="text-pink-600 font-bold text-center">WHAT WE OFFER</h2>
            <h1 className="text-center text-5xl font-extrabold">Our Service</h1>
            </div>
            
          
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;