import { NovaManusState } from "../../../../reducers";
import { createSelector } from "@ngrx/store";
import * as fromReducer from "./agent.reducer"


export const selectsAgentState = (state: NovaManusState): fromReducer.State => state.agent;
export const selectAgentLoading = createSelector(selectsAgentState, fromReducer.getLoading);
export const selectAgentProfile = createSelector(selectsAgentState, fromReducer.getAgentProfile);
export const selectAgentPendingClients = createSelector(selectsAgentState, fromReducer.getAgentPendingClients);
export const selectAgentActiveClients = createSelector(selectsAgentState, fromReducer.getAgentActiveClients);
export const selectAgentLostClients = createSelector(selectsAgentState, fromReducer.getAgentLostClients);
export const selectAgentInvoices = createSelector(selectsAgentState, fromReducer.getAgentInvoices);
export const selectAgentInvoiceDetails = createSelector(selectsAgentState, fromReducer.getAgentInvoiceDetails);