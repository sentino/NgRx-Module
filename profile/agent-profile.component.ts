import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
	selector: 'app-agent-profile',
	template: `		
	  <div class="nmv1-agent-profile">
	      <!-- START SECTION Agent profile overview -->
	      <app-agent-profile-overview
	              [agent]="agent">
	      </app-agent-profile-overview>
	      <!-- END SECTION Agent profile overview -->
	      
	      <!-- START SECTION Send new invitation -->
	      <app-agent-profile-invitation
	              [form]="form"
	              (next)="nextAgentInvite()">
	      </app-agent-profile-invitation>
	      <!-- END SECTION Send new invitation -->
	
	      <horizontal-line></horizontal-line>
	      
	      <!-- START SECTION Invoice data -->
	      <app-agent-profile-invoice
	              [invoices]="invoices"
	              (goToInvoice)="nextOnGoToInvoice($event)">
	      </app-agent-profile-invoice>
	      <!-- END SECTION Invoice data -->
	
	      <horizontal-line></horizontal-line>
	
	      <!-- START SECTION Clients -->
	      <app-agent-profile-clients
                [pendingClients]="pendingClients"
                [activeClients]="activeClients"
                [lostClients]="lostClients">
	      </app-agent-profile-clients>
	      <!-- END SECTION Clients -->
	
	      <!-- START SECTION Documentation -->
	      <app-agent-profile-documentation>
	      </app-agent-profile-documentation>
	      <!-- START SECTION Documentation -->
	
	      <horizontal-line></horizontal-line>
	
	      <!-- START SECTION Organisation number -->
	      <app-agent-profile-organisation
	              [agent]="agent">
	      </app-agent-profile-organisation>
	      <!-- END SECTION Organisation number -->
	
	  </div>
	`
})

export class AgentProfileComponent {

	@Input() agent;
	@Input() pendingClients;
	@Input() activeClients;
	@Input() lostClients;
	@Input() invoices;
	@Input() form;

	@Output() next: EventEmitter<any> = new EventEmitter<any>();
	@Output() goToInvoice: EventEmitter<number> = new EventEmitter<number>();

	nextAgentInvite() {
		this.next.emit();
	}

	nextOnGoToInvoice(invoiceId: number) {
		this.goToInvoice.emit(invoiceId);
	}
}