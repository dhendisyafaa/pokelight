import React from 'react'
import pokeball from '../images/icon/pokeball.png'

const DetailsPoke = ({data}) => {
    if(Object.keys(data).length === 0) return <div  className='border flex justify-center items-center'><p>Please click Pokemon Card!</p></div>
    console.log(data)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="w-full lg:w-96 flex items-center justify-around header-poke">
                <div className='flex items-center'>
                    <img src={pokeball} alt="pokeball" className='w-14 h-14 ml-2' />
                    <p className='font-semibold ml-4 text-white'>No. {data.id}</p>
                </div>
                <p className='font-bold text-white'>{data.name}</p>
            </div>
            <img src={data.sprites.front_default} alt="" className='w-52 h-52'/>
            <div className='w-96 border flex flex-col gap-3'>
                <table className='w-full'>
                    <tbody>
                        <tr>
                            <th className='bg-gray-300'>Type</th>
                            <td className='pl-4 bg-gray-200'>Normal</td>
                        </tr>
                        <tr>
                            <th className='bg-gray-300'>Height</th>
                            <td className='pl-4 bg-gray-200'>0.{data.height} m<span className='text-red-700'>*</span></td>
                        </tr>
                        <tr>
                            <th className='bg-gray-300'>Weight</th>
                            <td className='pl-4 bg-gray-200'>{data.weight} kg<span className='text-red-700'>*</span></td>
                        </tr>
                    </tbody>
                </table>
                <table className='bg-black text-white'>
                    <tbody>
                        <tr>
                            <th>Hp</th>
                            <td className='pl-4'>{data.stats[0].base_stat}</td>
                        </tr>
                        <tr>
                            <th>XP</th>
                            <td className='pl-4'>{data.base_experience}</td>
                        </tr>
                        <tr className='border text-center'>
                            <td>{data.abilities[1].ability.name}</td>
                            <td>{data.abilities[2].ability.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DetailsPoke