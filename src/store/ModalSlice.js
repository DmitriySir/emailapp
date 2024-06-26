import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  email: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.showModal = true;
    },
    closeModal: state => {
      state.showModal = false;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { openModal, closeModal, setEmail } = modalSlice.actions;
export default modalSlice.reducer;
