const ICONS = {
  radioChecked: 'radio_button_checked.svg',
  radioUnChecked: 'radio_button_unchecked.svg',
  logo: 'logo.svg',
  riUserLine: 'ri-user-line.svg',
  clock: 'clock.svg',
  facebook: 'facebook.svg',
  youtube: 'YouTube.svg',
  ig: 'IG.svg',
  line: 'Line.svg',
  tiktok: 'TikTok.svg',

  // 🚨 Add your icons somewhere random. This makes merging you much easier and avoids conflicts. 🚨
};

export const Icons = Object.fromEntries(Object.entries(ICONS).map(([k, v]) => [k, '/assets/icons/' + v])) as {
  [_key in keyof typeof ICONS]: string;
};
