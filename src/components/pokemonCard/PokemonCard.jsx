import React, { useState } from 'react'
import Modal from '../Modal';
import pokeball from '../../images/icon/pokeball.png'

function PokemonCard({ id, name, image, type, weight, height, stats, statsName }) {

    // const [isShown, setIsShown] = useState(false);
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    // function modalHandler() {
    //     setModalIsOpen(true)
    // }

    // function closeModalHandler() {
    //     setModalIsOpen(false)
    // }

    return (
        <div className="w-full flex items-center justify-between hover:bg-accent rounded border-b-accent border-4 hover:text-white cursor-pointer shadow-md">
            <div className='flex items-center'>
                <img src={image} alt={name} className='w-14 h-14 ml-2' />
                <p className='font-semibold ml-4'>No. {id}</p>
            </div>
            <p className='font-bold'>{name}</p>
            <img src={pokeball} alt="Pokeball" className='w-12 h-12' />
        </div>


    )
}

export default PokemonCard