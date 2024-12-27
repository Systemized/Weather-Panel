import { Component, Input } from '@angular/core';
import { WeatherData } from '../../interfaces/weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  @Input() weatherData?: WeatherData;
  @Input() unit: string = 'imperial';

  get tempUnit(): string {
    return this.unit === 'imperial' ? 'F' : 'C';
  }
  get windUnit(): string {
    return this.unit === 'imperial' ? 'mph' : 'm/s';
  }
}
