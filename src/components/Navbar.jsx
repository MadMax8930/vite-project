import { useState} from 'react';
import { Link } from 'react-router-dom';
import {logo, menu, close} from '../assets';

const navLinks = [
   {
     id: "about",
     title: "About",
   },
   {
     id: "products",
     title: "Products",
   },
   {
     id: "information",
     title: "Information",
   },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
   <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
         {/* Desktop version */}
         <Link to='/' className='logo-container'>
            <img src={logo} alt="AdCleek Logo" className='logo-img'/>
            <p className='nav-title'>&nbsp;AdCleek&nbsp;<span className='sm:block hidden'>| 2H Test</span></p>
         </Link>
         <ul className='desktop-menu-ul'>
            {navLinks.map((link) => (
               <li key={link.id} onClick={() => setActive(link.title)} 
               className={`${active === link.title ? "text-tertiary" : "text-secondary"} desktop-menu-li`}>
                  <a href={`${link.id}`}>{link.title}</a>
               </li>
            ))}
         </ul>
         {/* Mobile version */}
         <div className='sm:hidden flex justify-end items-center'>
            <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle(!toggle)} className='hamburger-img'/>
            <div className={`${!toggle ? 'hidden' : 'flex'} mobile-menu-links`}>
               <ul className='mobile-menu-ul'>
                  {navLinks.map((link) => (
                     <li key={link.id} onClick={() => { setToggle(!toggle); setActive(link.title) }}
                     className={`${ active === link.title ? "text-tertiary" : "text-secondary"} mobile-menu-li`}>
                        <a href={`${link.id}`}>{link.title}</a>
                     </li>
                  ))}
               </ul> 
            </div>
         </div>
      </div>
   </nav>
  )
}

export default Navbar