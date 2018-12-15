import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getCurrentUser, NovaManusState } from "../../../reducers";
import { Observable } from "rxjs";
import { ProfileService } from "../../core/services/profile-service";
import { NavigationManager } from "../../../common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EMAIL_REGEX_PATTERN } from "../../../config";
import { TranslateService } from "@ngx-translate/core";
import { BaseUserDto } from "../../../models/user/base-contact-dto";
import {
	AgentActiveClients, AgentInvitationAction,
	AgentInvoices,
	AgentLostClients,
	AgentPendingClients,
	AgentProfile,
	GetAgentDetailsAction, GetAgentInvoiceDetailsAction,
	selectAgentActiveClients, selectAgentInvoiceDetails,
	selectAgentInvoices,
	selectAgentLostClients,
	selectAgentPendingClients,
	selectAgentProfile
} from "./store";
import { selectAgentLoading } from "./store/agent.selectors";

declare const moment: any;

@Component({
	selector: 'app-agent-profile-container',
	template: `
      <div class="nmv1-wrapper">

          <!--START Agent profile overview -->
          <div class="nmv1-wrapper">

              <div class="nmv1-container">
                  <!-- SUB MENU -->
                  <sub-menu-simple
				                  [username]="usernameForHeader"
				                  SubMenu
				                  [pageName]="profMenuTitle"
				                  [setPageIconClassName]="pageIconClassName"
                  				[agent]="true">
                      <div class="collapse navbar-collapse" right-end>
                          <ul class="nav navbar-nav navbar-right">
                              <li class="hidden-xs">
                                  <a (click)="subMenuClose()" class="btn-close-ep fa fa-close"></a>
                              </li>
                          </ul>
                      </div>
                  </sub-menu-simple>
                  <!-- END SUB MENU -->
              </div>
		          

              <!--  START profile -->
              <div class="nmv1-container-fluid">
                  <div class="nmv1-section nmv1-is-bg-container" [ngSwitch]="layout_switch.type">
                      <div class="nmv1-container" *ngSwitchCase="'profile'">
                          <app-agent-profile
				                          *ngIf="!loading"
                          				[agent]="agentProfile$ | async"
                          				[pendingClients]="agentPendingClients$ | async"
                          				[activeClients]="agentActiveClients$ | async"
                          				[lostClients]="agentLostClients$ | async"
                          				[invoices]="agentInvoices$ | async"
				                          [form]="emailForm"
                          				(next)="agentInvite()"
                                  (goToInvoice)="onGoToInvoice($event)">
                          </app-agent-profile>
                      </div>

                      <div class="nmv1-container" *ngSwitchCase="'invoice'">
                          <agent-invoice
                                  *ngIf="!loading"
                          				[invoice]="agentInvoiceDetails$ | async"
                          				[agent]="agentProfile$ | async"
                          				(goToAgentProfile)="subMenuClose()">
                          </agent-invoice>
                      </div>
                  </div>
              </div>
              <!--  END profile -->
          </div>
          <!--END Agent profile overview -->

      </div>
      <div [attr.data-hidden]="!loading" class="page-loader"></div>
	`
})

export class AgentProfileContainerComponent implements OnInit {
	public currentUser$: Observable<BaseUserDto> = this.store.select(getCurrentUser);
	public loading$: Observable<boolean> = this.store.select(selectAgentLoading);
	public agentProfile$: Observable<AgentProfile> = this.store.select(selectAgentProfile);
	public agentPendingClients$: Observable<AgentPendingClients[]> = this.store.select(selectAgentPendingClients);
	public agentActiveClients$: Observable<AgentActiveClients[]> = this.store.select(selectAgentActiveClients);
	public agentLostClients$: Observable<AgentLostClients[]> = this.store.select(selectAgentLostClients);
	public agentInvoices$: Observable<AgentInvoices[]> = this.store.select(selectAgentInvoices);
	public agentInvoiceDetails$: Observable<AgentInvoices> = this.store.select(selectAgentInvoiceDetails);

	layout_switch = {
		type: 'profile',
		pageIconClassName: 'fa-briefcase',
		profMenuTitle: ''
	};

	loading: boolean = true;
	usernameForHeader: string;
	emailForm: FormGroup;


	constructor(
		private fb: FormBuilder,
		private store: Store<NovaManusState>,
		private profileService: ProfileService,
		private translate: TranslateService,
		private nav: NavigationManager
	) { }

	ngOnInit() {
		this.store.dispatch(new GetAgentDetailsAction());

		this.loading$.subscribe(res => this.loading = res);
		this.currentUser$.subscribe( (res) => {
			this.usernameForHeader = res.username;
		});

		this.createMailForm();
		this.changeProfMenuTitle();
	}

	get profMenuTitle() {
		return this.layout_switch.profMenuTitle;
	}
	get pageIconClassName() {
		return this.layout_switch.pageIconClassName;
	}

	get profile() {
		return this.layout_switch && this.layout_switch.type === 'profile';
	}
	get invoice() {
		return this.layout_switch && this.layout_switch.type === 'invoice';
	}

	createMailForm() {
		const emailValidator = [
			Validators.required,
			Validators.maxLength(100),
			Validators.pattern(EMAIL_REGEX_PATTERN)
		];

		this.emailForm = this.fb.group({
			email: ['', emailValidator]
		})
	}

	agentInvite() {
		this.store.dispatch(new AgentInvitationAction(this.emailForm.get('email').value));
		this.emailForm.get('email').reset('');
	}


	subMenuClose() {
		if (this.profile) {
			this.nav.goToFeed();
		} else if (this.invoice) {
			this.onGoToAgentProfile();
		}
	}

	changeProfMenuTitle(invoiceTitle?: string) {
		if (this.profile) {
			this.layout_switch.profMenuTitle = this.translate.instant('PROFMENU.AGENT_PROFILE');
		} else if (this.invoice && invoiceTitle) {
			this.layout_switch.profMenuTitle = invoiceTitle;
		}
	}

	onGoToInvoice(invoiceId: number) {
		this.store.dispatch(new GetAgentInvoiceDetailsAction(invoiceId));
		this.agentInvoiceDetails$.subscribe( res => {
			let title = this.translate.instant('AGENT_INVOICE.RECEIPT'),
				month = moment(res.invoiceDateFrom).format('LLL').split(' ')[0],
				day = moment(res.invoiceDateFrom).format('L').split('/')[1],
				year = moment(res.invoiceDateFrom).format('L').split('/')[2],
				result = title +' '+ day +'. '+ month +' '+ year;

			this.switchMethod('invoice', 'fa-file-text-o', result);
		});
	}

	onGoToAgentProfile() {
		this.switchMethod('profile', 'fa-briefcase');
	}

	switchMethod(type: string, icon: string, title?: string) {
		this.layout_switch.type = type;
		this.layout_switch.pageIconClassName = icon;
		this.changeProfMenuTitle(title);
		(<any>window).scrollTo(0, 0);
	}
}