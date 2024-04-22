import { getCookie, setCookie } from 'cookies-next';

import { DEFAULT_LANG, LANG_COOKIE_KEY, SUPPORTED_LANGS } from '@/constants/i18n';
import { GetServerSidePropsContext } from 'next';

export type TLocale = (typeof SUPPORTED_LANGS)[number];

export const setLocale = (locale: TLocale) => {
  setCookie(LANG_COOKIE_KEY, locale);
};

export const getLocale = (ctx?: any) => {
  const cookieLanguage = getCookie(LANG_COOKIE_KEY, ctx);

  const hasValidCookieLang =
    cookieLanguage && typeof cookieLanguage === 'string' && SUPPORTED_LANGS.includes(cookieLanguage as any);

  if (hasValidCookieLang) {
    return cookieLanguage;
  }

  setCookie(LANG_COOKIE_KEY, DEFAULT_LANG, { ...ctx });
  return DEFAULT_LANG;
};

export const getLocaleProps = async (ctx: GetServerSidePropsContext) => {
  const locale = getLocale(ctx);

  return {
    props: { messages: (await import(`@/locales/${locale}.json`)).default, locale },
  };
};
