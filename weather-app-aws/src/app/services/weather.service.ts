import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../interfaces/weather';
import { ForecastData } from '../interfaces/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private lambdaBaseUrl = 'https://7kiab7x085.execute-api.us-east-1.amazonaws.com/v1'

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string, unit: string): Observable<WeatherData> {
    const url = `${this.lambdaBaseUrl}/weather?city=${city}&units=${unit}&endpoint=weather`
    return this.http.get<WeatherData>(url)
  }
  getForecastWeather(city: string, unit: string): Observable<ForecastData> {
    const url = `${this.lambdaBaseUrl}/forecast?city=${city}&units=${unit}&endpoint=forecast`
    return this.http.get<ForecastData>(url)
  }
}
