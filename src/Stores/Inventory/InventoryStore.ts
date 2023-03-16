import { create } from "zustand";

import { addValuable, getValuables, removeValuable } from "./InventoryActions";
import { Valuable } from "../../Models/Inventory/Domain/Valuable";
import { AxiosNetworkClientService } from "../../Services/NetworkClientService/AxiosNetworkClientService";

export interface InventoryState {
  valuables: Valuable[];
  getValuablesAction: () => void;
  addValuableAction: (
    purchasePrice: number,
    name: string,
    photo: string,
    description?: string
  ) => void;
  removeValuableAction: (id: number) => void;
}

export const useInventoryStore = create<InventoryState>((set) => ({
  valuables: [],
  getValuablesAction: async () => {
    const valuables = await getValuables(
      AxiosNetworkClientService.getInstance()
    );
    return set((state) => {
      return { ...state, valuables };
    });
  },
  addValuableAction: (
    purchasePrice: number,
    name: string,
    photo: string,
    description?: string
  ) =>
    set((state) => {
      return {
        ...state,
        valuables: state.valuables.concat(
          addValuable(state.valuables, purchasePrice, name, photo, description)
        ),
      };
    }),
  removeValuableAction: (id: number) =>
    set((state) => {
      return {
        ...state,
        valuables: removeValuable(state.valuables, id),
      };
    }),
}));
