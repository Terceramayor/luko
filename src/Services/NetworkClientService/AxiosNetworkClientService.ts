import axios, { AxiosInstance } from "axios";

import { NetworkClientService } from "./NetworkClientService";
import { getValuablesResponse } from "../../Models/Inventory/Data/ValuableResponse";

export class AxiosNetworkClientService implements NetworkClientService {
  private static instance: NetworkClientService;
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://run.mocky.io/v3",
    });
  }

  public static getInstance(): NetworkClientService {
    if (!AxiosNetworkClientService.instance) {
      AxiosNetworkClientService.instance = new AxiosNetworkClientService();
    }
    return AxiosNetworkClientService.instance;
  }

  public async getInventory(): Promise<getValuablesResponse> {
    const { data } = await this.axiosInstance.get<getValuablesResponse>(
      "/9bfddbd2-2151-49be-a696-a7d2819b0f5f"
    );
    return data;
  }
}
