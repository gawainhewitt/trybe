import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchGoals from "../../src/functions/fetchGoals";
import postGoal from "../../src/functions/postGoal";
import deleteGoal from "../../src/functions/deleteGoal";
import updateGoal from "../../src/functions/updateGoal";

export const loadGoals = createAsyncThunk(
  "goals/loadGoals",
  async (thunkAPI) => {
    try {
      const response = await fetchGoals();
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const uploadGoal = createAsyncThunk(
  "goals/uploadGoal",
  async (text, thunkAPI) => {
    try {
      const response = await postGoal(text);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const removeGoal = createAsyncThunk(
  "goals/removeGoal",
  async (id, thunkAPI) => {
    try {
      const response = await deleteGoal(id);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const editGoal = createAsyncThunk(
  "goals/updateGoal",
  async ({ id, text }, thunkAPI) => {
    try {
      const response = await updateGoal(id, text);
      return response;
    } catch (err) {
      throw err;
    }
  }
);
