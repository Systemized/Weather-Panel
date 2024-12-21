export interface ForecastData {
    list: {
        dt: number; // Timestamp
        main: {
            temp_min: number; // Minimum temperature for the day
            temp_max: number; // Maximum temperature for the day
        };
        weather: {
            description: string; // Weather description (sky condition)
        }[];
        dt_txt: string; // Date and time of the forecast
    }[];
}