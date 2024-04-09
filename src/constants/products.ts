import config from '@/config';
import { getUtmSourceCode } from '@/utils/utmSourceCode';

export let UTM_SOURCE_CODE = getUtmSourceCode();

export const INSURANCE_PRODUCT_CODE = {
  MOTOR: 'MOTOR',
  TA: 'TRAVEL',
};

export const MOTOR_INFO_FORM_STEPS = {
  PERSONAL_INFO: {
    step: 1,
    path: 'personal',
  },
  MOTOR_INFO: {
    step: 2,
    path: 'motor',
  },
  CHECKOUT: {
    step: 3,
  },
};

export const NATIONALITY_CODE = {
  THAI: 'THB',
};

export const CONSENT_PAGE = {
  SEARCH: 'Search',
  BUY_INSURANCE: 'BuyInsurance',
};

export const TA_PACKAGE_HIGHLIGHT_SHORT_NAME = {
  TRIP_EASY: 'tripeasy',
  TRIP_EASY_FULL_PACK: 'traveleasy_fullpack',
  OVERSEA: 'oversea_student',
};

export const TA_TRIP_TYPE = {
  SINGLE: 'SingleTrip',
  ANNUAL: 'AnnualTrip',
  OVERSEA: 'Oversea',
};

export const TRAVEL_TYPE = {
  INTER: 'international',
  DOMESTIC: 'domestic',
};
