// import for topbar icons
import { FaThermometerFull, FaWrench } from 'react-icons/fa'



// export function for TopBar
export default function TopBar() {
    return (
        
        <div className="fixed top-0 left-0 w-full h-16 m-0 flex flex-row bg-gray-900 text-white shadow-lg">
           
            <div className="flex flex-row justify-start items-center w-full h-full">

            <TopBarButton icon={<FaThermometerFull size={30} />} />
            <TopBarButton icon={<FaWrench size={30}/>} />
            </div>

        </div>


    );
}

// write a function for topbarbutton
const TopBarButton = ({ icon, text = 'tooltip 🍺' }) => (
    <div className="topbar-button group">
        {icon}
        <span className="topbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

