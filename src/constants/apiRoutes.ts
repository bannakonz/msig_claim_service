export const dataBaseUrl = '/data/';
export const motorBaseUrl = '/motor/';
export const dropleadBaseUrl = '/droplead/';
export const msigBaseUrl = '/msig/';
export const paymentBaseUrl = '/payment/';
export const ratingBaseUrl = '/rating/';
export const searchBaseUrl = '/search/';
export const recaptchaBaseUrl = '/recaptcha/';
export const travelBaseUrl = '/travel/';

export const dataRoutes = {
  getTitleName: 'getTitleName',
  getNationality: 'getNationality',
  getCarColor: 'getCarColor',
  menuGroupLists: 'menuGroupLists',
  bannerLists: 'bannerLists',
  bannerProductLists: 'bannerProductLists',
  bannerSearchProduct: 'bannerSearchProduct',
  motorList: 'motorList',
  addressLists: 'addressLists',
  getCarRegisterType: 'getCarRegisterType',
  productTypeList: 'productTypeLists',
  packageHighlightLists: 'packageHighlightLists',
  packageTAHighlightLists: 'packageTAHighlightLists',
  productHighlightLists: 'productHighlightLists',
  productTAHighlightLists: 'productTAHighlightLists',
  packageHighlightDetail: 'packageHighlightDetail',
  promotionLists: 'promotionLists',
  faqLists: 'faqLists',
  seoLists: 'seoLists',
  insIconProductLists: 'insIconProductLists',
  packageRecommendLists: 'packageRecommendLists',
  contact: 'contact',
  filterLists: 'filterLists',
  packageWarranty: 'packageWarranty',
  getCountry: 'countryList',
  contactusDetail: 'contactusDetail',
  consentList: 'consentList',
  exchange: 'exchange',
  getRelationship: 'getRelationship',
  scriptTracking: 'scriptTracking',
  verifyPromoCode: 'verifyPromoCode',
  removePromoCode: 'removePromoCode',
};

export const motorRoutes = {
  searchPlanMotor: 'searchPlanMotor',
  filterPlanMotor: 'filterPlanMotor',
  comparePlanMotor: 'comparePlanMotor',
  saveMotorApplicationForm: 'saveMotorApplicationForm',
  getReqMotor: 'getReqMotor',
  getPlanMotorDetail: 'getPlanMotorDetail',
  paymentMotorSuccess: 'paymentMotorSuccess',
  getSearchIdMotor: 'getSearchIdMotor',
};

export const paymentRoutes = {
  paymentToken: 'paymentToken',
  paymentInquiry: 'paymentInquiry',
  paymentReceive: 'paymentReceive',
  paymentCreateLog: 'paymentCreateLog',
};

export const ratingRoutes = {
  sendRating: 'sendRating',
  getRating: 'getRating',
  ratingList: 'ratingList',
};

export const searchRoutes = {
  getPlanMotorDetail: 'getPlanMotorDetail',
};

export const msigRoutes = {
  ocrIDCard: 'ocrIDCard',
  ocrCarRegistration: 'ocrCarRegistration',
  requestOTP: 'requestOTP',
  verifyOTP: 'verifyOTP',
};

export const recaptchaRoutes = {
  siteverify: 'siteverify',
};

export const travelRoutes = {
  travelList: 'travelList',
  searchPlanTA: 'searchPlanTA',
  getPlanTADetail: 'getPlanTADetail',
  searchPlanTAAddOn: 'searchPlanTAAddOn',
  filterPlanTA: 'filterPlanTA',
  saveTAApplicationForm: 'saveTAApplicationForm',
  getReqTA: 'getReqTA',
  paymentTASuccess: 'paymentTASuccess',
  destinationRoute: 'destinationRoute',
  calendarAge: 'calendarAge',
};
