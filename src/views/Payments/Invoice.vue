<template>
  <div id="Invoice">
    <div class="vd_content-wrapper">
     
        <div class="vd_content clearfix">
          <div class="vd_head-section clearfix">
            <div class="vd_panel-header">
              <ul class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="pages-custom-product.html">Pages</a></li>
                <li class="active">Invoice</li>
              </ul>
              <div
                class="vd_panel-menu hidden-sm hidden-xs"
                data-intro="<strong>Expand Control</strong><br/>To expand content page horizontally, vertically, or Both. If you just need one button just simply remove the other button code."
                data-step="5"
                data-position="left"
              >
                <div
                  data-action="remove-navbar"
                  data-original-title="Remove Navigation Bar Toggle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  class="remove-navbar-button menu"
                >
                  <i class="fa fa-arrows-h"></i>
                </div>
                <div
                  data-action="remove-header"
                  data-original-title="Remove Top Menu Toggle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  class="remove-header-button menu"
                >
                  <i class="fa fa-arrows-v"></i>
                </div>
                <div
                  data-action="fullscreen"
                  data-original-title="Remove Navigation Bar and Top Menu Toggle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  class="fullscreen-button menu"
                >
                  <i class="glyphicon glyphicon-fullscreen"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1><span class="append-icon icon-info2"></span> Invoice</h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-12">
                <!--<div class="container-fluid">
					<div class="panel-heading vd_bg-green relative">
						<h3 class="panel-title vd_white" style="display:inline-block;">Invoice</h3>
						<div class="vd_panel-menu" style="float:right;display:inline-block;margin-right:10px;position:relative;vertical-align:middle;">
							<div data-original-title="Action" data-toggle="tooltip" data-placement="bottom" class="menu entypo-icon smaller-font">
								<div class="menu-trigger" data-action="click-trigger"> <i class="icon-list2"></i> </div>
								<div data-action="click-target" class="vd_mega-menu-content  width-xs-2  left-xs">
									<div class="child-menu">
										<div class="content-list content-menu">
											<ul class="list-wrapper pd-lr-10">
												<li> <a href="#"> <div class="menu-text">Delivery Invoice</div> </a> </li>
												<li> <a href="#"> <div class="menu-text">Restaurant Invoice</div> </a> </li>
												<li> <a href="#"> <div class="menu-text">Party Invoice</div> </a> </li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div><! vd_panel-menu end 
					</div>
                  </div>-->

                <div class="container-fluid">
                  <div class="tabs widget">
                    <ul class="nav nav-tabs widget">
                      <li class="active">
                        <a data-toggle="tab" href="#clientInvoice"
                          >Client Invoice<span class="menu-active"
                            ><i class="fa fa-caret-up"></i
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#userInvoice"
                          >User Invoice<span class="menu-active"
                            ><i class="fa fa-caret-up"></i
                          ></span>
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div id="clientInvoice" class="tab-pane fade in active">
                        <div class=" table-responsive">
                          <div class="col-md-12 pdng0">
                            <table
                              class="table table-hover "
                              style="background:white;"
                            >
                              <colgroup>
                                <col width="5%" />
                                <col width="20%" />
                                <col width="15%" />
                                <col width="20%" />
                                <col width="20%" />
                                <col width="20%" />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th class="text-center">#</th>
                                  <th class="text-center">Invoice ID</th>
                                  <th class="text-center">Company Name</th>
                                  <th class="text-center">Amount</th>
                                  <th class="text-center">Paid for</th>
                                  <th class="text-center">Date</th>
                                  <th class="text-center">Time</th>
                                  <th class="text-center">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="text-center">01</td>
                                  <td class="text-center">PO-100001</td>
                                  <td class="text-center">Smart Design</td>
                                  <td class="text-center">1000,-&euro;</td>
                                  <td class="text-center">Buy Services</td>
                                  <td class="text-center">d.m.y</td>
                                  <td class="text-center">H.m</td>
                                  <td class="text-center">
                                    <a
                                      data-toggle="modal"
                                      data-target="#blockThisUser1"
                                      class="btn menu-icon vd_bd-green vd_green"
                                    >
                                      <i
                                        class="fa fa-eye"
                                        data-original-title="Profile"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- col-md-12 end -->
                        </div>
                        <!-- row end -->
                      </div>
                      <!-- tab-pane end -->
                      <div id="userInvoice" class="tab-pane fade ">
                        <div class="table-responsive">
                          <div class="col-md-12 pdng0">
                            <table
                              class=" table table-hover"
                              style="background:white;"
                            >
                              <colgroup>
                                <col width="5%" />
                                <col width="20%" />
                                <col width="15%" />
                                <col width="20%" />
                                <col width="20%" />
                                <col width="20%" />
                              </colgroup>
                              <thead>
                                <tr>
                                  <th class="text-center">#</th>
                                  <th class="text-center">Invoice ID</th>
                                  <th class="text-center">Company Name</th>
                                  <th class="text-center">Amount</th>
                                  <th class="text-center">Paid for</th>
                                  <th class="text-center">Date</th>
                                  <th class="text-center">Time</th>
                                  <th class="text-center">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="text-center">01</td>
                                  <td class="text-center">PO-100001</td>
                                  <td class="text-center">Smart Design</td>
                                  <td class="text-center">1000,-&euro;</td>
                                  <td class="text-center">Buy Services</td>
                                  <td class="text-center">d.m.y</td>
                                  <td class="text-center">H.m</td>
                                  <td class="text-center">
                                    <a
                                      data-toggle="modal"
                                      data-target="#blockThisUser2"
                                      class="btn menu-icon vd_bd-green vd_green"
                                    >
                                      <i
                                        class="fa fa-eye"
                                        data-original-title="Profile"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- col-md-12 end -->
                        </div>
                        <!-- row end -->
                      </div>
                      <!-- tab-pane end -->
                    </div>
                    <!-- tab-content -->
                  </div>
                  <!-- tabs widget end -->
                </div>
                <!-- container-fluid end -->
              </div>
            </div>
            <!-- row -->
          </div>
          <!-- .vd_content-section -->
        </div>
        <!-- .vd_content -->
      
      <!-- .vd_container -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Invoice",
};
</script>
