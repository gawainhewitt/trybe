import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchGoals from '../../src/functions/fetchGoals';
import postGoals from '../../src/functions/postGoals';

export const loadGoals = createAsyncThunk(
  'goals/loadGoals',
  async (thunkAPI) => {
    try {
      const response = await fetchGoals();
      return response;
    } catch(err) {
      throw err;
    }
  }
);

export const uploadGoal = createAsyncThunk(
  'goals/uploadGoal',
  async (text, thunkAPI) => {
    try {
      const response = await postGoals(text);
      return response;
    } catch(err) {
      throw err;
    }
  }
);