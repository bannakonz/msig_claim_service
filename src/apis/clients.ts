import config from '@/config';
import axios from 'axios';

export interface MSIGResponse<T> {
  responseCode: number;
  errorMessage: string;
  OTPErrorCode?: string;
  displayErrorMessage?: string;
  data: T;
}

const msigClient = axios.create({
  baseURL: `${config.publicApi}/api`,
});

msigClient.interceptors.response.use(
  (response) => {
    // show error modal by document id
    if (response.data?.responseCode === 400 && response.data?.displayErrorMessage) {
      const doc1 = document.getElementById('modal-error');
      const message = document.getElementById('modal-error-message');
      const bodyHtml = document.getElementsByTagName('body')[0];
      if (message !== null && doc1 !== null && bodyHtml !== null) {
        doc1?.setAttribute('style', 'display:block');
        bodyHtml.setAttribute('style', 'overflow:hidden');
        message.innerHTML = response.data?.displayErrorMessage;
      }
    }
    return response;
  },
  (error) => {
    console.error({
      url: error.config?.url,
      body: error.config?.data,
      data: error.response?.data,
    });
  }
);

export { msigClient };
