export enum RequestMode {
  REQUEST = "request",
  RESEND = "resend",
}

export enum RequestType {
  REQUEST_ORDER = "reqOrder",
  LOGIN = "login",
  UPLOAD_DOC = "uploadDocument",
}

export type TRequestOTPPayload = {
  utmSourceCode: string;
  mobile: string;
  mode: RequestMode;
  requestType: RequestType;
  reqOrderNo: string;
  idCard?: string;
  recaptchaToken?: string;
  data1: string;
};

export interface IRequestOTP {
  otpTrxNo: string;
  mobile: string;
  refNo: string;
  otpExpiredMinute: number;
  otpExpiredDateTime: Date;
  otpResendTime: number;
}

export type TVerifyOTPPayload = {
  otpTrxNo: string;
  refNo: string;
  otp: string;
};

export interface IVerifyOTP {
  responseCode: number;
  errorMessage: string;
  OTPErrorCode: string;
}
