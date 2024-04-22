import { msigBaseUrl, msigRoutes } from '@/constants/apiRoutes';
import { post as postHelper } from '../apiCallHelper';
import { MSIGResponse } from '../clients';
import { IRequestOTP, IVerifyOTP, TRequestOTPPayload, TVerifyOTPPayload } from './@types';

const post = <T>({ url, payload }: { url: string; payload?: any }) =>
  postHelper<MSIGResponse<T>>({ url: msigBaseUrl + url, payload });

export const postRequestOTP = async (payload: TRequestOTPPayload) => {
  const { data, errorMessage } = await post<IRequestOTP>({ url: msigRoutes.requestOTP, payload });

  return { data, errorMessage };
};

export const postVerifyOTP = async (payload: TVerifyOTPPayload) => {
  const data = await post<IVerifyOTP>({ url: msigRoutes.verifyOTP, payload });

  return data as IVerifyOTP;
};
