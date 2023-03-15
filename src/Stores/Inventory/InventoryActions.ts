import { ValuableResponse } from "../../Models/Inventory/Data/ValuableResponse";
import { Valuable } from "../../Models/Inventory/Domain/Valuable";
import { NetworkClientService } from "../../Services/NetworkClientService/NetworkClientService";

export const getValuables = async (
  clientService: NetworkClientService
): Promise<Valuable[]> => {
  const valuablesResponse = await clientService.getInventory();
  return valuablesResponse.data.map((valuableResponse: any) =>
    valuableAdapter(valuableResponse)
  );
};

export const addValuable = (
  valuables: Valuable[],
  purchasePrice: number,
  name: string,
  photo: string,
  description?: string
): Valuable => {
  const id =
    valuables.length === 0
      ? 1
      : Math.max(...valuables.map((valuable) => valuable.id)) + 1;

  return { purchasePrice, name, photo, description, id };
};

export const removeValuable = (
  valuables: Valuable[],
  id: number
): Valuable[] => {
  return valuables.filter((valuable) => valuable.id !== id);
};

const valuableAdapter = (valuable: ValuableResponse): Valuable => {
  return {
    purchasePrice: valuable.purchasePrice,
    description: valuable.description,
    photo: valuable.photo,
    name: valuable.name,
    id: valuable.id,
  };
};
