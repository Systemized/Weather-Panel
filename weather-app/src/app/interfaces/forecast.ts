export interface ForecastData {
    list: {
        dt: number;
        main: {
            temp_min: number;
            temp_max: number;
        };
        weather: {
            main: string;
            description: string;
        }[];
        dt_txt: string;
    }[];
}