# Weather-Panel
Weather web-app built on Angular/Typescript

Weather App

This is an Weather webapp build using Angular 19. It displays current weather and a 5-day forecast for any city. The app fetches weather data from the OpenWeatherMap API and supports both metric and imperial units.

Features

- Current Weather: Displays the current temperature, weather condition, humidity, and wind speed.
- 5-Day Forecast: Shows the daily minimum and maximum temperatures for the next five days.
- City Search: Allows users to search for a city to view its weather and forecast.
- Unit Selection: Users can switch between metric (Celsius) and imperial (Fahrenheit) units.
- Dynamic City Handling: Prevents ambiguous results by allowing city and country/state input or selection.

Notes: To get optimal serach results, be specific with your city and country. Search Countries using Alpha-2 Codes. 
    
    Searching only 'Rome' would result in Rome, Georgia, US rather than Rome, Italy.
    To search for Rome, Italy -- search: 'Rome, IT'

    Searching only 'Arlington' would result in Arlington, Texas, rather than Arlington, Virginia
    To search for Arlington, Virginia -- search: 'Arlington, VA, US'

![Display Example Image](weather-app/src/assets/README_Display.png)