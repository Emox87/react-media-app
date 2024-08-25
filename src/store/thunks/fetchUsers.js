import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // DEV ONLY ADDING 1s pause
  await pause(1000);

  return response.data;
});

// Automatically generated action types
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'

// DEV ONLY!!!
// DELAY REPONSE
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
