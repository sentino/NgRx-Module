import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
	selector: 'app-agent-profile-invoice',
	template: `
      <div class="nmv1-sec">

          <h1 class="nmv1-agent-profile__title">{{ 'AGENT_PROFILE.INVOICE.TITLE' | translate }}</h1>
          <p class="nmv1-agent-profile__description">{{ 'AGENT_PROFILE.INVOICE.DESCRIPTION' | translate }}</p>
          <!-- ROW 1 -->
		      <div *ngIf="invoices && invoices.length">
	          <div class="nmv1-row" *ngFor="let invoice of invoices">
	              <div class="nmv1-col-xs-12 nmv1-col-sm-10">
	                  <div class="nmv1-input-group nmv1-input-group--icons-left">
	                      <!-- nm_file-text-o.svg-->
	                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	                          <rect x="17.88" y="37.63" width="28.69" height="3" />
	                          <rect x="17.88" y="48.06" width="28.69" height="3" />
	                          <path d="M7.44,63.5H57a1.5,1.5,0,0,0,1.5-1.5V20.26a1.33,1.33,0,0,0,0-.28h0a1.11,1.11,0,0,0-.13-.36l0-.09a1.78,1.78,0,0,0-.24-.32L39.81.94a1.44,1.44,0,0,0-.32-.23l-.09,0a1.48,1.48,0,0,0-.35-.13h0a1.33,1.33,0,0,0-.28,0H7.44A1.5,1.5,0,0,0,5.94,2V62A1.5,1.5,0,0,0,7.44,63.5Zm46-44.74H40.25V5.62ZM8.94,3.5H37.25V20.26a1.5,1.5,0,0,0,1.5,1.5H55.51V60.5H8.94Z" />
	                          <rect x="17.88" y="27.19" width="14.35" height="3" />
	                      </svg>
	                      <p class="nmv1-input-group--input nmv1-input-group--gap nmv1-align-left">{{ invoice.invoiceDate | dateFormatMonth }}</p>
	                  </div>
	              </div>
	              <div class="nmv1-col-xs-12 nmv1-col-sm-2">
	                  <a class="nmv1-button nmv1-is-bg-middel-blue" (click)="goToInvoice.emit(invoice.invoiceId)">{{ 'AGENT_PROFILE.INVOICE.VIEW' | translate }}</a>
	              </div>
	          </div>
		      </div>
          <!-- END ROW 1 -->
          
      </div>
	`
})

export class AgentProfileInvoiceComponent {

	@Input() invoices;

	@Output() goToInvoice: EventEmitter<number> = new EventEmitter<number>();

}