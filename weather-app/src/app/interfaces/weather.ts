export interface WeatherData {
    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
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
