import React, { useEffect, useState } from 'react';
import '../components/Pokemon.css';
import DetailsPoke from './DetailsPoke';
import PokemonCard from './pokemonCard/PokemonCard';

const Pokemon = () => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({})

    const getAllPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=49");
        const data = await res.json();

        getDetailPokemon(data.results)
    }

    const getDetailPokemon = async (datas) => {
        const details = datas.map(async (item) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
            return res.json()
        })

        setAllPokemons(await Promise.all(details))
    }

    const handleOnclick = (data) => {
        setSelectedPokemon(data)
    }

    useEffect(() => {
        getAllPokemons();
    }, [])

    // console.log(allPokemons)
    // console.log(selectedPokemon)

    return (
        <div className="content grid lg:grid-cols-[60%_40%] grid-cols-1 h-[90vh] overflow-x-hidden">
            {/* <div className='flex flex-col justify-center items-center'>
                <div className="w-full lg:w-96 flex items-center justify-around header-poke">
                    <div className='flex items-center'>
                        <img src={pokeball} alt="pokeball" className='w-14 h-14 ml-2' />
                        <p className='font-semibold ml-4 text-white'>No. </p>
                    </div>
                    <p className='font-bold text-white'>nama poke ke select</p>
                </div>
                <img src={pokeball} alt="" />
                <div className='w-96 border flex flex-col gap-3'>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <th className='bg-gray-300'>Type</th>
                                <td className='pl-4 bg-gray-200'>Normal</td>
                            </tr>
                            <tr>
                                <th className='bg-gray-300'>Height</th>
                                <td className='pl-4 bg-gray-200'>30 </td>
                            </tr>
                            <tr>
                                <th className='bg-gray-300'>Weight</th>
                                <td className='pl-4 bg-gray-200'>13 </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='bg-black text-white'>
                        <tbody>
                            <tr>
                                <th>Hp</th>
                                <td className='pl-4'>40</td>
                            </tr>
                            <tr>
                                <th>Attack</th>
                                <td className='pl-4'>30</td>
                            </tr>
                            <tr>
                                <th>Defence</th>
                                <td className='pl-4'>50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div> */}
            <DetailsPoke 
                data={selectedPokemon}
            />
            <div className="flex flex-col justify-center items-center gap-y-3 mt-10 border h-[80vh] scrollbar-thumb-accent scrollbar-track-gray-200 scrollbar-thin scrollbar-thumb-rounded-xl">
                {allPokemons.map((pokemonStats) => (
                    <PokemonCard
                        key={pokemonStats.name}
                        id={pokemonStats.id.toString().padStart(3, "0")}
                        image={pokemonStats.sprites.other["official-artwork"].front_default}
                        name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                        type={pokemonStats.types[0].type.name}
                        weight={pokemonStats.weight}
                        height={pokemonStats.height}
                        stats={pokemonStats.stats.map((stat) => stat.base_stat).slice(0, 3)}
                        statsName={pokemonStats.stats.map((stat) => stat.stat.name).slice(0, 3)}
                        onClick={() => handleOnclick(pokemonStats)}
                    />))
                }
            </div>
        </div>
    )

}
export default Pokemon