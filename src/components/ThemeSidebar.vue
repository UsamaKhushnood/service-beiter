<template>
  <div id="ThemeSidebar">
    <!-- LEFT MENU -->

    <div class="vd_navbar vd_nav-width vd_navbar-tabs-menu vd_navbar-left  ">
		
		<div class="navbar-menu clearfix">
			<!--<h3 class="menu-title hide-nav-medium hide-nav-small">Sidebar Header</h3>-->
			<div class="vd_menu scrolled-menu">
				<ul>
					<li>
						<router-link to="/dashboard">
							<span class="menu-icon"><i class="fa fa-dashboard"></i></span>
							<span class="menu-text">Dashboard</span>
						</router-link>
					</li>
					<li>
						<router-link to="/NewRequest">
							<span class="menu-icon"><i class="fa fa-flag-o"></i></span>
							<span class="menu-text">New Request</span>
						</router-link>
					</li>
					<!--<li>
						<router-link to="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-files-o"></i></span>
							<span class="menu-text">Reports</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</router-link>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<router-link to="ticket/" target="_blank"><span class="menu-text"><span class="append-icon icon-paperplane"></span> Ticket</span></router-link>
								</li>
								<li>
									<router-link to="Live_Chat/livechat/index.html" target="_blank"><span class="menu-text"><span class="append-icon icon-chat"></span> Live Chat</span></router-link>
								</li>
							</ul>
						</div>
					</li>-->
					<li>
						<router-link to="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-cubes"></i></span>
							<span class="menu-text">Activity</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</router-link>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<router-link to="/AllProjects"><span class="menu-text"><span class="append-icon icon-archive"></span> All Projects</span></router-link>
								</li>
								<li>
									<router-link to="/AllContracts"><span class="menu-text"><span class="append-icon icon-briefcase"></span> All Contracts</span></router-link>
								</li>
								<li>
									<router-link to="/Reviews"><span class="menu-text"><span class="append-icon fa fa-star-half-o"></span> Reviews</span></router-link>
								</li>
								<li>
									<router-link to="/Appointments"><span class="menu-text"><span class="append-icon fa fa-calendar"></span> Appointments</span></router-link>
								</li>
								<li>
									<router-link to="javascript:void(0);" data-action="click-trigger" class=""> 
										<span class="menu-text"><span class="append-icon icon-sharable"></span> Purchase Services</span> 
										<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
									</router-link> 
									<div class="child-menu" data-action="click-target" style="display: none;">
										<ul class="clearfix">
											<li> <router-link to="/AllServices"> 
												<span class="menu-text"><span class="append-icon icon-drawer"></span> All Services</span> 
												</router-link> 
											</li>
											<li> <router-link to="/SaleHistory"> 
												<span class="menu-text"><i class="append-icon fa fa-fw fa-history"></i> Sale History</span> 
												</router-link> 
											</li>
										</ul>
									</div>  
								</li>
								<li>
									<router-link to="javascript:void(0);" data-action="click-trigger" class=""> 
										<span class="menu-text"><span class="append-icon icon-graduation"></span> Jobs</span> 
										<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
									</router-link> 
									<div class="child-menu" data-action="click-target" style="display: none;">
										<ul class="clearfix">
											<li> <router-link to="/SearchJobs"> 
												<span class="menu-text"><i class="append-icon glyphicon glyphicon-zoom-in"></i> Search Jobs</span> 
												</router-link> 
											</li>
											<li> <router-link to="/JobOffers"> 
												<span class="menu-text"><span class="append-icon icon-megaphone"></span> Job Offers</span> 
												</router-link> 
											</li>
										</ul>
									</div>  
								</li>
							</ul>
						</div>
					</li>
					<li>
						<router-link to="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-bar-chart-o"></i></span>
							<span class="menu-text">Marketing</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</router-link>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<router-link to="/NewsLetter" target="_blank"><span class="menu-text"><i class="append-icon fa fa-fw fa-envelope"></i> News Letter</span></router-link>
								</li>
								<li>
									<router-link to="/PopupsSeting"><span class="menu-text"><i class="append-icon glyphicon glyphicon-comment"></i> Popups Settings</span></router-link>
								</li>
								<li>
									<router-link to="/Discount"><span class="menu-text"><i class="append-icon glyphicon glyphicon-tags"></i> Discount</span></router-link>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<router-link to="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-credit-card"></i></span>
							<span class="menu-text">Payments</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</router-link>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<router-link to="/UpfrontRequest"><span class="menu-text"><span class="append-icon icon-arrow-up2"></span> Upfront Request</span></router-link>
								</li>
								<li>
									<router-link to="/RefundRequest"><span class="menu-text"><span class="append-icon icon-cycle"></span> Refund Request</span></router-link>
								</li>
								<li>
									<router-link to="/ReleaseRequest"><span class="menu-text"><span class="append-icon icon-target"></span> Release Request</span></router-link>
								</li>
								<li>
									<router-link to="/EscrowAccounts"><span class="menu-text"><span class="append-icon icon-cw"></span> Escrow Accounts</span></router-link>
								</li>
								<li>
									<router-link to="/PayAccounts"><span class="menu-text"><span class="append-icon icon-credit-card"></span> PayIn / PayOut Accounts</span></router-link>
								</li>
								<li>
									<router-link to="/Payouts"><span class="menu-text"><span class="append-icon icon-add-to-list"></span> Payouts</span></router-link>
								</li>
								<li>
									<router-link to="/Invoice"><span class="menu-text"><span class="append-icon icon-info2"></span> Invoice</span></router-link>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<router-link to="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-users"></i></span>
							<span class="menu-text">Customer</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</router-link>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<router-link to="/PortalClients"><span class="menu-text"><span class="append-icon icon-vcard"></span> Portal Clients</span></router-link>
								</li>
								<li>
									<router-link to="/PortalUsers"><span class="menu-text"><span class="append-icon icon-users"></span> Portal Users</span></router-link>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<router-link to="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-money"></i></span>
							<span class="menu-text">Income</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</router-link>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<router-link to="portal-income.html"><span class="menu-text"><i class="append-icon fa fa-fw fa-check-square-o"></i> Portal Income</span></router-link>
								</li>
								<li>
									<router-link to="client-income.html"><span class="menu-text"><i class="append-icon fa fa-fw fa-check"></i> Client Income</span></router-link>
								</li>
							</ul>
						</div>
					</li>
					<li class="active">
						<router-link to="javascript:void(0);" data-action="click-trigger" class="open">
							<span class="menu-icon"><i class="fa fa-gear"></i></span>
							<span class="menu-text">Portal Settings</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</router-link>
						<div class="child-menu" data-action="click-target" style="display:block;">
							<ul>
								<li>
									<router-link to="/ManageLanguages"><span class="menu-text"><span class="append-icon icon-language"></span> Website Languages</span></router-link>
								</li>
								<li>
									<router-link to="/WebsiteSettings"><span class="menu-text"><i class="append-icon fa fa-fw fa-gears"></i> Website Settings</span></router-link>
								</li>
								<li class="active">
									<router-link to="/CompanyType"><span class="menu-text"><i class="append-icon fa fa-fw fa-asterisk"></i> Company Type</span></router-link>
								</li>	
								<li>
									<router-link to="/AddCountry">
										<span class="menu-text">
											<i class="append-icon glyphicon glyphicon-tags"></i> Add Countrys</span>
									</router-link>
								</li>
								<li>
									<router-link to="/Administrator"><span class="menu-text"><span class="append-icon icon-user"></span> Admin</span></router-link>
								</li>
								<li>
									<router-link to="/TextModule"><span class="menu-text"><i class="append-icon fa fa-fw fa-file-text-o"></i> Text Module</span></router-link>
								</li>
								<li>
									<router-link to="/Policy"><span class="menu-text"><i class="append-icon fa fa-fw fa-gavel"></i> Policy&amp;Terms</span></router-link>
								</li>
								<li>
									<router-link to="/OurServices"><span class="menu-text"><i class="append-icon glyphicon glyphicon-qrcode"></i> Our Services</span></router-link>
								</li>
								<li>
									<router-link to="/ServiceComission"><span class="menu-text"><i class="append-icon glyphicon glyphicon-usd"></i> Service Comission</span></router-link>
								</li>
								<li class="active">
									<router-link to="/AccountUpgradeClient"><span class="menu-text"><i class="append-icon fa fa-fw fa-level-up"></i> Account Upgrade Client</span></router-link>
								</li>
								<li>
									<router-link to="/CompanySkill"><span class="menu-text"><span class="append-icon fa fa-cogs"></span> Company Skill</span></router-link>
								</li>
                                <li>
									<router-link to="/CompanyCharacter"><span class="menu-text"><span class="append-icon fa fa-check-square-o"></span> Company Character</span></router-link>
								</li>
                                
								<li>
									<router-link to="/BidsAmountClient"><span class="menu-text"><span class="append-icon icon-database"></span> Bids Amount Client</span></router-link>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div><!-- vd_menu end -->
		</div><!-- navbar-menu end -->
		<div class="navbar-spacing clearfix"></div>
		<div class="vd_menu vd_navbar-bottom-widget">
			<ul>
				<li>
					<router-link to="login.html">
						<span class="menu-icon"><i class="fa fa-sign-out"></i></span>
						<span class="menu-text">Logout</span>
					</router-link>
				</li>
			</ul>
		</div><!-- vd_menu end -->		
	</div><!-- vd_navbar-left end -->

<!-- LEFT MENU END -->
    
  </div>
</template>

<script>
export default {
  name: "ThemeSidebar",
};
</script>