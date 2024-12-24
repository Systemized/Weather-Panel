import { Component, Input } from '@angular/core';
import { ForecastData } from '../../interfaces/forecast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent {
  @Input() forecastData?: ForecastData;
}
