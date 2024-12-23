import { AppState } from "../AppState";
import { PetCreationObj } from "../components/AddPet";
import { Pet } from "../models/Pet";
import { api } from "./AxiosService";

class PetsService {
  async createPet(petData: PetCreationObj) {
    const response = await api.post('api/pets', petData);
    console.log(response.data);
  }

  async getPets() {
    const response = await api.get('api/pets');
    AppState.pets = response.data.map((p: Pet) => new Pet(p));
  }
}

export const petsService = new PetsService();