import { dataBaseUrl, dataRoutes } from '@/constants/apiRoutes';
import { get as getHelper, post as postHelper } from '../apiCallHelper';
import { MSIGResponse } from '../clients';
import { IExchange, IExchangePayload } from './@types';

const get = <T>({ url, headers }: { url: string; headers?: any }) =>
  getHelper<MSIGResponse<T>>({ url: dataBaseUrl + url, headers });
const post = <T>({ url, payload }: { url: string; payload?: any }) =>
  postHelper<MSIGResponse<T>>({ url: dataBaseUrl + url, payload });

export const exchange = async (payload: IExchangePayload) => {
  const result = await post<IExchange[]>({
    url: dataRoutes.exchange,
    payload,
  });

  return result;
};
