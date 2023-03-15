import { IMock, Mock, Times } from "typemoq";

import { addValuable, getValuables, removeValuable } from "./InventoryActions";
import { ValuablesResponse } from "../../Models/Inventory/Data/ValuableResponse";
import { Valuable } from "../../Models/Inventory/Domain/Valuable";
import { NetworkClientService } from "../../Services/NetworkClientService/NetworkClientService";

describe("Given the inventory store actions", () => {
  let axiosNetworkClientService: IMock<NetworkClientService>;
  beforeEach(() => {
    axiosNetworkClientService = Mock.ofType<NetworkClientService>();
  });
  describe("Given the getValuablesAction action ", () => {
    describe("When invoked for a valid response of valuables", () => {
      it("It should return a correctly adapted response", async () => {
        axiosNetworkClientService
          .setup((it) => it.getInventory())
          .returns(() => Promise.resolve(aListOfValuablesResponse));
        const response = await getValuables(axiosNetworkClientService.object);
        expect(response).toEqual(aListOfValuables);
      });
    });
    describe("When invoked for a valid empty response of valuables", () => {
      it("It should return a correctly adapted response", async () => {
        axiosNetworkClientService
          .setup((it) => it.getInventory())
          .returns(() => Promise.resolve(anEmptyListValuablesResponse));
        const response = await getValuables(axiosNetworkClientService.object);
        expect(response).toEqual([]);
      });
    });
  });
  describe("Given the addValuableAction action", () => {
    describe("When  invoked and the valuables list is not empty", () => {
      it("The new valuable should be created correctly ", () => {
        const newValuable = addValuable(
          aListOfValuables,
          aNewValuable.purchasePrice,
          aNewValuable.name,
          aNewValuable.photo
        );
        expect(newValuable).toEqual({ ...aNewValuable, id: 3 });
      });
    });
    describe("When  invoked and the valuables list is empty", () => {
      it("The new valuable should be created correctly", () => {
        const newValuable = addValuable(
          [],
          aNewValuable.purchasePrice,
          aNewValuable.name,
          aNewValuable.photo
        );
        expect(newValuable).toEqual({ ...aNewValuable, id: 1 });
      });
    });
  });
  describe("Given the removeValuableAction action", () => {
    describe("When invoked for an existing id", () => {
      it("THe correct valuable should be filtered out", () => {
        const updatedValuables = removeValuable(aListOfValuables, 1);
        expect(updatedValuables).toEqual([aListOfValuables[1]]);
      });
    });
  });
});

const anEmptyListValuablesResponse: ValuablesResponse = { data: [] };

const aListOfValuablesResponse: ValuablesResponse = {
  data: [
    {
      id: 1,
      name: "Cartier ring",
      purchasePrice: 5780,
      type: "JEWELRY",
      description: "Gift from my grandfather",
      photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
    },
    {
      id: 2,
      name: "Guitar",
      purchasePrice: 850,
      type: "MUSIC_INSTRUMENT",
      photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
    },
  ],
};

const aListOfValuables: Valuable[] = [
  {
    id: 1,
    name: "Cartier ring",
    purchasePrice: 5780,
    description: "Gift from my grandfather",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
    id: 2,
    name: "Guitar",
    purchasePrice: 850,
    photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
    description: undefined,
  },
];

const aNewValuable = {
  name: "Cartier ring",
  purchasePrice: 5780,
  photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
};
