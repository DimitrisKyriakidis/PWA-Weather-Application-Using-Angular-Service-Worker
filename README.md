# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

To initiate the use of the OpenWeather API, the initial step involves obtaining an API key. Follow the steps below:

1. Visit the OpenWeather API website by navigating to https://openweathermap.org/api.
On this site, you'll find a comprehensive list of the available APIs provided by the OpenWeather team.
2. Locate the section dedicated to Current Weather Data and select the Subscribe button. This action will redirect you to a page displaying the various pricing options offered by the service. The Free tier, suitable for our project, will be the focus.
3. Click on the "Get API key" option. This will redirect you to the sign-up page for the service.
4. Fill in all the necessary details and proceed by clicking the "Create Account" button.
5. Upon completion, a confirmation message will be sent to the email address used during the account creation.
6. Copy your api key you have received from your email to the apiKey variable inside the`src\app\weather.service.ts`.

Access the confirmation email and click on the "Verify your email" button to finalize the registration process. Soon after, OpenWeather will send another email containing essential details about your current subscription, including the API key and the HTTP endpoint for communication with the API.

# If you want to run the application offline with the service worker

Run `ng build`. After success build run `npm run server` and open `http://localhost:8080/`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

