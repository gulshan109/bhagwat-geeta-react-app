import React, { useContext } from 'react'
import { AstroContext } from './AstroState'
import Logo from '../../../img/astro-logo.png'
function AstroNav() {
    const { handleChange, handleClick } = useContext(AstroContext)
    return (
        <header className=' flex w-[100%] h-[20vh] bg-slate-600 '>
            <article className=' flex justify-center items-center gap-28 m-16'>
                <img src={Logo} alt="Logo" className=' w-[15vw] h-[17vh] rounded-full' />
                <nav>
                    <ul className=' flex justify-center items-center gap-24 text-xl my-6'>
                        <li>Browser</li>
                        <li>Store</li>
                        <li>Blog</li>
                        <li>Discord</li>
                        <li>Advertise</li>
                    </ul>
                    <form className=' flex justify-center text-center gap-6' onSubmit={handleClick}>
                        <input type="search"
                            placeholder='Search your name..' className=' w-[45vw] h-[5vh] bg-slate-800 text-white rounded-xl p-4' onChange={handleChange} />
                        <button className=' border border-slate-400 py-1 px-4 rounded-lg bg-gray-500 text-white'onClick={handleClick}>Search</button>
                        
                    </form>
                </nav>
            </article>
        </header>
    )
}

export default AstroNav