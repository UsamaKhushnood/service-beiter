<template>
  <div id="ThemeSidebar">
    <!-- LEFT MENU -->

    <div class="vd_navbar vd_nav-width vd_navbar-tabs-menu vd_navbar-left  ">
		
		<div class="navbar-menu clearfix">
			<!--<h3 class="menu-title hide-nav-medium hide-nav-small">Sidebar Header</h3>-->
			<div class="vd_menu scrolled-menu">
				<ul>
					<li>
						<a href="index.html">
							<span class="menu-icon"><i class="fa fa-dashboard"></i></span>
							<span class="menu-text">Dashboard</span>
						</a>
					</li>
					<li>
						<a href="request.html">
							<span class="menu-icon"><i class="fa fa-flag-o"></i></span>
							<span class="menu-text">New Request</span>
						</a>
					</li>
					<!--<li>
						<a href="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-files-o"></i></span>
							<span class="menu-text">Reports</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</a>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<a href="ticket/" target="_blank"><span class="menu-text"><span class="append-icon icon-paperplane"></span> Ticket</span></a>
								</li>
								<li>
									<a href="Live_Chat/livechat/index.html" target="_blank"><span class="menu-text"><span class="append-icon icon-chat"></span> Live Chat</span></a>
								</li>
							</ul>
						</div>
					</li>-->
					<li>
						<a href="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-cubes"></i></span>
							<span class="menu-text">Activity</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</a>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<a href="projects.html"><span class="menu-text"><span class="append-icon icon-archive"></span> All Projects</span></a>
								</li>
								<li>
									<a href="contracts.html"><span class="menu-text"><span class="append-icon icon-briefcase"></span> All Contracts</span></a>
								</li>
								<li>
									<a href="review.html"><span class="menu-text"><span class="append-icon fa fa-star-half-o"></span> Reviews</span></a>
								</li>
								<li>
									<a href="appointment.html"><span class="menu-text"><span class="append-icon fa fa-calendar"></span> Appointments</span></a>
								</li>
								<li>
									<a href="javascript:void(0);" data-action="click-trigger" class=""> 
										<span class="menu-text"><span class="append-icon icon-sharable"></span> Purchase Services</span> 
										<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
									</a> 
									<div class="child-menu" data-action="click-target" style="display: none;">
										<ul class="clearfix">
											<li> <a href="purchase.html"> 
												<span class="menu-text"><span class="append-icon icon-drawer"></span> All Services</span> 
												</a> 
											</li>
											<li> <a href="sale-history.html"> 
												<span class="menu-text"><i class="append-icon fa fa-fw fa-history"></i> Sale History</span> 
												</a> 
											</li>
										</ul>
									</div>  
								</li>
								<li>
									<a href="javascript:void(0);" data-action="click-trigger" class=""> 
										<span class="menu-text"><span class="append-icon icon-graduation"></span> Jobs</span> 
										<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
									</a> 
									<div class="child-menu" data-action="click-target" style="display: none;">
										<ul class="clearfix">
											<li> <a href="search-jobs.html"> 
												<span class="menu-text"><i class="append-icon glyphicon glyphicon-zoom-in"></i> Search Jobs</span> 
												</a> 
											</li>
											<li> <a href="job-offers.html"> 
												<span class="menu-text"><span class="append-icon icon-megaphone"></span> Job Offers</span> 
												</a> 
											</li>
										</ul>
									</div>  
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-bar-chart-o"></i></span>
							<span class="menu-text">Marketing</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</a>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<a href="emaileditor" target="_blank"><span class="menu-text"><i class="append-icon fa fa-fw fa-envelope"></i> News Letter</span></a>
								</li>
								<li>
									<a href="javascript:void(0);"><span class="menu-text"><i class="append-icon glyphicon glyphicon-comment"></i> Popups Settings</span></a>
								</li>
								<li>
									<a href="discount.html"><span class="menu-text"><i class="append-icon glyphicon glyphicon-tags"></i> Discount</span></a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-credit-card"></i></span>
							<span class="menu-text">Payments</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</a>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<a href="upfront-request.html"><span class="menu-text"><span class="append-icon icon-arrow-up2"></span> Upfront Request</span></a>
								</li>
								<li>
									<a href="refund-request.html"><span class="menu-text"><span class="append-icon icon-cycle"></span> Refund Request</span></a>
								</li>
								<li>
									<a href="release-request.html"><span class="menu-text"><span class="append-icon icon-target"></span> Release Request</span></a>
								</li>
								<li>
									<a href="escrows.html"><span class="menu-text"><span class="append-icon icon-cw"></span> Escrow Accounts</span></a>
								</li>
								<li>
									<a href="pay-in-pay-out.html"><span class="menu-text"><span class="append-icon icon-credit-card"></span> PayIn / PayOut Accounts</span></a>
								</li>
								<li>
									<a href="payouts.html"><span class="menu-text"><span class="append-icon icon-add-to-list"></span> Payouts</span></a>
								</li>
								<li>
									<a href="invoice.html"><span class="menu-text"><span class="append-icon icon-info2"></span> Invoice</span></a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-users"></i></span>
							<span class="menu-text">Customer</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</a>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<a href="companies.html"><span class="menu-text"><span class="append-icon icon-vcard"></span> Portal Clients</span></a>
								</li>
								<li>
									<a href="users.html"><span class="menu-text"><span class="append-icon icon-users"></span> Portal Users</span></a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="javascript:void(0);" data-action="click-trigger">
							<span class="menu-icon"><i class="fa fa-money"></i></span>
							<span class="menu-text">Income</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</a>
						<div class="child-menu" data-action="click-target">
							<ul>
								<li>
									<a href="portal-income.html"><span class="menu-text"><i class="append-icon fa fa-fw fa-check-square-o"></i> Portal Income</span></a>
								</li>
								<li>
									<a href="client-income.html"><span class="menu-text"><i class="append-icon fa fa-fw fa-check"></i> Client Income</span></a>
								</li>
							</ul>
						</div>
					</li>
					<li class="active">
						<a href="javascript:void(0);" data-action="click-trigger" class="open">
							<span class="menu-icon"><i class="fa fa-gear"></i></span>
							<span class="menu-text">Portal Settings</span>
							<span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
						</a>
						<div class="child-menu" data-action="click-target" style="display:block;">
							<ul>
								<li>
									<a href="languages.html"><span class="menu-text"><span class="append-icon icon-language"></span> Website Languages</span></a>
								</li>
								<li>
									<a href="settings.html"><span class="menu-text"><i class="append-icon fa fa-fw fa-gears"></i> Website Settings</span></a>
								</li>
								<li class="active">
									<a href="company-type.html"><span class="menu-text"><i class="append-icon fa fa-fw fa-asterisk"></i> Company Type</span></a>
								</li>	
								<li>
									<a href="add-countrys.html">
										<span class="menu-text">
											<i class="append-icon glyphicon glyphicon-tags"></i> Add Countrys</span>
									</a>
								</li>
								<li>
									<a href="administrator.html"><span class="menu-text"><span class="append-icon icon-user"></span> Admin</span></a>
								</li>
								<li>
									<a href="text-module.html"><span class="menu-text"><i class="append-icon fa fa-fw fa-file-text-o"></i> Text Module</span></a>
								</li>
								<li>
									<a href="policy-terms.html"><span class="menu-text"><i class="append-icon fa fa-fw fa-gavel"></i> Policy&amp;Terms</span></a>
								</li>
								<li>
									<a href="services.html"><span class="menu-text"><i class="append-icon glyphicon glyphicon-qrcode"></i> Our Services</span></a>
								</li>
								<li>
									<a href="service-comission.html"><span class="menu-text"><i class="append-icon glyphicon glyphicon-usd"></i> Service Comission</span></a>
								</li>
								<li class="active">
									<a href="account.html"><span class="menu-text"><i class="append-icon fa fa-fw fa-level-up"></i> Account Upgrade Client</span></a>
								</li>
								<li>
									<a href="company_skill.html"><span class="menu-text"><span class="append-icon fa fa-cogs"></span> Company Skill</span></a>
								</li>
                                <li>
									<a href="company-character.html"><span class="menu-text"><span class="append-icon fa fa-check-square-o"></span> Company Character</span></a>
								</li>
                                
								<li>
									<a href="bids.html"><span class="menu-text"><span class="append-icon icon-database"></span> Bids Amount Client</span></a>
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
					<a href="login.html">
						<span class="menu-icon"><i class="fa fa-sign-out"></i></span>
						<span class="menu-text">Logout</span>
					</a>
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