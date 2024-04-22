import { MSIGResponse } from '@/apis/clients';
import { IRequestOTP, IVerifyOTP } from '@/apis/msig/@types';
import { msigRoutes } from '@/constants/apiRoutes';
import { msigClient } from '../constants/msigConnector';
import { requestHelper, TRequestHelperContext } from './helper';

const client = requestHelper(msigClient);

export const postRequestOTPHandler = async (req: TRequestHelperContext) => {
  const { data } = await client(req).post<MSIGResponse<IRequestOTP>>(`/${msigRoutes.requestOTP}`);
  return data;
};

export const postVerifyOTPHandler = async (req: TRequestHelperContext) => {
  const { data } = await client(req).post<MSIGResponse<IVerifyOTP>>(`/${msigRoutes.verifyOTP}`);

  return data;
};
