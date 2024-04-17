const ICONS = {
  // 🚨 Add your icons somewhere random. This makes merging you much easier and avoids conflicts. 🚨
};

export const Icons = Object.fromEntries(
  Object.entries(ICONS).map(([k, v]) => [k, "/assets/icons/" + v])
) as {
  [_key in keyof typeof ICONS]: string;
};
