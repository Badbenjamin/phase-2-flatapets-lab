import Pet from "./Pet";

function PetList({myPets}){

    // console.log(myPets)
    const petListItem = myPets.map(pet => {
        return(
            // console.log(pet)
            <Pet pet={pet} />
        )
    })

    return (
        <ul className="pet-list">
            {petListItem}
        </ul>
    );
}

export default PetList;