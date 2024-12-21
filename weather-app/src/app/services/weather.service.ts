import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../interfaces/weather';
import { ForecastData } from '../interfaces/forecast';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'Dont add key until environment..'
  private apiUrl = 'api.openweathermap.org/data/2.5'

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<WeatherData> {
    const url = `${this.apiUrl}/weather?q=${city}&units=metric&APPID=${this.apiKey}`
    return this.http.get<WeatherData>(url)
  }
  getForecastWeather(city: string): Observable<ForecastData> {
    const url = `${this.apiUrl}/forecast?q=${city}&units=metric&APPID=${this.apiKey}`
    return this.http.get<ForecastData>(url)
  }
}
