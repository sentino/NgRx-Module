import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NovaManusState, selectCurrentUser } from '../../../reducers';
import { NavigationManager } from '../../../common';
import { NotificationService } from '../../core/services/notification-service';
import { TranslateService } from '@ngx-translate/core';
import * as fromAction from './agent.actions';
import { GetAgentInvoiceDetailsSuccessAction } from './agent.actions';
import { of } from 'rxjs/observable/of';
import { ProfileService } from '../../core/services/profile-service';
import { Agent } from './agent.interface';
import { selectAgentInvoices } from './agent.selectors';
import { AgentProfileModel } from './agent.model';

@Injectable()
export class AgentEffects {

  @Effect()
  public getAgent$ = this.action$
    .ofType(fromAction.GET_AGENT_DETAILS)
    .withLatestFrom(
      this.store$.select(selectCurrentUser),
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
      this.store$.select(selectAgentInvoices),
    )
    .map(([action, invoices]) => ({ id: (action as fromAction.All).payload, invoices }))
    .mergeMap(({ id, invoices }) => {
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
      .map((res: Agent) => new fromAction.GetAgentDetailsSuccessAction(new AgentProfileModel(res)))
      .catch(e => {
        this.notification.error('something is wrong');
        this.navigation.goToFeed();
        return of(new fromAction.GetAgentDetailsFailAction(e));
      });
  }

  private agentInvitation(email) {
    return this.profileService.sendInvitation(email)
      .then(
        (result) => {
          const t = this.translate.instant('AGENT_PROFILE.INVITATION.SUCCESS');
          this.notification.success(t);
          return new fromAction.AgentInvitationSuccessAction(result);
        },
      )
      .catch(e => {
        const t = this.translate.instant('AGENT_PROFILE.INVITATION.FAIL');
        this.notification.error(t);
        return new fromAction.AgentInvitationFailAction(e);
      });
  }

  private searchInvoice(id, invoices) {
    try {
      const _item = invoices.filter((item) => item.invoiceId === id);
      return of(new GetAgentInvoiceDetailsSuccessAction(_item[0]));
    } catch (e) {
      this.notification.error('something is wrong');
      this.navigation.goToFeed();
      return of(new fromAction.GetAgentInvoiceDetailsFailAction(e));
    }
  }
}
