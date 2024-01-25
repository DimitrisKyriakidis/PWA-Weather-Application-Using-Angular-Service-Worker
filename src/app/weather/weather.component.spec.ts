import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { WeatherService } from '../weather.service';
import { of } from 'rxjs';
import { mockWeatherData } from '../mock-weather-data';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(() => {
    const weatherServiceSpy = jasmine.createSpyObj(WeatherService, [
      'getWeather',
    ]);

    TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
    });
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(
      WeatherService
    ) as jasmine.SpyObj<WeatherService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getWeather and update weather property on search', fakeAsync(() => {
    const city = 'Athens';

    weatherService.getWeather.and.returnValue(of(mockWeatherData));

    component.search(city);
    tick();

    expect(weatherService.getWeather).toHaveBeenCalledWith(city);
    expect(component.weather).toEqual(mockWeatherData);
  }));
});
