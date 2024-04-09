import { UTM_SOURCE_CODE } from './products';

export default {
  home: `/${UTM_SOURCE_CODE}`,
  ta: {
    home: `/${UTM_SOURCE_CODE}/travel`,
    selectPlan: '/travel/select-plan',
    selectPlanAddon: '/travel/select-plan/addon',
    oversea: `/${UTM_SOURCE_CODE}/travel/oversea_student`,
    fullPack: `/${UTM_SOURCE_CODE}/travel/traveleasy_fullpack`,
    tripEasy: `/${UTM_SOURCE_CODE}/travel/tripeasy`,
    fillInformation: {
      oversea: '/travel/fill-info/student-oversea',
      fullPack: '/travel/fill-info/international',
      tripEasy: '/travel/fill-info/domestic',
    },
    checkout: '/travel/checkout',
    checkoutSuccess: '/travel/checkout/success',
    checkoutFail: '/travel/checkout/fail',
  },
  motor: {
    home: `/${UTM_SOURCE_CODE}/motor`,
    searchPlan: `/${UTM_SOURCE_CODE}/motor/search-plan`,
    selectPlan: '/motor/select-plan',
    comparePlan: '/motor/compare-plan',
    fillInformation: '/motor/fill-info',
    checkout: '/motor/checkout',
    checkoutPending: '/motor/checkout/pending',
    checkoutSuccess: '/motor/checkout/success',
    checkoutFail: '/motor/checkout/fail',
    productPlanDetail: '/motor/product-plan-detail',
  },
  contactSpecialist: {
    main: '/contact-specialist',
    success: '/contact-specialist/success',
  },
  satisfactionSurvey: {
    main: '/satisfaction-survey',
    success: '/satisfaction-survey/success',
  },
  except: '/except',
  contactUs: '/contact-us',
  faq: '/faq',
};
