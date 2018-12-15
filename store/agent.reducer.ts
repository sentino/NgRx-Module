import {
	AgentActiveClients, AgentProfile, AgentInvoices,
	AgentLostClients,
	AgentPendingClients
} from "./agent.interface";
import {
	initialAgentActiveClients,
	initialAgentInvoices,
	initialAgentLostClients,
	initialAgentPendingClients, initialAgentProfile
} from "./agent.model";
import * as fromAction from "./agent.actions";


export interface State {
	loading: boolean,
	profile: AgentProfile,
	pendingClients: AgentPendingClients[],
	activeClients: AgentActiveClients[],
	lostClients: AgentLostClients[],
	invoices: AgentInvoices[],
	invoice?: AgentInvoices
}

export const initialState: State = {
	loading: true,
	profile: initialAgentProfile,
	pendingClients: initialAgentPendingClients,
	activeClients: initialAgentActiveClients,
	lostClients: initialAgentLostClients,
	invoices: initialAgentInvoices
};

export function reducer(state = initialState, action: fromAction.All): State {
	switch (action.type) {
		case fromAction.GET_AGENT_INVOICE_DETAILS_FAIL:
		case fromAction.GET_AGENT_INVOICE_DETAILS:
		case fromAction.GET_AGENT_DETAILS: {
			return {
				...state,
				loading: true,
			};
		}

		case fromAction.GET_AGENT_DETAILS_SUCCESS: {
			return {
				...state,
				loading: false,
				profile: action.payload.profile,
				pendingClients: action.payload.pendingClients,
				activeClients: action.payload.activeClients,
				lostClients: action.payload.lostClients,
				invoices: action.payload.invoices
			};
		}

		case fromAction.GET_AGENT_INVOICE_DETAILS_SUCCESS: {
			return {
				...state,
				loading: false,
				invoice: action.payload
			}
		}

		default: {
			return state;
		}
	}
}

export const getLoading = (state: State): boolean => state.loading;
export const getAgentProfile = (state: State): AgentProfile => state.profile;
export const getAgentPendingClients = (state: State): AgentPendingClients[] => state.pendingClients;
export const getAgentActiveClients = (state: State): AgentActiveClients[] => state.activeClients;
export const getAgentLostClients = (state: State): AgentLostClients[] => state.lostClients;
export const getAgentInvoices = (state: State): AgentInvoices[] => state.invoices;
export const getAgentInvoiceDetails = (state: State): AgentInvoices => state.invoice;
