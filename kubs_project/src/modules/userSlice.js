import { createSlice } from "@reduxjs/toolkit";
import { register } from "../thunk/register";
import { login } from "../thunk/login";
import { department } from "../thunk/department";
import { findPW } from "../thunk/findPW";

export const registerSlice = createSlice({
  name: "user",
  initialState: {
    isRegistered: false,
    isRegistering: false,
    RegisterUser: null,
    RegisterRejectReason: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRegistered = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRegistered = true;
        state.isRegistering = true;
        state.RegisterUser = action.payload.config.data;
        state.RegisterRejectReason = "";
      })
      .addCase(register.rejected, (state, action) => {
        state.isRegistering = false;
        state.RegisterRejectReason = action.error;
      });
  },
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoginned: false,
    isLoginning: false,
    LoginUser: null,
    LoginRejectReason: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoginned = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoginned = true;
        state.isLoginning = true;
        state.LoginUser = action.payload.config.data;
        state.LoginRejectReason = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoginning = false;
        state.LoginRejectReason = action.error;
      });
  },
});

export const departmentFindSlice = createSlice({
  name: "department",
  initialState: {
    isDepartmentFinded: false,
    isDepartmentFinding: false,
    FindDepartmentInfo: null,
    FindDepartmentRejectReason: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(department.pending, (state) => {
        state.isDepartmentFinded = true;
      })
      .addCase(department.fulfilled, (state, action) => {
        state.isDepartmentFinded = true;
        state.isDepartmentFinding = true;
        state.FindDepartmentInfo = action.payload.config.data;
        state.FindDepartmentRejectReason = "";
      })
      .addCase(department.rejected, (state, action) => {
        state.isDepartmentFinding = false;
        state.FindDepartmentRejectReason = action.error;
      });
  },
});

export const findPWSlice = createSlice({
  name: "findPW",
  initialState: {
    isPWFinded: false,
    isPWFinding: false,
    FindPWInfo: null,
    FindPWRejectReason: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findPW.pending, (state) => {
        state.isPWFinded = true;
      })
      .addCase(findPW.fulfilled, (state, action) => {
        state.isPWFinded = true;
        state.isPWFinding = true;
        state.FindPWInfo = action.payload.config.data;
        state.FindPWRejectReason = "";
      })
      .addCase(findPW.rejected, (state, action) => {
        state.isPWFinding = false;
        state.FindPWRejectReason = action.error;
      });
  },
});
