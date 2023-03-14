import { ValuableResponse } from "../../Models/Inventory/Data/ValuableResponse";

export interface NetworkClientService {
  getInventory(): Promise<ValuableResponse[]>;
}
