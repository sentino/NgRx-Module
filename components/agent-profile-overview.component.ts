import { Component, Input } from "@angular/core";

declare const moment: any;

@Component({
	selector: 'app-agent-profile-overview',
	template: `
      <div class="nmv1-sec">

          <h1 class="nmv1-agent-profile__title">{{ 'AGENT_PROFILE.OVERVIEW.TITLE' | translate }}</h1>
          <p class="nmv1-agent-profile__description">{{ 'AGENT_PROFILE.OVERVIEW.DESCRIPTION' | translate }}</p>
		      
          <!-- START ROW 1 -->
          <div class="nmv1-agent-profile__overview">
              <!-- ITEM 1 -->
              <div class="nmv1-agent-profile__overview__item">
                  <div class="nmv1-agent-profile__overview__item--title">
                      <p>{{ 'AGENT_PROFILE.OVERVIEW.ITEM1' | translate }}</p>
                  </div>
                  <p class="nmv1-agent-profile__overview__item--content--xl">{{agent.totalActiveClients}}</p>
              </div>
		          
              <!-- ITEM 2 -->
              <div class="nmv1-agent-profile__overview__item">
                  <div class="nmv1-agent-profile__overview__item--title">
                      <p>{{ 'AGENT_PROFILE.OVERVIEW.ITEM2' | translate }}</p>
                  </div>
                  <p class="nmv1-agent-profile__overview__item--content--xl">{{agent.totalEarned}}</p>
              </div>
		          
              <!-- ITEM 3 -->
              <div class="nmv1-agent-profile__overview__item">
                  <div class="nmv1-agent-profile__overview__item--title">
                      <p>{{ 'AGENT_PROFILE.OVERVIEW.ITEM3' | translate }}</p>
                      <p class="nmv1-is-grey">{{date}}</p>
                  </div>
                  <p class="nmv1-agent-profile__overview__item--content--xl nmv1-is-green">{{agent.nextPayoutAmount}}</p>
              </div>
          </div>
          <!-- END ROW 1 -->
		      
          <!-- START ROW 2 -->
          <div class="nmv1-agent-profile__overview">
              <!-- ITEM 1 -->
              <div class="nmv1-agent-profile__overview__item">
                  <div class="nmv1-agent-profile__overview__item--title">
                      <p>{{ 'AGENT_PROFILE.OVERVIEW.ITEM4.TITLE' | translate }}</p>
                      <p class="nmv1-is-grey">{{ 'AGENT_PROFILE.OVERVIEW.ITEM4.SIGNATURE' | translate }}</p>
                  </div>
                  <p class="nmv1-agent-profile__overview__item--content--l">{{agent.firstYearClients}}</p>
              </div>
		          
              <!-- ITEM 2 -->
              <div class="nmv1-agent-profile__overview__item">
                  <div class="nmv1-agent-profile__overview__item--title">
                      <p>{{ 'AGENT_PROFILE.OVERVIEW.ITEM5.TITLE' | translate }}</p>
                      <p class="nmv1-is-grey">{{ 'AGENT_PROFILE.OVERVIEW.ITEM5.SIGNATURE' | translate }}</p>
                  </div>
                  <p class="nmv1-agent-profile__overview__item--content--l">{{agent.secondYearClients}}</p>
              </div>
		          
              <!-- ITEM 3 -->
              <div class="nmv1-agent-profile__overview__item">
                  <div class="nmv1-agent-profile__overview__item--title">
                      <p>{{ 'AGENT_PROFILE.OVERVIEW.ITEM6.TITLE' | translate }}</p>
                      <p class="nmv1-is-grey">{{ 'AGENT_PROFILE.OVERVIEW.ITEM6.SIGNATURE' | translate }}</p>
                  </div>
                  <p class="nmv1-agent-profile__overview__item--content--l">{{agent.thirdYearClients}}</p>
              </div>
          </div>
          <!-- END ROW 2 -->
		      
          <p class="nmv1-agent-profile__description">{{ 'AGENT_PROFILE.OVERVIEW.SPECIFICATION' | translate }}</p>

      </div>
	`
})

export class AgentProfileOverviewComponent {

	@Input() agent: any;

	get date() {
		return moment().format('LLL').split(' ')[0]
	}

}