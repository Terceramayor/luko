import { getValuablesResponse } from "../../Models/Inventory/Data/ValuableResponse";

export interface NetworkClientService {
  getInventory(): Promise<getValuablesResponse>;
}
