import { useState } from 'react';
import logo from '/src/assets/img/logo2.png';
const Nav = () => {
    //console.log(logo);
    const [open,setOpen] = useState(false);
   // console.log(open);
    
    return ( 
        <>
        <div className='bg-[#4d277b] w-full'>
<div className="navContainer flex flex-row justify-between md:w-[80%] mx-auto items-center px-2.5">
    <div className="logo">
<img className='h-[50px] min-w-[160px]' src={logo} alt="logo" />

    </div>
    <div className="rightSide hidden md:block">
        <div className="navMenu ">
            <ul className='flex flex-row gap-5 items-center  cursor-pointer text-gray-200'>
                <li className='hover:text-[#26EB18]'>Categories</li>
                <li className='hover:text-[#26EB18]'>Fabourite</li>
                <li className='hover:text-[#26EB18]'>Review</li>
                <li className='hover:text-[#26EB18]'>About</li>




            </ul>
        </div>
    </div>

    {/* Nav Right side for mobile */}

 <div className='mobileNav md:hidden'>
    <button onClick={()=>  setOpen(!open) } className=' cursor-pointer bg-[#26EB18] p-1 hover:bg-white text-xs'>Menu</button>
 </div>
</div> {/* container div */}
<div className={`mobileNavContainer w-full min-h-[150px] bg-[#e8e8e8] p-3  ${open? "flex" : "hidden"}`}>

     <ul className='flex flex-col gap-5 cursor-pointer '>
                <li className='hover:text-[#4D277B]'>Categories</li>
                <li className='hover:text-[#4D277B]'>Fabourite</li>
                <li className='hover:text-[#4D277B]'>Review</li>
                <li className='hover:text-[#4D277B]'>About</li>




            </ul>
    
</div>

        </div>
    
        </>
     );
}
 
export default Nav;