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
  purchasePrice: number,
  name: string,
  photo: string,
  description?: string
): Valuable => {
  console.log("addValuableAction");

  return { purchasePrice, name, photo, description };
};

const valuableAdapter = (valuable: ValuableResponse): Valuable => {
  return {
    purchasePrice: valuable.purchasePrice,
    description: valuable.description,
    photo: valuable.photo,
    name: valuable.name,
  };
};
