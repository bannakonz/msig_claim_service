// [REST] motorRoutes.searchPlanMotor
export const encryptedSearchPlanMotorPayload = ['contactFirstName', 'contactLastName', 'contactMobile'];

// [REST] msigRoutes.ocrIDCard
export const encryptedOcrIDCard = ['idcard', 'firstName', 'lastName', 'dob', 'address'];

// [REST] msigRoutes.ocrCarRegistration
export const encryptedOcrCarRegistration = ['chassisNo', 'licensePlate', 'licensePlatePrefix', 'licensePlateSuffix'];

// [REST] motorRoutes.saveMotorApplicationForm / motorRoutes.getReqMotor
export const encryptedGetReqMotorHandlerResponse = [
  'firstName',
  'lastName',
  'dob',
  'citizenId',
  'lineId',
  'address',
  'addressMore',
  'mobileNo',
  'email',

  'addressShipping',
  'addressMoreShipping',
  'beneficiaryName',
  'chassisNo',
  'licensePlateNoPrefix',
  'licensePlateNoSuffix',
  'licensePlateNo',

  'chassisNoCMI',
];

//[REST] travelRoutes.saveTAApplicationForm / travelRoutes.getReqTA
export const encryptedSaveTAApplicationPayload = [
  'instituteName',
  'addressInstitute',
  'addressInstituteMore',
  'citizenId',
  'firstName',
  'lastName',
  'dob',
  'mobileNo',
  'email',
  'beneficiaryFullName',
  'lineId',
  'address',
  'addressMore',
  'firstNameEn',
  'lastNameEn',
  'companyName',
  'taxId',
  'branchNo',
  'addressReceipt',
  'addressReceiptMore',
  'addressShipping',
  'addressMoreShipping',
];
