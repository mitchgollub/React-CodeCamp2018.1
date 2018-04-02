import { combineReducers } from "redux";

import SchedulesReducer from "./reducer_schedules";
import SessionsReducer from "./reducer_sessions";
import SpeakersReducer from "./reducer_speakers";
import SponsorsReducer from "./reducer_sponsors";

const rootReducer = combineReducers({
  schedules: SchedulesReducer,
  sessions: SessionsReducer,
  speakers: SpeakersReducer,
  sponsors: SponsorsReducer
});

export default rootReducer;
