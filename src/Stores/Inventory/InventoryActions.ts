import { ValuableResponse } from "../../Models/Inventory/Data/ValuableResponse";
import { Valuable } from "../../Models/Inventory/Domain/Valuable";
import { AxiosNetworkClientService } from "../../Services/NetworkClientService/AxiosNetworkClientService";

export const getValuablesAction = async (
  clientService = AxiosNetworkClientService
): Promise<Valuable[]> => {
  const valuablesResponse = await clientService.getInstance().getInventory();
  return valuablesResponse.data.map((valuableResponse) =>
    valuableAdapter(valuableResponse)
  );
};

export const addValuableAction = (
  valuables: Valuable[],
  purchasePrice: number,
  name: string,
  photo: string,
  description?: string
): Valuable => {
  const id =
    valuables.length === 0
      ? 0
      : Math.max(...valuables.map((valuable) => valuable.id)) + 1;

  return { purchasePrice, name, photo, description, id };
};

export const removeValuableAction = (
  valuables: Valuable[],
  id: number
): Valuable[] => {
  console.log("removing", id);
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
