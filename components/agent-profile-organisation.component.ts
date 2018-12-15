import { Component, Input } from "@angular/core";


@Component({
	selector: 'app-agent-profile-organisation',
	template: `
      <div class="nmv1-sec">
          <h1 class="nmv1-agent-profile__title">{{ 'AGENT_PROFILE.ORGANISATION.TITLE' | translate }}</h1>
          <p class="nmv1-agent-profile__description">{{ 'AGENT_PROFILE.ORGANISATION.DESCRIPTION' | translate }}</p>
          <div class="nmv1-row">
              <div class="nmv1-col-xs-12 nmv1-col-sm-3">
                  <div class="nmv1-agent-profile__inoice-detail">
                      <div class="nmv1-agent-profile__inoice-detail--icon">
                          <!-- nm_suitcase.svg -->
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                              <path d="M62,13.48H43.5V6A1.5,1.5,0,0,0,42,4.48H22A1.5,1.5,0,0,0,20.5,6v7.5H2A1.5,1.5,0,0,0,.5,15V58A1.5,1.5,0,0,0,2,59.52H62A1.5,1.5,0,0,0,63.5,58V15A1.5,1.5,0,0,0,62,13.48Zm-38.5-6h17v6h-17Zm37,49H3.5v-40h57Z" />
                          </svg>
                      </div>
                      <div class="nmv1-switch-container--input">
                          <p class="nmv1-input-group--input-with-text">{{agent.taxNumber}}</p>
                      </div>
                  </div>
              </div>
              <div class="nmv1-col-xs-12 nmv1-col-sm-9">
                  <div class="nmv1-agent-profile__inoice-detail">
                      <div class="nmv1-switch-container--input">
                          <p class="nmv1-input-group--input-with-text">{{agent.address}}</p>
                      </div>
                  </div>
              </div>

          </div>
      </div>
	`
})

export class AgentProfileOrganisationComponent {

	@Input() agent: any;

}