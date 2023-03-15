import { Valuable } from "../Models/Inventory/Domain/Valuable";

export const calculateTotalValue = (valuables: Valuable[]): number => {
  return valuables.reduce((value, valuable) => {
    return value + valuable.purchasePrice;
  }, 0);
};
