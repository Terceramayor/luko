export interface ValuablesResponse {
  data: ValuableResponse[];
}

export interface ValuableResponse {
  id: number;
  name: string;
  purchasePrice: number;
  type: string;
  description?: string;
  photo: string;
}
