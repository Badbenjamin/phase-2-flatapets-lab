import {useState} from 'react'

function NewPetForm({addPet}) {
  const [formData, setFormData] = useState({
      name: "",
      fromPetShop: "true", 
      image: "",
      animal_type: ""
  })

  function handleOnChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    const newPet = {
      ...formData,
      fromPetShop: (formData.fromPetShop === "true" ? true : false)
    }
    
    addPet(newPet)

    setFormData({
      name: "",
      fromPetShop: "true", 
      image: "",
      animal_type: ""
    })
    
  }

  // console.log(formData)

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} type="text" name="name" placeholder="Pet name" value={formData.name}/>
        <input onChange={handleOnChange} type="text" name="image" placeholder="Image URL" value={formData.image}/>
        <input onChange={handleOnChange} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type}/>
        <select onChange={handleOnChange} name="fromPetShop" value={formData.fromPetShop}>
          <option value="true">From a Pet Shop</option>
          <option value="false">From the wild</option>
        </select>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;