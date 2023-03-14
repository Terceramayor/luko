import { create } from "zustand";

import { getValuablesAction } from "./InventoryActions";
import { Valuable } from "../../Models/Inventory/Domain/Valuable";

export interface InventoryState {
  valuables: Valuable[];
  getValuables: () => void;
}

export const useInventoryStore = create<InventoryState>((set) => ({
  valuables: [],
  getValuables: async () => {
    const valuables = await getValuablesAction();
    set({ ...set, valuables });
  },
}));
