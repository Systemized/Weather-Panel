import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ForecastData } from '../../interfaces/forecast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent implements OnChanges{
  @Input() forecastData?: ForecastData;
  @Input() forecastUnit: string = 'imperial';

  dailyTemps: {date: string; maxTemp: number; minTemp: number}[]  = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.forecastData?.list) {
      this.processDailyTemp(this.forecastData.list);
    }
  }

  processDailyTemp(list: any[]): void {
    const groupByDate: { [key: string]: number[] } = {};

    list.forEach((entry) => {
      const date = entry.dt_txt.split(' ')[0];
      if(!groupByDate[date]) {
        groupByDate[date] = [];
      }
      groupByDate[date].push(entry.main.temp);
    });

    this.dailyTemps = Object.keys(groupByDate).map((date) => {
      const temps = groupByDate[date];
      return {
        date,
        maxTemp: Math.max(...temps),
        minTemp: Math.min(...temps),
      };
    });
  }
  get tempUnit(): string {
    return this.forecastUnit === 'imperial' ? 'F' : 'C';
  }
}
