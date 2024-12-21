export interface WeatherData {
    weather: {
        main: string;
        description: string;
        icon: string;
    }
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    clouds: {
        all: number;
    };
    name: string;
    sys: {
        country: string; // Country code
    };
}
