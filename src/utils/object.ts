// import { TInputOptions } from '@/components/common/input/InputSelect';

export type FromEntries<T> = { [_ in keyof T]: string };

export const isObjEmpty = (obj: any) => {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
};

/** map any array object to TInputOptions { label: string | ReactNode; value: string }[] */
// export const mapArrObjToSelectOptions = (labelKey: string, valueKey: string, items?: any[]): TInputOptions =>
//   items?.map((item) => ({
//     value: item[valueKey],
//     label: item[labelKey],
//   })) || [];

export const mapArrObjToListStripedItem = (titleKey: string, valueKey: string, items?: any[]) =>
  items?.map((item) => ({
    value: item[valueKey],
    title: item[titleKey],
  }));

export const convertNullToEmptyString = (obj: any) => {
  return removeNullFromJson(obj, {});
};

const replaceNull = (value: any) => {
  return value == null ? '' : value;
};

//Parse Json and check for null
const removeNullFromJson = (obj: any, jsonObj: any) => {
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      jsonObj[key] = [];
      for (let i = 0; i < value.length; i++) {
        jsonObj[key].push(removeNullFromJson(value[i], {}));
      }
    } else if (typeof value == 'object' && value != null) {
      jsonObj[key] = removeNullFromJson(value, {});
    } else {
      jsonObj[key] = replaceNull(value);
    }
  }
  return jsonObj;
};

export const pickPropertiesByKeys = (keys: string[], obj: any) => {
  return keys.reduce((result: any, key) => {
    result[key] = obj[key];
    return result;
  }, {});
};

export const omitPropertiesByKeys = (keys: string[], obj: any) => {
  const result = { ...obj };
  keys.forEach(function (key) {
    delete result[key];
  });
  return result;
};

export const nestedSet = (obj: any = {}, key: string, val: any) => {
  const cloned = structuredClone(obj);
  const keys = key.split('.');
  const last = keys.pop() || '';
  keys.reduce((o, k) => (o[k] ??= {}), cloned)[last] = val;

  return cloned;
};

export const getValueByPath = (object: any, path?: string) => {
  if (!path) return '';
  return path.split('.').reduce((acc, curr) => acc?.[curr], object);
};

export const getDefaultValue = <T extends object>(schema: T, init?: any) => {
  return Object.fromEntries(
    Object.entries(schema).map(([key, _]) => [key, init && init[key] !== undefined ? init[key] : ''])
  ) as FromEntries<T>;
};

/*
 * @param object: object to change value
 * @param key: key to change value
 * @param callback: callback function to change value
 * @return new object with changed value
 * @example decrypt value by key
 * case use in getSeverSideProps
 * add ctx to params decrypt function
 * const decrypted = changeValueByKey<IFaqLists>(data, 'answer', async (value: string) => await decrypt(value, ctx));
 */

export const changeValueByKey = async <T>(object: T, key: any, callback: any) => {
  const newValue = Object.assign({}, object) as T;

  for (const i in newValue) {
    if (key.includes(i)) {
      newValue[i] = (await callback(newValue[i])) || '';
    }
  }
  return newValue as T;
};
