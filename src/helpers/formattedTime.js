export const pad = val => (val < 10 ? `0${val}` : val);

export const formattedTime = timeObj => {
  const { m, s, ms } = timeObj;

  return `${pad(m)} : ${pad(s)} : ${pad(ms)}`;
};
