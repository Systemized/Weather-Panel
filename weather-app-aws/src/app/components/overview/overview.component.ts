import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../interfaces/weather';
import { ForecastData } from '../../interfaces/forecast';
import { WeatherComponent } from '../weather/weather.component';
import { ForecastComponent } from '../forecast/forecast.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-overview',
  imports: [CommonModule, FormsModule, WeatherComponent, ForecastComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  weatherData?: WeatherData;
  forecastData?: ForecastData;
  city: string = '';
  unit: string = 'imperial'; // Default Unit
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather();
  }

  fetchWeather(): void {
    if (!this.city.trim()) {
      this.errorMessage = 'Enter a City Name.';
      return;
    }

    this.weatherService.getCurrentWeather(this.city, this.unit).subscribe({
      next: (data) => (this.weatherData = data),
      error: () => this.errorMessage = ('Failed to load weather data. Try again.')
    });
    this.weatherService.getForecastWeather(this.city, this.unit).subscribe({
      next: (data) => (this.forecastData = data),
      error: () => this.errorMessage = ('Failed to load forecast data. Try again.')
    });
    this.errorMessage = ''
  }

  onCityChange(newCity: string): void {
    this.city = newCity;
    this.fetchWeather();
  }
}

