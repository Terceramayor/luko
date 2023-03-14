import { create } from "zustand";

import { addValuableAction, getValuablesAction } from "./InventoryActions";
import { Valuable } from "../../Models/Inventory/Domain/Valuable";

export interface InventoryState {
  valuables: Valuable[];
  getValuables: () => void;
  addValuable: (
    purchasePrice: number,
    name: string,
    photo: string,
    description?: string
  ) => void;
}

export const useInventoryStore = create<InventoryState>((set) => ({
  valuables: [],
  getValuables: async () => {
    const valuables = await getValuablesAction();
    return set((state) => {
      return { ...state, valuables };
    });
  },
  addValuable: (
    purchasePrice: number,
    name: string,
    photo: string,
    description?: string
  ) =>
    set((state) => {
      console.log("addValuable");
      return {
        ...state,
        valuables: state.valuables.concat(
          addValuableAction(purchasePrice, name, photo, description)
        ),
      };
    }),
}));
