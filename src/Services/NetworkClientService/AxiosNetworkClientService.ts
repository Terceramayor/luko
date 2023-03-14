import axios, { AxiosInstance } from "axios";

import { NetworkClientService } from "./NetworkClientService";
import { ValuableResponse } from "../../Models/Inventory/Data/ValuableResponse";

class AxiosNetworkClientService implements NetworkClientService {
  private static instance: AxiosNetworkClientService;
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://api.example.com",
    });
  }

  public static getInstance(): AxiosNetworkClientService {
    if (!AxiosNetworkClientService.instance) {
      AxiosNetworkClientService.instance = new AxiosNetworkClientService();
    }
    return AxiosNetworkClientService.instance;
  }

  public async getInventory(): Promise<ValuableResponse[]> {
    const response = await this.axiosInstance.get<ValuableResponse[]>(
      "/valuables"
    );
    return response.data;
  }
}

export default AxiosNetworkClientService.getInstance();
