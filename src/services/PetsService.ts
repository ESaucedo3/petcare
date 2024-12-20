import { AppState } from "../AppState";
import { Pet } from "../models/Pet";
import { api } from "./AxiosService";

class PetsService {
  async getPets() {
    const response = await api.get('api/pets');
    AppState.pets = response.data.map((p: Pet) => new Pet(p));
  }
  
}

export const petsService = new PetsService();