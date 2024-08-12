import PetList from "./PetList";
import Search from './Search';
import NewPetForm from "./NewPetForm";
import {useState, useEffect} from 'react'

function PetPage(){
    const [myPets, setMyPets] = useState([])
    const [searchText, setSearchText] = useState("")

    console.log(searchText)
    
    const filteredPets = myPets.filter(pet => {
       return pet.name.toUpperCase().includes(searchText.toUpperCase()) || pet.animal_type.toUpperCase().includes(searchText.toUpperCase())
    })

    useEffect(() => {
        fetch("http://localhost:4000/pets")
        .then(response => response.json())
        .then(petData => setMyPets(petData))
    }, [] )

    function addPet(newPet){
        fetch("http://localhost:4000/pets", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPet)
        })
        .then(response => response.json())
        .then(newPetData => setMyPets([...myPets, newPetData]))
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search setSearchText={setSearchText} text={setSearchText}/>
            <PetList myPets={filteredPets} />
        </main>
    );
}

export default PetPage;