import { useEffect, useState } from "react";
import Pop from "../utils/Pop";
import { petsService } from "../services/PetsService";
import { AppState } from "../AppState";
import { Pet } from "../models/Pet";
import { ModalWrapper } from "../components/ModalWrapper";
import { AddPet } from "../components/AddPet";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        await petsService.getPets();
        setPets([...AppState.pets])
        setLoading(false);
      } catch (e) {
        Pop.error(e as Error);
      }
    }

    fetchPets();
  }, [])

  return (
    <>
      <section className="container pt-3">
        <div className="row gy-3">
          <div className="col-md-6">
            <div className="p-1">
              <h1>At Pet Care We Care</h1>
              <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id voluptatem dicta? Similique ex rem, possimus asperiores facere illum necessitatibus nemo impedit enim reiciendis. Quos distinctio repellat est asperiores! Ex minima ipsam eum voluptates nesciunt! Corporis omnis doloribus nemo natus.</p>
              <div>
                <button type="button" className="btn btn-outline-dark rounded-pill px-3 py-1 me-2">Our Services</button>
                <button type="button" className="btn btn-outline-light rounded-pill px-3 py-1 text-dark"><i className="fa-solid fa-phone me-2"></i>Get in Touch</button>
              </div>
              <div className="landing-img">
                <img src="https://i.redd.it/if2wmc7127ka1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* <div className="text-center">
              <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#addPetModal">Add Pet</button>
            </div> */}
            <div className="pet-list">
              <div className="row gy-2">
                {loading ? <h1 className="text-center">Loading Pet Selection...</h1> : pets.map(p => (
                <div key={p.id} className="col-md-4">
                  <div className="pet-card p-1">
                    <h6 className="text-center">{p.name}</h6>
                    <img src={p.imgUrl} alt="" />
                    <p className="text-capitalize text-center">Age: {p.age}</p>
                    <p className="text-capitalize text-center">Status: {p.status}</p>
                    <div className="d-flex align-items-center">
                      <img className="creator-picture" src={p.creator.picture} alt={p.creator.picture} />
                      <p className="m-0">{p.creator.name}</p>
                  </div>
                  </div>
                </div>
              ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <ModalWrapper modalId="addPetModal">
        <AddPet />
      </ModalWrapper>
    </>
  )
}