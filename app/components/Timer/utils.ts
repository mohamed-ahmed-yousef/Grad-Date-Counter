const COUNTDOWN_FROM = "2024-07-31";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export function getDateInfo() {
  const end = new Date(COUNTDOWN_FROM);
  const now = new Date();
  const distance = +end - +now;

  const days = Math.floor(distance / DAY);
  const hours = Math.floor((distance % DAY) / HOUR);
  const minutes = Math.floor((distance % HOUR) / MINUTE);
  const seconds = Math.floor((distance % MINUTE) / SECOND);

  return { days, hours, minutes, seconds };
}
