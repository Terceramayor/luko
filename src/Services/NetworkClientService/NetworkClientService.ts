import { ValuablesResponse } from "../../Models/Inventory/Data/ValuableResponse";

export interface NetworkClientService {
  getInventory(): Promise<ValuablesResponse>;
}
