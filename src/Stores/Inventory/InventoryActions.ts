import { ValuableResponse } from "../../Models/Inventory/Data/ValuableResponse";
import { Valuable } from "../../Models/Inventory/Domain/Valuable";
import { AxiosNetworkClientService } from "../../Services/NetworkClientService/AxiosNetworkClientService";

export const getValuablesAction = async (
  clientService = AxiosNetworkClientService
): Promise<Valuable[]> => {
  const valuablesResponse = await clientService.getInstance().getInventory();
  const valuablesAdapted = valuablesResponse.data.map((valuableResponse) =>
    valuableAdapter(valuableResponse)
  );
  return valuablesAdapted;
};

const valuableAdapter = (valuable: ValuableResponse): Valuable => {
  return {
    purchasePrice: valuable.purchasePrice,
    description: valuable.description,
    photo: valuable.photo,
  };
};
