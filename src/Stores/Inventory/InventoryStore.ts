import { create } from "zustand";

import {
  addValuableAction,
  getValuablesAction,
  removeValuableAction,
} from "./InventoryActions";
import { Valuable } from "../../Models/Inventory/Domain/Valuable";
import { DeviceService } from "../../Services/DeviceService/DeviceService";

export interface InventoryState {
  valuables: Valuable[];
  getValuables: () => void;
  addValuable: (
    purchasePrice: number,
    name: string,
    photo: string,
    description?: string
  ) => void;
  removeValuable: (id: number) => void;
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
      return {
        ...state,
        valuables: state.valuables.concat(
          addValuableAction(
            state.valuables,
            purchasePrice,
            name,
            photo,
            description
          )
        ),
      };
    }),
  removeValuable: (id: number) =>
    set((state) => {
      return {
        ...state,
        valuables: removeValuableAction(state.valuables, id),
      };
    }),
}));
