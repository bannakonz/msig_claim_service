import { msigRoutes } from '@/constants/apiRoutes';
import makeHandler from '@/libs/makeHandler';
import { postRequestOTPHandler, postVerifyOTPHandler } from '@/libs/msig/msig.handler';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
};

export default makeHandler([
  {
    method: 'POST',
    path: msigRoutes.requestOTP,
    handler: async (req, res) => res.send(await postRequestOTPHandler(req)),
  },
  {
    method: 'POST',
    path: msigRoutes.verifyOTP,
    handler: async (req, res) => res.send(await postVerifyOTPHandler(req)),
  },
]);
