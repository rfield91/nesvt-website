import helmet from "../assets/helmet.png"

export const Nav = () => {
    const navLinks = [
        {
            title: "NE-SVT Home",
            path: "/",
            content: <img src={helmet} alt='NE-SVT Logo' className='h-8 w-8' />
        },
        {
            title: "Live Timing",
            path: "/results"
        },
        {
            title: "Events",
            path: "/events",
        },
        {
            title: "FAQ",
            path: "/faq"
        },
        {
            title: "Contact Us",
            path: "/contact"
        }
    ]

    return <div className='bg-gray-800'>
        <nav>
            <ul className='flex flex-col md:flex-row list-none gap-2 items-center font-semibold tracking-wide'>
                {navLinks.map(link => (
                    <li className="flex">
                        <a className='p-2 h-full inline-block text-white hover:text-gray-300 transition-all duration-500' href={link.path} title={link.content ? link.title : ""}>
                            {link.content ?? link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
};