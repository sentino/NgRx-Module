import { NgModule } from "@angular/core";
import { SharedModule } from "@novamanus/sharedModule";
import { AgentProfileContainerComponent } from "./agent-profile-container.component";
import { AgentProfileOverviewComponent } from "./components/agent-profile-overview.component";
import { AgentProfileInvitationComponent } from "./components/agent-profile-invitation.component";
import { AgentProfileInvoiceComponent } from "./components/agent-profile-invoice.component";
import { AgentProfileClientsComponent } from "./components/agent-profile-clients.component";
import { AgentProfileDocumentationComponent } from "./components/agent-profile-documentation.component";
import { AgentProfileOrganisationComponent } from "./components/agent-profile-organisation.component";
import { AgentInvoiceComponent } from "./invoice/agent-invoice.component";
import { AgentProfileComponent } from "./profile/agent-profile.component";
import { StoreModule } from "@ngrx/store";

import { STATE } from "../../../constant";
import { EffectsModule } from "@ngrx/effects";
import * as fromAgent from "./store/";
import { AgentProfileRoutingModule } from "./agent-profile-routing.module";


@NgModule({
	imports: [
		SharedModule,
		AgentProfileRoutingModule,
		StoreModule.forFeature(STATE.AGENT, fromAgent.reducer),
		EffectsModule.forFeature([fromAgent.AgentEffects]),
	],
	declarations: [
		AgentInvoiceComponent,
		AgentProfileComponent,
		AgentProfileContainerComponent,
		AgentProfileOverviewComponent,
		AgentProfileInvitationComponent,
		AgentProfileInvoiceComponent,
		AgentProfileClientsComponent,
		AgentProfileDocumentationComponent,
		AgentProfileOrganisationComponent,
	]
})
export class AgentProfileModule {

}