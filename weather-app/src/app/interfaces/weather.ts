export interface WeatherData {
    weather: {
        main: string;
        description: string;
    }[];
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    name: string; // City
    sys: {
        country: string; // Country code
    };
}
