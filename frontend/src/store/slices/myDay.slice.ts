import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StepModel } from "../../model/step"

interface IMyDayState {
  newStep: StepModel | null
}

const initialState: IMyDayState = {
  newStep: null
}

export const myDaySlice = createSlice({
  name: "myDay",
  initialState,
  reducers: {
    addStepToTrello: (state, action: PayloadAction<StepModel>) => {
      state.newStep = action.payload;
    }
  }
})

export const { addStepToTrello } = myDaySlice.actions

export default myDaySlice.reducer
