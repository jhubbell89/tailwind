import { FaThermometerFull, FaWrench } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'

export default function SideBar() {

    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaThermometerFull size={30} />} />
            <SideBarIcon icon={<FaWrench size={30}/>} />
            <SideBarIcon icon={<GrProjects size={30}/>} />
        </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip 🍺' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)
