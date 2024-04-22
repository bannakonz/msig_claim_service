import { MSIGResponse } from '@/apis/clients';
import {} from '@/apis/data/@types';
import { dataRoutes } from '@/constants/apiRoutes';
import { dataClient } from '../constants/msigConnector';
import { TRequestHelperContext, requestHelper } from './helper';

const client = requestHelper(dataClient);

export const postExchangeHandler = async (req: TRequestHelperContext) => {
  const { data } = await client(req).post<MSIGResponse<any>>(`/${dataRoutes.exchange}`);

  return data;
};
