import service from ".";
import type { AxiosResponse } from "axios";
import type { theCatType } from "@/@types/api";

export const getTheCat = async (): Promise<AxiosResponse<theCatType>> => {
  const response: AxiosResponse = await service.get(
    `https://api.thecatapi.com/v1/images/search?size=full?api_key=${
      import.meta.env.VITE_CAT_SECRET
    }`,
  );

  return response;
};
