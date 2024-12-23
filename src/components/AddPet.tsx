import { ChangeEvent, FormEvent, useState } from "react"
import { petsService } from "../services/PetsService"
import Pop from "../utils/Pop"

export type PetCreationObj = {
  name: string
  age: number
  imgUrl: string
  species: string
  isVaccinated: boolean
}

export const AddPet = () => {
  const getPetCreationObj = () => {
    return {
      name: '',
      age: 0,
      imgUrl: '',
      species: '',
      isVaccinated: false
    }
  }

  const [petData, setPetData] = useState<PetCreationObj>(getPetCreationObj());
  const resetPetData = () => setPetData(getPetCreationObj());

  const changeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    // setPetData({...petData, [name]: value});
    setPetData((petData) => ({
      ...petData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await petsService.createPet(petData);
    Pop.success("Pet Successfully Added");
    resetPetData();
  }

  return (
    <section className="container">
      <form className="row" onSubmit={(e) => submitHandler(e)}>
        <div className="col-md-6">
          <label className="form-label w-100">
            Name
            <input onChange={(e) => changeHandler(e)} className="form-control" id="name" name="name" value={petData.name} minLength={2} maxLength={100} required />
          </label>
        </div>

        <div className="col-md-6">
          <label className="form-label w-100">
            Age
            <input onChange={(e) => changeHandler(e)} className="form-control" id="age" name="age" type="number" value={petData.age} min={1} maxLength={30} required />
          </label>
        </div>

        <div className="col-md-6">
          <label className="form-label w-100">
            Image
            <input onChange={(e) => changeHandler(e)} className="form-control" type="url" id="imgUrl" name="imgUrl" value={petData.imgUrl} maxLength={600} required />
          </label>
        </div>

        <div className="col-md-6">
          <div className="d-flex align-items-end">
            <select onChange={(e) => changeHandler(e)} className="form-control w-75" name="species" id="species" value={petData.species}>
              <option disabled value="">Select an animal species</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="lizard">Lizard</option>
            </select>

            <label className="form-label mb-0 ms-2">
              Vaccinated?
              <input className="form-check mx-auto " onChange={(e) => changeHandler(e)} type="checkbox" name="isVaccinated" id="isVaccinated" checked={petData.isVaccinated} />
            </label>
          </div>
        </div>
        <div className="text-center mt-2">
          <button className="btn btn-outline-dark rounded px-3 py-2">Add Pet</button>
        </div>
      </form>
    </section>
  )
}