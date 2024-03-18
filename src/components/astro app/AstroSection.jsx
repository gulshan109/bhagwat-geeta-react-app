import React, { useContext, useState } from 'react'
import AstroNav from './AstroNav'
import { AstroContext } from './AstroState'
import Loading from "../../../img/loading.gif"

function AstroSection() {
  const {data,b} = useContext(AstroContext);
  return (
    <div className=' bg-slate-400 w-[100%] '>
            <AstroNav/>
            <div className='flex justify-start items-center flex-col gap-4'>
                {
                    data.length > 0 ? data.map((val,index) =>
                        <dl key={index} className=' flex justify-center items-center gap-4 '>
                            <dt className='w-[50vw] bg-slate-500 text-white p-4 flex gap-4 flex-col rounded-3xl mt-8'>
                                <h1 className=' text-white bg-sky-950 text-2xl'>{val.word}</h1>
                                <dd>{val.definition}</dd>
                                <dd>{val.author}</dd>
                                <dd>{val.written_on }</dd>
                                <dd>{val.example}</dd>
                                {/* <dd>{val.permalink}</dd> */}
                                <div>
                                <button className=' bg-slate-400 relative bottom-0 left-0 w-[3rem] h-[2rem] border-white'>{val.thumbs_up}</button>
                                <button className=' bg-slate-400 relative bottom-0 left-0 w-[3rem] h-[2rem] border-white'>{val.thumbs_down}</button>
                                </div>
                            </dt>
                        </dl>):<>
                        {b &&
                        <img src={Loading} className='h-40' alt="" />}
                        </>
                }</div>
        </div>
  )
}

export default AstroSection