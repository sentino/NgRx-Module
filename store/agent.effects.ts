import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { getCurrentUser, NovaManusState } from "../../../../reducers";
import { NavigationManager } from "../../../../common";
import { NotificationService } from "../../../core/services/notification-service";
import { TranslateService } from "@ngx-translate/core";
import * as fromAction from "./agent.actions";
import { of } from "rxjs/observable/of";
import { ProfileService } from "../../../core/services/profile-service";
import { Agent } from "./agent.interface";
import { GetAgentInvoiceDetailsSuccessAction } from "./agent.actions";
import { selectAgentInvoices } from "./agent.selectors";


@Injectable()
export class AgentEffects {

	@Effect()
	public getAgent$ = this.action$
		.ofType(fromAction.GET_AGENT_DETAILS)
		.withLatestFrom(
			this.store$.select(getCurrentUser)
		)
		.map(([Action, user]) => user.agentId)
		.mergeMap(agentId => {
			if (!agentId) {
				this.navigation.goToFeed();
				return of(null);
			}
			return this.getAgent();
		});

	@Effect()
	public agentInvitation$ = this.action$
	.ofType(fromAction.SEND_AGENT_INVITATION)
	.map((arg: fromAction.All) => arg.payload)
	.mergeMap(payload => {
		return this.agentInvitation(payload);
	});

	@Effect()
	public getAgentInvoiceDetails$ = this.action$
	.ofType(fromAction.GET_AGENT_INVOICE_DETAILS)
	.withLatestFrom(
		this.store$.select(selectAgentInvoices)
	)
	.map(([action, invoices]) => ({id: (action as fromAction.All).payload, invoices}))
	.mergeMap(({id, invoices}) => {
		return this.searchInvoice(id, invoices);
	});


	constructor(
		private store$: Store<NovaManusState>,
		private navigation: NavigationManager,
		private notification: NotificationService,
		private translate: TranslateService,
		private profileService: ProfileService,
		private action$: Actions,
	) {}

	private getAgent() {
		return this.profileService.getAgentProfile()
			.map((res: Agent) => new fromAction.GetAgentDetailsSuccessAction({
					profile: {
						agentProfileId: res.agentProfileId,
						address: res.address,
						firstName: res.firstName,
						lastName: res.lastName,
						fullName: res.fullName,
						taxNumber: res.taxNumber,
						totalActiveClients: res.totalActiveClients,
						totalLostClients: res.totalLostClients,
						totalEarned: res.totalEarned,
						nextPayoutAmount: res.nextPayoutAmount,
						firstYearClients: res.firstYearClients,
						secondYearClients: res.secondYearClients,
						thirdYearClients: res.thirdYearClients,
					},
					pendingClients: res.pendingClients,
					activeClients: res.activeClients,
					lostClients: res.lostClients,
					invoices: res.invoices
				})
			)
			.catch(e => {
				this.notification.error('something is wrong');
				this.navigation.goToFeed();
				return of(new fromAction.GetAgentDetailsFailAction(e));
			});
	}

	private agentInvitation(email) {
		return this.profileService.sendInvitation(email).then(
			(result) => {
				const t = this.translate.instant('AGENT_PROFILE.INVITATION.SUCCESS');
				this.notification.success(t);
				this.store$.dispatch(new fromAction.AgentInvitationSuccessAction(result));
			},
			(err) => {
				const t = this.translate.instant('AGENT_PROFILE.INVITATION.FAIL');
				this.notification.error(t);
				this.store$.dispatch(new fromAction.AgentInvitationSuccessAction(err));
			}
		);
	}

	private searchInvoice(id, invoices) {
		try {
			let item = invoices.filter((item) => {
				return item.invoiceId === id;
			});
			return of(new GetAgentInvoiceDetailsSuccessAction(item[0]));
		} catch (e) {
			this.notification.error('something is wrong');
			this.navigation.goToFeed();
			return of(new fromAction.GetAgentInvoiceDetailsFailAction(e));
		}
	}
}