
// this file is meant for global type definitions
// that are used in the whole project
// and are not specific to a certain file

// very helpful for adding intellisense to global objects

declare var GlobalStyles: {
    lightTheme: {
        secondaryBackgroundColor: String;
        backgroundColor: String;
        active: String;
        mainText: String;
        seconDaryText: String;
        disabledText: String;
        card: String;

    };
    darkTheme: {
        secondaryBackgroundColor: String;
        backgroundColor: String;
        active: String;
        mainText: String;
        seconDaryText: String;
        disabledText: String;
        card: String;

    };
};



type Preferences = {
    timeFormat: "24h" | "12h";
    temperatureUnit: "°C" | "°F";
    precipitationUnits: "mm" | "inches";
    windSpeedUnit: "m/s" | "km/h" | "mph" | "knots";
    pressureUnit: "mbar" | "mm" | "inches";
    distanceUnit: "km" | "miles";
    theme: "light" | "dark";
};


type Settings = {
    preferences: Preferences;
    permissions: {
        location: boolean;
    };
};
