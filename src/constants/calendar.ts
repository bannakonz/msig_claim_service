const getMonthLengths = (isLeap: boolean) => {
  return [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
};
const isLeap = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
const getLeaps = (currentYear: number) => {
  if (currentYear === 0) return;

  let year = currentYear > 0 ? 1 : -1;

  let leaps = [],
    condition = () => (currentYear > 0 ? year <= currentYear : currentYear <= year),
    increase = () => (currentYear > 0 ? year++ : year--);

  while (condition()) {
    if (isLeap(year)) leaps.push(year);

    increase();
  }

  return leaps;
};
const getDayOfYear = ({ year, month, day }: { year: any; month: any; day: any }) => {
  let monthLengths = getMonthLengths(isLeap(year));

  for (let i = 0; i < month.index; i++) {
    day += monthLengths[i];
  }
  return day;
};

const getAllDays = (date: any) => {
  const { year } = date;

  return 365 * (year - 1) + leapsLength(year) + getDayOfYear(date);
};

const leapsLength = (year: number) => {
  return (((year - 1) / 4) | 0) + (-((year - 1) / 100) | 0) + (((year - 1) / 400) | 0);
};
const guessYear = (days: number, currentYear: number) => {
  let year = ~~(days / 365.24);

  return year + (currentYear > 0 ? 1 : -1);
};

export const thai = {
  name: 'thai',
  startYear: 1,
  yearLength: 365,
  epoch: 1523097,
  century: 25,
  weekStartDayIndex: 1,
  getMonthLengths(isLeap: boolean) {
    return [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  },
  isLeap(year: number) {
    return (year % 4 === 3 && year % 100 !== 99) || year % 400 === 399;
  },
  getLeaps(currentYear: number) {
    if (currentYear === 0) return;

    let year = currentYear > 0 ? 1 : -1;

    let leaps = [],
      condition = () => (currentYear > 0 ? year <= currentYear : currentYear <= year),
      increase = () => (currentYear > 0 ? year++ : year--);

    while (condition()) {
      if (this.isLeap(year)) leaps.push(year);

      increase();
    }

    return leaps;
  },
  getDayOfYear({ year, month, day }: { year: any; month: any; day: any }) {
    let monthLengths = this.getMonthLengths(this.isLeap(year));

    for (let i = 0; i < month.index; i++) {
      day += monthLengths[i];
    }

    return day;
  },
  getAllDays(date: any) {
    const { year } = date;

    return this.yearLength * (year - 1) + this.leapsLength(year) + this.getDayOfYear(date);
  },
  leapsLength(year: number) {
    return ((year / 4) | 0) + (-(year / 100) | 0) + ((year / 400) | 0);
  },
  guessYear(days: number, currentYear: number) {
    let year = ~~(days / 365.24);

    return year + (currentYear > 0 ? 1 : -1);
  },
};

export const en = {
  name: 'eng',
  startYear: 1,
  yearLength: 365,
  epoch: 1523097,
  century: 25,
  weekStartDayIndex: 1,
  getMonthLengths,
  isLeap,
  getLeaps,
  guessYear,
  getAllDays,
};

export const locale_th = {
  name: 'thai_th',
  yearLength: 365,
  months: [
    ['มกราคม', 'ม.ค.'],
    ['กุมภาพันธ์', 'ก.พ.'],
    ['มีนาคม', 'มี.ค.'],
    ['เมษายน', 'เม.ย.'],
    ['พฤษภาคม', 'พ.ค.'],
    ['มิถุนายน', 'มิ.ย.'],
    ['กรกฎาคม', 'ก.ค.'],
    ['สิงหาคม', 'ส.ค.'],
    ['กันยายน', 'ก.ย.'],
    ['ตุลาคม', 'ต.ค.'],
    ['พฤศจิกายน', 'พ.ย.'],
    ['ธันวาคม', 'ธ.ค.'],
  ],
  weekDays: [
    ['วันเสาร์', 'ส'],
    ['วันอาทิตย์', 'อา'],
    ['วันจันทร์', 'จ'],
    ['วันอังคาร', 'อ'],
    ['วันพุธ', 'พ'],
    ['วันพฤหัส', 'พฤ'],
    ['วันศุกร์', 'ศ'],
  ],
  digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  meridiems: [
    ['ก่อนเที่ยง', 'เอเอ็ม'],
    ['หลังเที่ยง', 'พีเอ็ม'],
  ],
};

export const locale_en = {
  name: 'english_en',
  yearLength: 365,
  months: [
    ['JANUARY', 'JAN.'],
    ['FEBRUARY', 'FEB.'],
    ['MARCH', 'MAR.'],
    ['APRIL', 'APR.'],
    ['MAY', 'MAY.'],
    ['JUNE', 'JUN.'],
    ['JULY', 'JUL.'],
    ['AUGUST', 'AUG.'],
    ['SEPTEMBER', 'SEP.'],
    ['OCTOBER', 'OCT.'],
    ['NOVEMBER', 'NOV.'],
    ['DECEMBER', 'DEC.'],
  ],
  weekDays: [
    ['SATURDAY', 'S'],
    ['SUNDAY', 'S'],
    ['MONDAY', 'M'],
    ['TUESDAY', 'T'],
    ['WEDNESDAY', 'W'],
    ['THURSDAY', 'TH'],
    ['FRIDAY', 'F'],
  ],
  digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  meridiems: [
    ['AM', 'am'],
    ['PM', 'pm'],
  ],
};
