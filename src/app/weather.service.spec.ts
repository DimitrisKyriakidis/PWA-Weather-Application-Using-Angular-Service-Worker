import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { mockWeatherData } from './mock-weather-data';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });

    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get weather data for a city', (done) => {
    const cityName = 'Athens';

    service.getWeather(cityName).subscribe((weather) => {
      expect(weather).toBeTruthy();
      expect(weather.name).toBe('Athens');
      done();
    });

    const req = httpTestingController.expectOne((request) => {
      return (
        request.url === 'https://api.openweathermap.org/data/2.5/weather' &&
        request.params.get('q') === cityName
      );
    });

    expect(req.request.method).toEqual('GET');

    req.flush(mockWeatherData);
  });
});
