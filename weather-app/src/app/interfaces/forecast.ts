export interface ForecastData {
    list: {
        main: {
            temp: number;
        };
        weather: {
            main: string;
            description: string;
        }[];
        dt_txt: string;
    }[];
}