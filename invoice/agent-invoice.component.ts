import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
	selector: 'agent-invoice',
	template: `
		<div *ngIf="agent && invoice">
		  <h1 class="nmv1-receipt__title">{{ 'AGENT_INVOICE.TITLE' | translate:{month:invoice.invoiceDateFrom | dateFormatMonth} }}</h1>
		  <p class="nmv1-receipt__description">{{ 'AGENT_INVOICE.DESCRIPTION' | translate }}</p>
		
		  <div class="nmv1-receipt">
		
		      <div class="nmv1-row">
		          <div class="nmv1-col-xs-4 nmv1-col-sm-4 nmv1-col-md-3 nmv1-col-lg-2">
		              {{ 'AGENT_INVOICE.DATE' | translate }}
		          </div>
		          <div class="nmv1-col-xs-8 nmv1-col-sm-8 nmv1-col-md-9 nmv1-col-lg-10">
		              {{ 'AGENT_INVOICE.FROM' | translate:{date:invoice.invoiceDateFrom | dateFormatDDMonthYYYY} }}
				          {{ 'AGENT_INVOICE.TO' | translate:{date:invoice.invoiceDate | dateFormatDDMonthYYYY} }}
		          </div>
		      </div>
		
		      <div class="nmv1-hr nmv1-is-bg-container"></div>
		
		      <div class="nmv1-row">
		
		          <div class="nmv1-col-xs-4 nmv1-col-sm-4 nmv1-col-md-3 nmv1-col-lg-2">
		              {{ 'AGENT_INVOICE.OUR_REFERENCE' | translate }}
		          </div>
		
		          <div class="nmv1-col-xs-8 nmv1-col-sm-8 nmv1-col-md-9 nmv1-col-lg-10">
		              <p>{{agent.fullName}}</p>
		              <br>
		              <p>{{agent.address}}</p>
		          </div>
		
		      </div>
		
		  </div>
		
		
		  <div class="nmv1-receipt">
		
		      <div class="nmv1-row">
		
		          <div class="nmv1-col-xs-4 nmv1-col-sm-4 nmv1-col-md-3 nmv1-col-lg-2">
		              {{ 'AGENT_INVOICE.INVOICE_TO' | translate }}
		          </div>
		
		          <div class="nmv1-col-xs-8 nmv1-col-sm-8 nmv1-col-md-9 nmv1-col-lg-10">
		              <p>Nova Manus AS (913 535 782)</p>
		              <br>
		              <p>Træleborgodden 2</p>
		              <p>3112 Tønsberg</p>
		              <p>Norway</p>
		              <br>
		              <a href="mail:invoice@novamanus.com" class="nmv1-receipt--link">invoice@novamanus.com</a>
		          </div>
		
		      </div>
		
		      <div class="nmv1-hr nmv1-is-bg-container"></div>
		
		      <div class="nmv1-row">
		          <div class="nmv1-col-xs-4 nmv1-col-sm-4 nmv1-col-md-3 nmv1-col-lg-2">
		              {{ 'AGENT_INVOICE.DETAILS' | translate }}
		          </div>
		          <div class="nmv1-col-xs-8 nmv1-col-sm-8 nmv1-col-md-9 nmv1-col-lg-10">
		              {{invoice.invoiceId}}
		          </div>
		      </div>
		
		      <div class="nmv1-hr nmv1-is-bg-container"></div>
		
		      <div class="nmv1-row">
		          <div class="nmv1-col-xs-4 nmv1-col-sm-4 nmv1-col-md-3 nmv1-col-lg-2">
		              {{ 'AGENT_INVOICE.TOTAL_EX' | translate }}
		          </div>
		          <div class="nmv1-col-xs-8 nmv1-col-sm-8 nmv1-col-md-9 nmv1-col-lg-10">
	                {{invoice.currency}} {{invoice.agentPaymentTotal | priceFormat}}
		          </div>
		      </div>
		
		      <div class="nmv1-hr nmv1-is-bg-container"></div>
		
		      <div class="nmv1-row">
		          <div class="nmv1-col-xs-4 nmv1-col-sm-4 nmv1-col-md-3 nmv1-col-lg-2">
		              {{ 'AGENT_INVOICE.VAT25' | translate }}
		          </div>
		          <div class="nmv1-col-xs-8 nmv1-col-sm-8 nmv1-col-md-9 nmv1-col-lg-10">
	                {{invoice.currency}} {{invoice.vat | priceFormat}}
		          </div>
		      </div>
		
		      <div class="nmv1-hr nmv1-is-bg-container"></div>
		
		      <div class="nmv1-row">
		          <div class="nmv1-col-xs-4 nmv1-col-sm-4 nmv1-col-md-3 nmv1-col-lg-2">
		              <p class="nmv1-weight-900">{{ 'AGENT_INVOICE.TOTAL_INC' | translate }}</p>
		          </div>
		          <div class="nmv1-col-xs-8 nmv1-col-sm-8 nmv1-col-md-9 nmv1-col-lg-10">
		              <p class="nmv1-weight-900">{{invoice.currency}} {{invoice.agentPaymentIncVAT | priceFormat}}</p>
		          </div>
		      </div>
		
		  </div>
		
		  <!--Subscription details -->
		  <p class="nmv1-receipt__description">{{ 'AGENT_INVOICE.DESCRIPTION2' | translate }}</p>
		
			<div *ngIf="invoice.usage && invoice.usage.length">
			  <div class="nmv1-receipt" *ngFor="let item of invoice.usage">
			
			      <div class="nmv1-row">
			
			          <div class="nmv1-col-xs-4 nmv1-col-sm-4 nmv1-col-md-3 nmv1-col-lg-2">
			              <p *ngIf="item.threshold === 0.50">{{ 'AGENT_INVOICE.DETAILS2' | translate }}</p>
			              <p *ngIf="item.threshold === 0.35">{{ 'AGENT_INVOICE.DETAILS3' | translate }}</p>
			              <p *ngIf="item.threshold === 0.25">{{ 'AGENT_INVOICE.DETAILS4' | translate }}</p>
			          </div>
			
			          <div class="nmv1-col-xs-1 nmv1-col-sm-2 nmv1-col-md-2 nmv1-col-lg-1">
			              <p>{{ item.totalClients | priceFormat}}</p>
			          </div>
			
			          <div class="nmv1-col-xs-5 nmv1-col-sm-3 nmv1-col-md-4 nmv1-col-lg-6">
			              <p>{{ 'AGENT_INVOICE.LESS' | translate }}</p>
			          </div>
			
			          <div class="nmv1-col-xs-2 nmv1-col-sm-3 nmv1-col-md-3 nmv1-col-lg-3">
			              <p class="nmv1-align-right">{{invoice.currency}} {{ item.totalDue | priceFormat}}</p>
			          </div>
			
			      </div>
			
			  </div>
			</div>
		  <!-- END Subscription details -->
		
		
		
		  <!--button-->
		  <div class="nmv1-row nmv1-p-t nmv1-p-b">
		      <div class="nmv1-col-xs-12 nmv1-col-sm-2">
		          <a (click)="goToAgentProfile.emit();" class="nmv1-button nmv1-is-bg-blue-50">{{ 'BACK' | translate }}</a>
		      </div>
		
		      <div class="nmv1-col-xs-12 nmv1-col-sm-10">
		      </div>
		
		  </div>
		  <!--END button-->
		</div>
	`
})

export class AgentInvoiceComponent {

	@Input() agent;
	@Input() invoice;

	@Output() goToAgentProfile: EventEmitter<any> = new EventEmitter();

}