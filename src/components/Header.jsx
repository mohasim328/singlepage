

const Header = ({ HomeSec, AboutSec, ContactSec, ServicesSec, ScrollHandler }) => {
    return (
        <nav className="bg-slate-600 text-white fixed top-0 w-full">
            <ul 
                className="flex justify-center gap-5 items-center h-20" 
                role="navigation" 
                aria-label="Main Navigation"
            >
                <li>
                    <button 
                        className="hover:text-gray-300 outline p-2 " 
                        onClick={() => ScrollHandler(HomeSec)}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button 
                        className="hover:text-gray-300 outline p-2" 
                        onClick={() => ScrollHandler(AboutSec)}
                    >
                        About
                    </button>
                </li>
                <li>
                    <button 
                        className="hover:text-gray-300 outline p-2" 
                        onClick={() => ScrollHandler(ContactSec)}
                    >
                        Contact
                    </button>
                </li>
                <li>
                    <button 
                        className="hover:text-gray-300 outline p-2" 
                        onClick={() => ScrollHandler(ServicesSec)}
                    >
                        Services
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
