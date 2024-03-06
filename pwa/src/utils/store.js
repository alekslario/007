import { createSlice, configureStore } from '@reduxjs/toolkit';

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
    current: {
      lon: null,
      lat: null,
      name: null,
    },
    options: [],
  },

  preferences: {
    timeFormat: {
      selected: '24h',
      options: ['24h', '12h'],
    },
    temperatureUnit: {
      selected: 'C',
      options: ['C', 'F'],
    },
    precipitationUnit: {
      selected: 'mm',
      options: ['mm', 'inches'],
    },
    windSpeed: {
      selected: 'm/s',
      options: ['m/s', 'km/s', 'mph', 'knots'],
    },
    pressure: {
      selected: 'mm',
      options: ['inches', 'mm', 'mbar'],
    },
    distance: {
      selected: 'km',
      options: ['km', 'miles'],
    },
    theme: {
      selected: 'light',
      options: ['light', 'dark'],
    },
  },
};

// Preferences Slice
export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: initialState.preferences,
  reducers: {
    setPreferences: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const locationSlice = createSlice({
  name: 'location',
  initialState: initialState.location,
  reducers: {
    pickLocation: (state, action) => {
      return { ...state, ...action.payload };
    },
    addLocation: (state, action) => {
      return { ...state, options: [...state.options, action.payload] };
    },
    removeLocation: (state, action) => {
      return {
        ...state,
        options: state.options.filter((option) => option.name !== action.payload),
      };
    },
  },
});

export const { setPreferences } = preferencesSlice.actions;

// Data Slice
export const dataSlice = createSlice({
  name: 'data',
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

export const { pickLocation, addLocation, removeLocation } = locationSlice.actions;
export const { setData, setSelectedDay } = dataSlice.actions;

// Combine Reducers
const rootReducer = {
  preferences: preferencesSlice.reducer,
  data: dataSlice.reducer,
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
