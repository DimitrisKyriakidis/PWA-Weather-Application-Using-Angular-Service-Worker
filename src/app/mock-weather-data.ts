import { Weather } from './weather';

export const mockWeatherData: Weather = {
  weather: [
    {
      main: 'Clear',
      icon: '01d',
    },
  ],
  main: {
    temp: 25.5,
    pressure: 1015,
    humidity: 60,
  },
  wind: {
    speed: 5.5,
  },
  sys: {
    country: 'Greece',
  },
  name: 'Athens',
};
