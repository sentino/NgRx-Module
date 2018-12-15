import { Component } from "@angular/core";


@Component({
	selector: 'app-agent-profile-documentation',
	template: `
      <div class="nmv1-sec">
          <h1 class="nmv1-agent-profile__title">{{ 'AGENT_PROFILE.DOCUMENTATION.TITLE' | translate }}</h1>
          <p class="nmv1-agent-profile__description">{{ 'AGENT_PROFILE.DOCUMENTATION.DESCRIPTION' | translate }}</p>
          <!-- ROW 1 -->
          <div class="nmv1-row">
              <div class="nmv1-col-xs-12 nmv1-col-lg-4">
                  <div class="nmv1-agent-profile__documentation">
                      <p class="nmv1-weight-700">{{ 'AGENT_PROFILE.DOCUMENTATION.ITEM1' | translate }}</p>
                  </div>
              </div>
              <div class="nmv1-col-xs-12 nmv1-col-lg-2">
                  <a class="nmv1-button nmv1-is-bg-green">
		                  {{ 'AGENT_PROFILE.DOCUMENTATION.DOWNLOAD' | translate }}
                  </a>
              </div>
              <div class="nmv1-col-xs-12 nmv1-col-lg-4">
                  <div class="nmv1-agent-profile__documentation">
                      <p class="nmv1-weight-700">{{ 'AGENT_PROFILE.DOCUMENTATION.ITEM2' | translate }}</p>
                  </div>
              </div>
              <div class="nmv1-col-xs-12 nmv1-col-lg-2">
                  <a href="https://novamanus.com/presentation?name=Navn" target="_blank" class="nmv1-button nmv1-is-bg-green">
                      {{ 'AGENT_PROFILE.DOCUMENTATION.GO_TO' | translate }}
                  </a>
              </div>

          </div>
          <!-- END ROW 1 -->
          <!-- ROW 2 -->
          <div class="nmv1-row">
              <div class="nmv1-col-xs-12 nmv1-col-lg-4">
                  <div class="nmv1-agent-profile__documentation">
                      <p class="nmv1-weight-700">{{ 'AGENT_PROFILE.DOCUMENTATION.ITEM3' | translate }}</p>
                  </div>
              </div>
              <div class="nmv1-col-xs-12 nmv1-col-lg-2">
                  <a download href="/assets/docs/HvordanLykkesSomBedriftPaNovaManus.pdf" target="_blank" class="nmv1-button nmv1-is-bg-green">
		                  {{ 'AGENT_PROFILE.DOCUMENTATION.DOWNLOAD' | translate }}
                  </a>
              </div>
              <div class="nmv1-col-xs-12 nmv1-col-lg-4">
                  <div class="nmv1-agent-profile__documentation">
                      <p class="nmv1-weight-700">{{ 'AGENT_PROFILE.DOCUMENTATION.ITEM4' | translate }}</p>
                  </div>
              </div>
              <div class="nmv1-col-xs-12 nmv1-col-lg-2">
                  <a href="https://staging.novamanus.com/faq" target="_blank" class="nmv1-button nmv1-is-bg-green">
                      {{ 'AGENT_PROFILE.DOCUMENTATION.GO_TO' | translate }}
                  </a>
              </div>

          </div>
          <!-- END ROW 2 -->
      </div>
	`
})

export class AgentProfileDocumentationComponent {

}