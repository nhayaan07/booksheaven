import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import logo from '/src/assets/img/logo2.png';
import { Link } from 'react-router-dom';
const Nav = () => {
    //console.log(logo);
    const [open,setOpen] = useState(false);
   // console.log(open);

    return ( 
        <>
        <div className='bg-[#4d277b] w-full'>
<div className="navContainer flex flex-row justify-between md:w-[80%] mx-auto items-center px-3 py-1">
   <Link to="/"> <div className="logo">
<img className='h-[50px] min-w-[160px]' src={logo} alt="logo" />

    </div> </Link>
    <div className="rightSide hidden md:block">
        <div className="navMenu ">
            <ul className='flex flex-row gap-5 items-center  cursor-pointer text-gray-200'>

                <Link to="/all-categories"> <li className='hover:text-[#26EB18]'>Categories</li> </Link>
               <Link to="#"> <li className='hover:text-[#26EB18]'>Favourite</li> </Link>
               <Link to="#"> <li className='hover:text-[#26EB18]'>Review</li> </Link>
               <Link to="#"> <li className='hover:text-[#26EB18]'>About</li> </Link>




            </ul>
        </div>
    </div>

    {/* Nav Right side for mobile */}

 <div className='mobileNav md:hidden'>
    <FaBars onClick={()=>  setOpen(!open) } className=' cursor-pointer p-1 hover:text-[#27EB24] text-3xl text-gray-300'/>

 </div>
</div> {/* container div */}
<div className={`mobileNavContainer w-full min-h-[150px] bg-[#e8e8e8] p-3  ${open? "flex" : "hidden"}`}>

     <ul className='flex flex-col gap-5 cursor-pointer w-full'>
               <Link to="/all-categories"> <li className='hover:text-[#4D277B] bg-[#fcfcfc] font-semibold p-2'>Categories</li> </Link>
               <Link to="#"> <li className='hover:text-[#4D277B] bg-[#fcfcfc] font-semibold p-2'>Favourite</li> </Link>
               <Link to="#"> <li className='hover:text-[#4D277B] bg-[#fcfcfc] font-semibold p-2'>Review</li> </Link>
               <Link to="#"> <li className='hover:text-[#4D277B] bg-[#fcfcfc] font-semibold p-2'>About</li> </Link>




            </ul>
    
</div>

        </div>
    
        </>
     );
}
 
export default Nav;