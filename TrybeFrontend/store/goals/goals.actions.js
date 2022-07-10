import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchGoals from "../../src/functions/fetchGoals";
import postGoal from "../../src/functions/postGoal";
import deleteGoal from "../../src/functions/deleteGoal";
import updateGoal from "../../src/functions/updateGoal";

export const loadGoals = createAsyncThunk(
  "goals/loadGoals",
  async (token, thunkAPI) => {
    try {
      const response = await fetchGoals(token);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const uploadGoal = createAsyncThunk(
  "goals/uploadGoal",
  async ({ token, text }, thunkAPI) => {
    try {
      const response = await postGoal(token, text);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const removeGoal = createAsyncThunk(
  "goals/removeGoal",
  async ({ token, id }, thunkAPI) => {
    try {
      console.log("token", token);
      console.log("id", id);
      const response = await deleteGoal(token, id);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const editGoal = createAsyncThunk(
  "goals/updateGoal",
  async ({ token, id, goal_description }, thunkAPI) => {
    try {
      const response = await updateGoal(token, id, goal_description);
      return response;
    } catch (err) {
      throw err;
    }
  }
);
