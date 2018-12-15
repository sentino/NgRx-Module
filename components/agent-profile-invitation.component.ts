import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";


@Component({
	selector: 'app-agent-profile-invitation',
	template: `
      <div class="nmv1-sec">
          <h1 class="nmv1-agent-profile__title">{{ 'AGENT_PROFILE.INVITATION.TITLE' | translate }}</h1>
          <p class="nmv1-agent-profile__description">{{ 'AGENT_PROFILE.INVITATION.DESCRIPTION' | translate }}</p>
		      
          <div class="nmv1-row" [formGroup]="form">
              <div class="nmv1-col-xs-12 nmv1-col-sm-9 nmv1-col-md-10">
                  <div class="nmv1-input-group nmv1-input-group--icons-left">
                      <!-- nm_envelope-o.svg-->
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                          <path d="M63.48,10.32a1.36,1.36,0,0,0-.07-.35.06.06,0,0,1,0,0h0a1.51,1.51,0,0,0-.2-.35l0-.06a1.86,1.86,0,0,0-.29-.27h0a1.28,1.28,0,0,0-.35-.18L62.4,9A1.34,1.34,0,0,0,62,9H2A1.34,1.34,0,0,0,1.6,9l-.09,0a1.28,1.28,0,0,0-.35.18h0a1.86,1.86,0,0,0-.29.27l0,.06a1.51,1.51,0,0,0-.2.35h0a.06.06,0,0,1,0,0,1.36,1.36,0,0,0-.07.35.28.28,0,0,0,0,.09s0,0,0,.07v43A1.5,1.5,0,0,0,2,55H62a1.5,1.5,0,0,0,1.5-1.5v-43s0-.05,0-.07A.28.28,0,0,0,63.48,10.32ZM60.5,50l-19.62-18,19.62-18ZM38.67,34,58.15,51.88H5.85L25.33,34,31,39.16a1.5,1.5,0,0,0,2,0ZM3.5,50V13.89l19.62,18ZM58.15,12,32,36,5.85,12Z" />
                      </svg>
                      <input
                              [class.nmv1-input-group--input-invalid]="form.touched && form.dirty && form.invalid"
                              [class.nmv1-input-group--input-valid]="form.touched && form.dirty && form.valid"
                              formControlName="email"
                              type="email"
				                      placeholder="{{'AGENT_PROFILE.INVITATION.TYPE'| translate}}"
				                      class="nmv1-input-group--input nmv1-input-group--gap nmv1-align-left">
                  </div>
              </div>
              <div class="nmv1-col-xs-12 nmv1-col-sm-3 nmv1-col-md-2">
                  <a class="nmv1-button nmv1-is-bg-middel-blue"
                     (click)="submitInvitation()">{{ 'AGENT_PROFILE.INVITATION.SEND' | translate }}</a>
              </div>

          </div>

      </div>
	`
})

export class AgentProfileInvitationComponent {

	@Input() form: FormGroup;

	@Output() next: EventEmitter<any> = new EventEmitter<any>();

	submitInvitation() {
		if (this.form.valid) {
			this.next.emit();
		}
	}

}