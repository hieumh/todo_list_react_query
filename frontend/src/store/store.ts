import { configureStore } from "@reduxjs/toolkit"
import myDaySlice from "./slices/myDay.slice"

export const store = configureStore({
  reducer: {
    myDay: myDaySlice,
    // taskManagement: taskManagementReducer,
    // myTask: myTaskReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
