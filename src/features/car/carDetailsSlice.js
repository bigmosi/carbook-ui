import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CarData from './carData';

export const createCar = createAsyncThunk(
  'car/create',
  async ({
    brand, model, image, price, description,
  }) => {
    const res = await CarData.create({
      brand,
      model,
      image,
      price,
      description,
    });
    return res.data;
  },
);

export const retrieveCars = createAsyncThunk('cars/retrieve', async () => {
  const res = await CarData.getAll();
  console.log(res.data);
  return res.data;
});

export const retrieveCar = createAsyncThunk('car/retrieve', async (id) => {
  const res = await CarData.get(id);
  console.log(res.data);
  return res.data;
});

export const removeCar = createAsyncThunk('car/delete', async ({ id }) => {
  await CarData.remove(id);
  return { id };
});

const carDetailsSlice = createSlice({
  name: 'carDetails',
  initialState: [],

  addCar: (state, action) => {
    state.push(action.payload);
  },
  deleteCar: () => {},

  extraReducers: {
    [createCar.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveCars.fulfilled]: (state, action) => [action.payload],

    [retrieveCar.fulfilled]: (state, action) => action.payload,

    [removeCar.fulfilled]: (state, action) => {
      const index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addCar, deleteCar } = carDetailsSlice.actions;

export default carDetailsSlice.reducer;
