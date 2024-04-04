import { createSlice, configureStore } from "@reduxjs/toolkit";

export const initialState = {
  data: {
    data: {},
    selectedDay: null,
    weatherMap: {},
    currentTemperature: null,
    currentTime: null,
    lon: null,
    lat: null,
  },

  location: {
    selectedIndex: 0,
    current: {
      lon: null,
      lat: null,
      name: null,
    },
    options: [],
  },
  cash: {},
  preferences: {
    timeFormat: {
      selected: "24h",
      options: ["24h", "12h"],
    },
    temperatureUnit: {
      selected: "C",
      options: ["C", "F"],
    },
    precipitationUnit: {
      selected: "mm",
      options: ["mm", "inches"],
    },
    windSpeed: {
      selected: "m/s",
      options: ["m/s", "km/s", "mph", "knots"],
    },
    pressure: {
      selected: "mm",
      options: ["inches", "mm", "mbar"],
    },
    distance: {
      selected: "km",
      options: ["km", "miles"],
    },
    theme: {
      selected: "dark",
      options: ["light", "dark"],
    },
  },
};

// Preferences Slice
export const preferencesSlice = createSlice({
  name: "preferences",
  initialState: initialState.preferences,
  reducers: {
    setPreferences: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const cashSlice = createSlice({
  name: "cash",
  initialState: initialState.preferences,
  reducers: {
    setCash: (state, action) => {
      return { ...state, [action.payload.key]: action.payload.data };
    },
  },
});

export const locationSlice = createSlice({
  name: "location",
  initialState: initialState.location,
  reducers: {
    pickLocation: (state, action) => {
      return { ...state, ...action.payload };
    },
    addLocation: (state, action) => {
      return { ...state, options: [...state.options, action.payload] };
    },
    removeLocation: (state, action) => {
      const newOptions = state.options.filter(
        (location) => location.name !== action.payload
      );
      return {
        ...state,
        selectedIndex: 0,
        options: newOptions,
      };
    },
    addCurrentLocation: (state, action) => {
      return {
        ...state,
        current: action.payload,
      };
    },
    selectSlide: (state, action) => {
      return {
        ...state,
        selectedIndex: action.payload,
      };
    },
  },
});

export const { setPreferences } = preferencesSlice.actions;

// Data Slice
export const dataSlice = createSlice({
  name: "data",
  initialState: initialState.data,
  reducers: {
    setData: (state, action) => {
      return { ...state, ...action.payload };
    },
    setSelectedDay: (state, action) => {
      return { ...state, selectedDay: action.payload };
    },
  },
});

export const {
  pickLocation,
  addLocation,
  removeLocation,
  addCurrentLocation,
  selectSlide,
} = locationSlice.actions;
export const { setData, setSelectedDay } = dataSlice.actions;
export const { setCash } = cashSlice.actions;
// Combine Reducers
const rootReducer = {
  preferences: preferencesSlice.reducer,
  data: dataSlice.reducer,
  cash: cashSlice.reducer,
  location: locationSlice.reducer,
};

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
  reducer: rootReducer,
});
