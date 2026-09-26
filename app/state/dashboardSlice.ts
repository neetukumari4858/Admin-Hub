import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Section } from "../data/records";

type DashboardState = {
  section: Section;
  search: string;
};
const initialState: DashboardState = { section: "Dashboard", search: "" };
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setSection(state, action: PayloadAction<DashboardState["section"]>) {
      state.section = action.payload;
      state.search = "";
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});
export const { setSection, setSearch } = dashboardSlice.actions;
export default dashboardSlice.reducer;
