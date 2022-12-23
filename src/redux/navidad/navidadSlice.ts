import { createSlice } from "@reduxjs/toolkit";
import { navidadState } from "../store";

const initialState = {
  showModal: false,
};

export const navidadSlice = createSlice({
  name: "navidad",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { toggleModal } = navidadSlice.actions;
export const selectNavidadState = (state: navidadState) => state.navidad;
