export interface Agent {
	agentProfileId: number;
	address: string;
	firstName: string;
	lastName: string;
	fullName: string;
	taxNumber: number;
	totalActiveClients: number;
	totalLostClients: number;
	totalEarned: number;
	nextPayoutAmount: number;
	firstYearClients: number;
	secondYearClients: number;
	thirdYearClients: number;
	pendingClients: AgentPendingClients[];
	activeClients: AgentActiveClients[];
	lostClients: AgentLostClients[];
	invoices: AgentInvoices[];
}

export interface AgentProfile {
	agentProfileId: number;
	address: string;
	firstName: string;
	lastName: string;
	fullName: string;
	taxNumber: number;
	totalActiveClients: number;
	totalLostClients: number;
	totalEarned: number;
	nextPayoutAmount: number;
	firstYearClients: number;
	secondYearClients: number;
	thirdYearClients: number;
}

export interface AgentPendingClients {
	dateInvited: string;
	emailAddress: string;
}
export interface AgentActiveClients {
	businessProfileId: number;
	businessName: string;
	city: string;
	memberSince: string;
	memberDurationYears: number;
	emailAddress: string;
	phoneNumber: number
}
export interface AgentLostClients {
	businessProfileId: number;
	businessName: string;
	city: string;
	memberSince: string;
	memberDurationYears: number;
	emailAddress: string;
	phoneNumber: number
}

export interface AgentInvoices {
	agentPaymentTotal: number;
	currency: string;
	invoiceDateFrom: string;
	invoiceDate: string;
	paid: boolean;
	invoiceId: number;
	datePaid: string | null;
	vat: number;
	agentPaymentIncVAT: number;
	usage: AgentInvoicesUsage[];
}
export interface AgentInvoicesUsage {
	threshold: number;
	totalClients: number;
	totalDue: number;
}