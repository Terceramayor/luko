import axios, { AxiosInstance } from "axios";

import { NetworkClientService } from "./NetworkClientService";
import { ValuablesResponse } from "../../Models/Inventory/Data/ValuableResponse";

const MOCKY_ENDPOINT = {
  BASE_URL: "https://run.mocky.io/v3",
  URL: "/9bfddbd2-2151-49be-a696-a7d2819b0f5f",
};

export class AxiosNetworkClientService implements NetworkClientService {
  private static instance: NetworkClientService;
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: MOCKY_ENDPOINT.BASE_URL,
    });
  }

  public static getInstance(): NetworkClientService {
    if (!AxiosNetworkClientService.instance) {
      AxiosNetworkClientService.instance = new AxiosNetworkClientService();
    }
    return AxiosNetworkClientService.instance;
  }

  public async getInventory(): Promise<ValuablesResponse> {
    const { data } = await this.axiosInstance.get<ValuablesResponse>(
      MOCKY_ENDPOINT.URL
    );
    return data;
  }
}
