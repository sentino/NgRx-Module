import { Component, Input } from "@angular/core";


@Component({
	selector: 'app-agent-profile-clients',
	template: `
      <div class="nmv1-sec">
          <h1 class="nmv1-agent-profile__title">{{ 'AGENT_PROFILE.CLIENTS.TITLE' | translate }}</h1>
          <p class="nmv1-agent-profile__description">{{ 'AGENT_PROFILE.CLIENTS.DESCRIPTION' | translate }}</p>
          <h4 class="nmv1-agent-profile__sub-title">{{ 'AGENT_PROFILE.CLIENTS.SUBTITLE1' | translate:pendingCount }}</h4>
          <!-- ROW -->
          <div class="nmv1-row" *ngIf="pendingClients && pendingClients.length">

              <!--<div class="nmv1-col-xs-12 nmv1-col-lg-6">-->
                  <!--<div class="nmv1-agent-profile__client-item">-->
                      <!--<div class="nmv1-agent-profile__client-item&#45;&#45;icon">-->
                          <!--&lt;!&ndash; nm_search.svg &ndash;&gt;-->
                          <!--<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">-->
                              <!--<path d="M8.26,45.75A26.54,26.54,0,0,0,41.77,49l14,14a1.53,1.53,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l5.14-5.14a1.49,1.49,0,0,0,0-2.12l-14-14a26.51,26.51,0,1,0-40.77,4ZM59.88,56.86l-3,3L44.17,47.19c.54-.46,1.07-.94,1.58-1.44s1-1,1.44-1.58ZM27,3.51a23.5,23.5,0,1,1-16.63,6.87A23.47,23.47,0,0,1,27,3.51Z" />-->
                              <!--<path d="M18.52,35.49a12,12,0,0,1,0-17L16.4,16.4a15,15,0,0,0,0,21.21Z" />-->
                          <!--</svg>-->
                      <!--</div>-->
                      <!--<div class="nmv1-switch-container&#45;&#45;input">-->
                          <!--<input type="text" placeholder="{{ 'AGENT_PROFILE.CLIENTS.SEARCH_PLACEHOLDER' | translate }}">-->
                      <!--</div>-->
                  <!--</div>-->
              <!--</div>-->

              <div class="nmv1-col-xs-12 nmv1-col-lg-6" *ngFor="let pendingClient of pendingClients">
                  <div class="nmv1-agent-profile__client-item" style="height: 63px;">
                      <div class="nmv1-agent-profile__client-item--icon">
                          <svg height="51" viewBox="0 0 51 51" width="51" xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" transform="translate(-678 -323)">
                                  <path d="m703.566 373.839c-13.807 0-25-11.193-25-25s11.193-25 25-25 25 11.193 25 25-11.192 25-25 25z"
                                        fill="#afc2d9" />
                                  <path d="m717.345 341.847v18.152a.889.889 0 0 1 -.889.889h-26a.889.889 0 0 1 -.889-.889v-18.152c0-.491.398-.889.889-.889h26c.491 0 .889.398.889.889z"
                                        fill="#002453" />
                                  <g transform="translate(697 335)">
                                      <path d="m1.827 5.958v-4.167h9.257v4.167" fill="#fff" />
                                      <path d="m11.92 5.958h-1.67v-3.332h-7.587v3.332h-1.67v-4.167c0-.461.374-.835.835-.835h9.258c.461 0 .835.374.835.835v4.167z"
                                            fill="#002453" />
                                  </g>
                              </g>
                          </svg>
                      </div>

                      <div class=" nmv1-agent-profile__client-item--flex">
                          <p class="nmv1-weight-700">{{pendingClient.emailAddress}}</p>
                      </div>

                      <p class="nmv1-p-r-quarter nmv1-is-grey nmv1-weight-700">{{ 'AGENT_PROFILE.CLIENTS.PENDING' | translate }} {{pendingClient.memberSince | date:'dd.MM.yyyy'}}</p>

                      <a href="mailto:{{pendingClient.emailAddress}}" class="nmv1-agent-profile__client-item--icon">
                          <!-- nm_envelop-o.svg-->
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                              <path d="M63.48,10.32a1.36,1.36,0,0,0-.07-.35.06.06,0,0,1,0,0h0a1.51,1.51,0,0,0-.2-.35l0-.06a1.86,1.86,0,0,0-.29-.27h0a1.28,1.28,0,0,0-.35-.18L62.4,9A1.34,1.34,0,0,0,62,9H2A1.34,1.34,0,0,0,1.6,9l-.09,0a1.28,1.28,0,0,0-.35.18h0a1.86,1.86,0,0,0-.29.27l0,.06a1.51,1.51,0,0,0-.2.35h0a.06.06,0,0,1,0,0,1.36,1.36,0,0,0-.07.35.28.28,0,0,0,0,.09s0,0,0,.07v43A1.5,1.5,0,0,0,2,55H62a1.5,1.5,0,0,0,1.5-1.5v-43s0-.05,0-.07A.28.28,0,0,0,63.48,10.32ZM60.5,50l-19.62-18,19.62-18ZM38.67,34,58.15,51.88H5.85L25.33,34,31,39.16a1.5,1.5,0,0,0,2,0ZM3.5,50V13.89l19.62,18ZM58.15,12,32,36,5.85,12Z" />
                          </svg>
                      </a>

                  </div>

              </div>


          </div>
          <!-- END ROW -->


          <horizontal-line></horizontal-line>
		      
		      
          <h4 class="nmv1-agent-profile__sub-title">{{ 'AGENT_PROFILE.CLIENTS.SUBTITLE2' | translate:activeCount }}</h4>
          <!-- ROW -->
          <div class="nmv1-row" *ngIf="activeClients && activeClients.length">

              <!--<div class="nmv1-col-xs-12 nmv1-col-lg-6">-->
                  <!--<div class="nmv1-agent-profile__client-item">-->
                      <!--<div class="nmv1-agent-profile__client-item&#45;&#45;icon">-->
                          <!--&lt;!&ndash; nm_search.svg &ndash;&gt;-->
                          <!--<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">-->
                              <!--<path d="M8.26,45.75A26.54,26.54,0,0,0,41.77,49l14,14a1.53,1.53,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l5.14-5.14a1.49,1.49,0,0,0,0-2.12l-14-14a26.51,26.51,0,1,0-40.77,4ZM59.88,56.86l-3,3L44.17,47.19c.54-.46,1.07-.94,1.58-1.44s1-1,1.44-1.58ZM27,3.51a23.5,23.5,0,1,1-16.63,6.87A23.47,23.47,0,0,1,27,3.51Z" />-->
                              <!--<path d="M18.52,35.49a12,12,0,0,1,0-17L16.4,16.4a15,15,0,0,0,0,21.21Z" />-->
                          <!--</svg>-->
                      <!--</div>-->
                      <!--<div class="nmv1-switch-container&#45;&#45;input">-->
                          <!--<input type="text" placeholder="{{ 'AGENT_PROFILE.CLIENTS.SEARCH_PLACEHOLDER' | translate }}">-->
                      <!--</div>-->
                  <!--</div>-->
              <!--</div>-->
		          
              <div class="nmv1-col-xs-12 nmv1-col-lg-6" *ngFor="let activeClient of activeClients">
                  <div class="nmv1-agent-profile__client-item">
                      <div class="nmv1-agent-profile__client-item--icon">
                          <svg height="51" viewBox="0 0 51 51" width="51" xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" transform="translate(-678 -323)">
                                  <path d="m703.566 373.839c-13.807 0-25-11.193-25-25s11.193-25 25-25 25 11.193 25 25-11.192 25-25 25z"
                                        fill="#afc2d9" />
                                  <path d="m717.345 341.847v18.152a.889.889 0 0 1 -.889.889h-26a.889.889 0 0 1 -.889-.889v-18.152c0-.491.398-.889.889-.889h26c.491 0 .889.398.889.889z"
                                        fill="#002453" />
                                  <g transform="translate(697 335)">
                                      <path d="m1.827 5.958v-4.167h9.257v4.167" fill="#fff" />
                                      <path d="m11.92 5.958h-1.67v-3.332h-7.587v3.332h-1.67v-4.167c0-.461.374-.835.835-.835h9.258c.461 0 .835.374.835.835v4.167z"
                                            fill="#002453" />
                                  </g>
                              </g>
                          </svg>
                      </div>

                      <div class=" nmv1-agent-profile__client-item--flex">
                          <p class="nmv1-weight-700">{{activeClient.businessName}}</p>
                          <p class="nmv1-is-grey nmv1-weight-700">{{activeClient.city}}</p>
                      </div>

                      <p class="nmv1-p-r-quarter nmv1-is-grey nmv1-weight-700">{{ 'AGENT_PROFILE.CLIENTS.MEMBER' | translate }} {{activeClient.memberSince | date:'dd.MM.yyyy'}}</p>

                      <a href="mailto:{{activeClient.emailAddress}}" class="nmv1-agent-profile__client-item--icon">
                          <!-- nm_envelop-o.svg-->
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                              <path d="M63.48,10.32a1.36,1.36,0,0,0-.07-.35.06.06,0,0,1,0,0h0a1.51,1.51,0,0,0-.2-.35l0-.06a1.86,1.86,0,0,0-.29-.27h0a1.28,1.28,0,0,0-.35-.18L62.4,9A1.34,1.34,0,0,0,62,9H2A1.34,1.34,0,0,0,1.6,9l-.09,0a1.28,1.28,0,0,0-.35.18h0a1.86,1.86,0,0,0-.29.27l0,.06a1.51,1.51,0,0,0-.2.35h0a.06.06,0,0,1,0,0,1.36,1.36,0,0,0-.07.35.28.28,0,0,0,0,.09s0,0,0,.07v43A1.5,1.5,0,0,0,2,55H62a1.5,1.5,0,0,0,1.5-1.5v-43s0-.05,0-.07A.28.28,0,0,0,63.48,10.32ZM60.5,50l-19.62-18,19.62-18ZM38.67,34,58.15,51.88H5.85L25.33,34,31,39.16a1.5,1.5,0,0,0,2,0ZM3.5,50V13.89l19.62,18ZM58.15,12,32,36,5.85,12Z" />
                          </svg>
                      </a>

                      <a href="tel:{{activeClient.phoneNumber}}" class="nmv1-agent-profile__client-item--icon">
                          <!-- nm_mobile-phone.svg-->
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                              <path d="M50.14,63.5a1.5,1.5,0,0,0,1.5-1.5V2A1.5,1.5,0,0,0,50.14.5H14.48A1.5,1.5,0,0,0,13,2V62a1.5,1.5,0,0,0,1.5,1.5ZM16,60.5V52.92H48.64V60.5Zm0-10.58V14.08H48.64V49.92ZM48.64,3.5v7.58H16V3.5Z" />
                              <path d="M32.16,54.33a2.38,2.38,0,1,0,2.38,2.38A2.38,2.38,0,0,0,32.16,54.33Z" />
                          </svg>
                      </a>

                  </div>
              </div>

          </div>
          <!-- END ROW -->

          <!--<div class="nmv1-agent-profile__sub-title">-->
              <!--<a class="nmv1-button&#45;&#45;with-border-blue nmv1-button-sm nmv1-button-sm&#45;&#45;normal nmv1-button-with-radius nmv1-is-bg-white nmv1-is-blue-70">-->
                  <!--{{ 'AGENT_PROFILE.CLIENTS.LOAD_MORE' | translate }}-->
              <!--</a>-->
          <!--</div>-->


          <horizontal-line></horizontal-line>
		      
		      
          <h4 class="nmv1-agent-profile__sub-title">{{ 'AGENT_PROFILE.CLIENTS.SUBTITLE3' | translate:lostCount }}</h4>
          <!-- ROW -->
          <div class="nmv1-row" *ngIf="lostClients && lostClients.length">

              <!--<div class="nmv1-col-xs-12 nmv1-col-lg-6">-->
                  <!--<div class="nmv1-agent-profile__client-item">-->
                      <!--<div class="nmv1-agent-profile__client-item&#45;&#45;icon">-->
                          <!--&lt;!&ndash; nm_search.svg &ndash;&gt;-->
                          <!--<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">-->
                              <!--<path d="M8.26,45.75A26.54,26.54,0,0,0,41.77,49l14,14a1.53,1.53,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l5.14-5.14a1.49,1.49,0,0,0,0-2.12l-14-14a26.51,26.51,0,1,0-40.77,4ZM59.88,56.86l-3,3L44.17,47.19c.54-.46,1.07-.94,1.58-1.44s1-1,1.44-1.58ZM27,3.51a23.5,23.5,0,1,1-16.63,6.87A23.47,23.47,0,0,1,27,3.51Z" />-->
                              <!--<path d="M18.52,35.49a12,12,0,0,1,0-17L16.4,16.4a15,15,0,0,0,0,21.21Z" />-->
                          <!--</svg>-->
                      <!--</div>-->
                      <!--<div class="nmv1-switch-container&#45;&#45;input">-->
                          <!--<input type="text" placeholder="{{ 'AGENT_PROFILE.CLIENTS.SEARCH_PLACEHOLDER' | translate }}">-->
                      <!--</div>-->
                  <!--</div>-->
              <!--</div>-->

              <div class="nmv1-col-xs-12 nmv1-col-lg-6" *ngFor="let lostClient of lostClients">
                  <div class="nmv1-agent-profile__client-item nmv1-is-bg-blue-10">
                      <div class="nmv1-agent-profile__client-item--icon">
                          <svg height="51" viewBox="0 0 51 51" width="51" xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" transform="translate(-678 -323)">
                                  <path d="m703.566 373.839c-13.807 0-25-11.193-25-25s11.193-25 25-25 25 11.193 25 25-11.192 25-25 25z"
                                        fill="#afc2d9" />
                                  <path d="m717.345 341.847v18.152a.889.889 0 0 1 -.889.889h-26a.889.889 0 0 1 -.889-.889v-18.152c0-.491.398-.889.889-.889h26c.491 0 .889.398.889.889z"
                                        fill="#002453" />
                                  <g transform="translate(697 335)">
                                      <path d="m1.827 5.958v-4.167h9.257v4.167" fill="#fff" />
                                      <path d="m11.92 5.958h-1.67v-3.332h-7.587v3.332h-1.67v-4.167c0-.461.374-.835.835-.835h9.258c.461 0 .835.374.835.835v4.167z"
                                            fill="#002453" />
                                  </g>
                              </g>
                          </svg>
                      </div>

                      <div class=" nmv1-agent-profile__client-item--flex">
                          <p class="nmv1-weight-700">{{lostClient.businessName}}</p>
                          <p class="nmv1-is-grey nmv1-weight-700">{{lostClient.city}}</p>
                      </div>

                      <p class="nmv1-p-r-quarter nmv1-is-grey nmv1-weight-700">{{ 'AGENT_PROFILE.CLIENTS.MEMBER' | translate }} {{lostClient.memberSince | date:'dd.MM.yyyy'}}</p>

                      <a href="mailto:{{lostClient.emailAddress}}" class="nmv1-agent-profile__client-item--icon">
                          <!-- nm_envelop-o.svg-->
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                              <path d="M63.48,10.32a1.36,1.36,0,0,0-.07-.35.06.06,0,0,1,0,0h0a1.51,1.51,0,0,0-.2-.35l0-.06a1.86,1.86,0,0,0-.29-.27h0a1.28,1.28,0,0,0-.35-.18L62.4,9A1.34,1.34,0,0,0,62,9H2A1.34,1.34,0,0,0,1.6,9l-.09,0a1.28,1.28,0,0,0-.35.18h0a1.86,1.86,0,0,0-.29.27l0,.06a1.51,1.51,0,0,0-.2.35h0a.06.06,0,0,1,0,0,1.36,1.36,0,0,0-.07.35.28.28,0,0,0,0,.09s0,0,0,.07v43A1.5,1.5,0,0,0,2,55H62a1.5,1.5,0,0,0,1.5-1.5v-43s0-.05,0-.07A.28.28,0,0,0,63.48,10.32ZM60.5,50l-19.62-18,19.62-18ZM38.67,34,58.15,51.88H5.85L25.33,34,31,39.16a1.5,1.5,0,0,0,2,0ZM3.5,50V13.89l19.62,18ZM58.15,12,32,36,5.85,12Z" />
                          </svg>
                      </a>

                      <a href="tel:{{lostClient.phoneNumber}}" class="nmv1-agent-profile__client-item--icon">
                          <!-- nm_mobile-phone.svg-->
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                              <path d="M50.14,63.5a1.5,1.5,0,0,0,1.5-1.5V2A1.5,1.5,0,0,0,50.14.5H14.48A1.5,1.5,0,0,0,13,2V62a1.5,1.5,0,0,0,1.5,1.5ZM16,60.5V52.92H48.64V60.5Zm0-10.58V14.08H48.64V49.92ZM48.64,3.5v7.58H16V3.5Z" />
                              <path d="M32.16,54.33a2.38,2.38,0,1,0,2.38,2.38A2.38,2.38,0,0,0,32.16,54.33Z" />
                          </svg>
                      </a>

                  </div>

              </div>


          </div>
          <!-- END ROW -->

		      
          <horizontal-line></horizontal-line>

      </div>
	`
})

export class AgentProfileClientsComponent {

	@Input() pendingClients;
	@Input() activeClients;
	@Input() lostClients;

	get pendingCount() {
		return {
			count: this.pendingClients ? this.pendingClients.length : 0
		}
	}

	get activeCount() {
		return {
			count: this.activeClients ? this.activeClients.length : 0
		}
	}

	get lostCount() {
		return {
			count: this.lostClients ? this.lostClients.length : 0
		}
	}

}