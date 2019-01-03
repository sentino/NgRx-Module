import { Agent, AgentActiveClients, AgentInvoices, AgentLostClients, AgentPendingClients, AgentProfile } from './agent.interface';


export class AgentProfileModel {
	profile: AgentProfile;
	pendingClients: AgentPendingClients[];
	activeClients: AgentActiveClients[];
	lostClients: AgentLostClients[];
	invoices: AgentInvoices[];

	constructor(res: Agent){
		const { agentProfileId, address, firstName, lastName, fullName, taxNumber,
						totalActiveClients, totalLostClients, totalEarned, nextPayoutAmount, firstYearClients,
						secondYearClients, thirdYearClients } = res;
		this.profile = {
					agentProfileId,
					address,
					firstName,
					lastName,
					fullName,
					taxNumber,
					totalActiveClients,
					totalLostClients,
					totalEarned,
					nextPayoutAmount,
					firstYearClients,
					secondYearClients,
					thirdYearClients
		};
		this.pendingClients = res.pendingClients;
		this.activeClients = res.activeClients;
		this.lostClients = res.lostClients;
		this.invoices = res.invoices;
	}
}


export const initialAgentProfile: AgentProfile = {
	agentProfileId: 0,
	address: '',
	firstName: '',
	lastName: '',
	fullName: '',
	taxNumber: 0,
	totalActiveClients: 0,
	totalLostClients: 0,
	totalEarned: 0,
	nextPayoutAmount: 0,
	firstYearClients: 0,
	secondYearClients: 0,
	thirdYearClients: 0,
};

export const initialAgentPendingClients: AgentPendingClients[] = [{
	dateInvited: '',
	emailAddress: '',
}];

export const initialAgentActiveClients: AgentActiveClients[] = [{
	businessProfileId: 0,
	businessName: '',
	city: '',
	memberSince: '',
	memberDurationYears: 0,
	emailAddress: '',
	phoneNumber: 0
}];

export const initialAgentLostClients: AgentLostClients[] = [{
	businessProfileId: 0,
	businessName: '',
	city: '',
	memberSince: '',
	memberDurationYears: 0,
	emailAddress: '',
	phoneNumber: 0
}];

export const initialAgentInvoices: AgentInvoices[] = [{
	agentPaymentTotal: 0,
	currency: '',
	invoiceDateFrom: '',
	invoiceDate: '',
	paid: false,
	invoiceId: 0,
	datePaid: '',
	vat: 0,
	agentPaymentIncVAT: 0,
	usage: [
		{
			threshold: 0.50,
			totalClients: 0,
			totalDue: 0
		},
		{
			threshold: 0.35,
			totalClients: 0,
			totalDue: 0
		},
		{
			threshold: 0.25,
			totalClients: 0,
			totalDue: 0
		}
	]
}];
