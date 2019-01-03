import { type } from '../../../utils';
import { Action } from '@ngrx/store';
import { AgentActiveClients, AgentInvoices, AgentLostClients, AgentPendingClients, AgentProfile } from './agent.interface';


const CATEGORY = 'Agent';

export const GET_AGENT_DETAILS = type(`[${CATEGORY}] get details`);
export const GET_AGENT_DETAILS_SUCCESS = type(`[${CATEGORY}] get details success`);
export const GET_AGENT_DETAILS_FAIL = type(`[${CATEGORY}] get details fail`);
export const SEND_AGENT_INVITATION = type(`[${CATEGORY}] send invitation`);
export const SEND_AGENT_INVITATION_SUCCESS = type(`[${CATEGORY}] send invitation success`);
export const SEND_AGENT_INVITATION_FAIL = type(`[${CATEGORY}] send invitation fail`);
export const GET_AGENT_INVOICE_DETAILS = type(`[${CATEGORY}] get invoices details`);
export const GET_AGENT_INVOICE_DETAILS_SUCCESS = type(`[${CATEGORY}] get invoices details success`);
export const GET_AGENT_INVOICE_DETAILS_FAIL = type(`[${CATEGORY}] get invoices details fail`);

export class GetAgentDetailsAction implements Action {
	readonly type = GET_AGENT_DETAILS;

	constructor(public payload?: any) { }
}

export class GetAgentDetailsSuccessAction implements Action {
	readonly type = GET_AGENT_DETAILS_SUCCESS;

	constructor(public payload: {
		profile: AgentProfile,
		pendingClients: AgentPendingClients[],
		activeClients: AgentActiveClients[],
		lostClients: AgentLostClients[],
		invoices: AgentInvoices[]
	}) { }
}

export class GetAgentDetailsFailAction implements Action {
	readonly type = GET_AGENT_DETAILS_FAIL;

	constructor(public payload?: any) { }
}


export class AgentInvitationAction implements Action {
	readonly type = SEND_AGENT_INVITATION;

	constructor(public payload: string) { }
}

export class AgentInvitationSuccessAction implements Action {
	readonly type = SEND_AGENT_INVITATION_SUCCESS;

	constructor(public payload?: any) { }
}

export class AgentInvitationFailAction implements Action {
	readonly type = SEND_AGENT_INVITATION_FAIL;

	constructor(public payload?: any) { }
}


export class GetAgentInvoiceDetailsAction implements Action {
	readonly type = GET_AGENT_INVOICE_DETAILS;

	constructor(public payload: number) { }
}

export class GetAgentInvoiceDetailsSuccessAction implements Action {
	readonly type = GET_AGENT_INVOICE_DETAILS_SUCCESS;

	constructor(public payload: AgentInvoices) { }
}

export class GetAgentInvoiceDetailsFailAction implements Action {
	readonly type = GET_AGENT_INVOICE_DETAILS_FAIL;

	constructor(public payload?: any) { }
}

export type All =
	GetAgentDetailsAction |
	GetAgentDetailsSuccessAction |
	GetAgentDetailsFailAction |
	AgentInvitationAction |
	AgentInvitationSuccessAction |
	AgentInvitationFailAction |
	GetAgentInvoiceDetailsAction |
	GetAgentInvoiceDetailsSuccessAction |
	GetAgentInvoiceDetailsFailAction;
