import { dataRoutes } from '@/constants/apiRoutes';
import makeHandler from '@/libs/makeHandler';
import { postExchangeHandler } from '@/libs/msig/data.handler';

export default makeHandler([
  {
    method: 'POST',
    path: dataRoutes.exchange,
    handler: async (req, res) => res.send(await postExchangeHandler(req)),
  },
]);
