# TaskNokia

This project was generated with [Angular CLI] in version 15.2.4.

## About application

The application provides users with the ability to search for COVID-19 data, which covers cases from the first day of the pandemic up to the present day. The data is presented in both tables and graphs for each country. The information for this application is sourced from https://covid19api.com/, as mentioned in the task content. Additionally, to enhance the user experience, the application fetches flag images for each country from https://flagsapi.com/ and presents them in the table. The application is fully responsive and reliable, taking into account that the COVID-19 API has limitations for data retrieval. If the application fails to retrieve data from the API, it will automatically retry after a delay of 4 seconds 2 tmes.

## Code

I wrote the code in the cleanest way possible to make it easier to assess this task. To avoid memory leaks, I have used async pipes wherever possible. Also all code was commented.

## Enjoy
