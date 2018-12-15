import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentProfileContainerComponent } from "./agent-profile-container.component";


const AGENT_ROUTES: Routes = [
	{
		path: '',
		component: AgentProfileContainerComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(AGENT_ROUTES),
	],
	exports: [
		RouterModule
	],
})

export class AgentProfileRoutingModule {}
