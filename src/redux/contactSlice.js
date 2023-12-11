// import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactSlice.actions;

//   reducers: {
//     addPhone: {
//       prepare(contact) {
//         return {
//           payload: {
//             id: nanoid(),
//             ...contact,
//           },
//         };
//       },
//       reducer(state, action) {
//         state.contacts.push(action.payload);
//       },
//     },

//     deletePhone(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// const addReducer = contactSlice.reducer;

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

// export const contactsReducer = persistReducer(persistConfig, addReducer);

// export const { addPhone, deletePhone } = contactSlice.actions; //експортуємо генератор акшіон
