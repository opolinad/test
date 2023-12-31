import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './CardContainer.css';

interface cardProps{
    name: string;
    url: string;
}

const CardContainer = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/pokemon`)
            .then(response => response.json())
            .then(response => setPokemons(response.data.pokemons));
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.replace("/login");
    }

    return (
        <>
            <h3 id="cards-container-title">Pokemons</h3>
            <p onClick={logout}>Cerrar sesión</p>
            <div id="cards-container">
                {pokemons.map((pokemon:cardProps) => <Card key={ pokemon.name} name={pokemon.name} url={pokemon.url} ></Card>)}
            </div>
        </>
    );
}

export default CardContainer;