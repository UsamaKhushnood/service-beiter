<template>
  <div id="portal-clients">
    <div class="vd_content-wrapper">
      
        <div class="vd_content clearfix">
          <div class="vd_head-section clearfix">
            <div class="vd_panel-header">
              <ul class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="pages-custom-product.html">Pages</a></li>
                <li class="active">Portal Clients</li>
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
          <!-- vd_head-section end -->
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>
                <span class="append-icon icon-vcard"></span> Portal Clients
              </h1>
            </div>
          </div>
          <!-- vd_title-section end -->
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="mgbt-xs-10">
                  <button
                    type="button"
                    class="btn vd_btn vd_bg-blue btn-lg btn-block"
                    data-toggle="modal"
                    data-target="#sentMessageCompany"
                  >
                    <span class="append-icon"
                      ><i class="fa fa-comment-o fa-fw"></i></span
                    >Sent Message To All Clients
                  </button>
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <!-- Category1 Tab -->
                <div id="category1" class="active tab-pane   in">
                  <div class="col-sm-12">
                    <div class="row dashboardPanels">
                      <div
                        class="col-md-3 col-sm-4 col-xs-12 text-center company"
                      >
                        <div class="vd_status-widget widget dashboardPanel">
                          <a class="panel-body vd_blue pd-5" href="#">
                            <div class="clearfix">
                              <div class="menu-text clearfix">
                                Active Companies
                              </div>
                              <span class="company-value">10.500</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <!-- col-md-3 company end -->
                      <div
                        class="col-md-3 col-sm-4 col-xs-12 text-center company"
                      >
                        <div class="vd_status-widget widget dashboardPanel">
                          <a class="panel-body vd_blue pd-5" href="#">
                            <div class="clearfix">
                              <div class="menu-text clearfix">
                                Blocked Companies
                              </div>
                              <span class="company-value">200</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <!-- col-md-3 company end -->
                      <div
                        class="col-md-3 col-sm-4 col-xs-12 text-center company"
                      >
                        <div class="vd_status-widget widget dashboardPanel">
                          <a class="panel-body vd_blue pd-5" href="#">
                            <div class="clearfix">
                              <div class="menu-text clearfix">
                                Suspended Companies
                              </div>
                              <span class="company-value">300</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <!-- col-md-3 company end -->
                      <div
                        class="col-md-3 col-sm-4 col-xs-12 text-center company"
                      >
                        <div class="vd_status-widget widget dashboardPanel">
                          <a class="panel-body vd_blue pd-5" href="#">
                            <div class="clearfix">
                              <div class="menu-text clearfix">
                                Total Companies
                              </div>
                              <span class="company-value">11.000</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <!-- col-md-3 company end -->
                    </div>
                    <!-- row dashboardPanels end -->

                    <div class="row">
                      <div class="col-sm-12">
                        <div class="tabs widget">
                          <ul class="nav nav-tabs widget">
                            <li class="active">
                              <a data-toggle="tab" href="#allCompaniesTab1">
                                All Companies
                                <span class="menu-active"
                                  ><i class="fa fa-caret-up"></i></span
                              ></a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#activeCompaniesTab1">
                                Active Companies
                                <span class="menu-active"
                                  ><i class="fa fa-caret-up"></i></span
                              ></a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#blockedCompaniesTab1">
                                Blocked Companies
                                <span class="menu-active"
                                  ><i class="fa fa-caret-up"></i></span
                              ></a>
                            </li>
                            <li>
                              <a
                                data-toggle="tab"
                                href="#suspendedCompaniesTab1"
                              >
                                Suspended Companies
                                <span class="menu-active"
                                  ><i class="fa fa-caret-up"></i></span
                              ></a>
                            </li>
                          </ul>
                          <div class="tab-content">
                            <div id="allCompaniesTab1" class="tab-pane active">
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="panel widget">
                                    <div class="panel-body table-responsive">
                                      <table class="table table-hover">
                                        <thead>
                                          <tr>
                                            <th>#</th>
                                            <th>Company Name</th>
                                            <th>Company ID</th>
                                            <th>Current Jobs</th>
                                            <th>Jobs Done</th>
                                            <th>Jobs Canceled</th>
                                            <th>Reviews</th>
                                            <th>Options</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >1</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >User221</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >25361</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >CJ</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >JD</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >JC</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >Rev</a
                                              >
                                            </td>
                                            <td class="menu-action">
                                              <a
                                                data-toggle="modal"
                                                data-target="#blockThisCompany"
                                                class="btn menu-icon vd_bd-red vd_red"
                                                ><i
                                                  class="fa fa-lock"
                                                  data-original-title="Block"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                ></i
                                              ></a>
                                              <a
                                                data-toggle="modal"
                                                data-target="#suspendThisCompany"
                                                class="btn menu-icon vd_bd-red vd_red"
                                                ><i
                                                  data-original-title="Suspend"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                  class="fa fa-pause"
                                                ></i
                                              ></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <!-- Panel Widget end-->
                                </div>
                                <!-- col-md-12 end -->
                              </div>
                              <!-- row end -->
                            </div>
                            <!-- tab-pane end -->

                            <div id="activeCompaniesTab1" class="tab-pane">
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="panel widget">
                                    <div class="panel-body table-responsive">
                                      <table class="table table-hover">
                                        <thead>
                                          <tr>
                                            <th>#</th>
                                            <th>Company Name</th>
                                            <th>Company ID</th>
                                            <th>Current Jobs</th>
                                            <th>Jobs Done</th>
                                            <th>Jobs Canceled</th>
                                            <th>Reviews</th>
                                            <th>Options</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >1</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >User221</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >25361</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >CJ</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >JD</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >JC</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >Rev</a
                                              >
                                            </td>
                                            <td class="menu-action">
                                              <a
                                                data-toggle="modal"
                                                data-target="#blockThisCompany"
                                                class="btn menu-icon vd_bd-red vd_red"
                                                ><i
                                                  class="fa fa-lock"
                                                  data-original-title="Block"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                ></i
                                              ></a>
                                              <a
                                                data-toggle="modal"
                                                data-target="#suspendThisCompany"
                                                class="btn menu-icon vd_bd-red vd_red"
                                                ><i
                                                  data-original-title="Suspend"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                  class="fa fa-pause"
                                                ></i
                                              ></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <!-- Panel Widget end-->
                                </div>
                                <!-- col-md-12 end -->
                              </div>
                              <!-- row end -->
                            </div>
                            <!-- tab-pane end -->

                            <div id="blockedCompaniesTab1" class="tab-pane">
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="panel widget">
                                    <div class="panel-body table-responsive">
                                      <table class="table table-hover">
                                        <thead>
                                          <tr>
                                            <th>#</th>
                                            <th>Company Name</th>
                                            <th>Company ID</th>
                                            <th>Current Jobs</th>
                                            <th>Jobs Done</th>
                                            <th>Jobs Canceled</th>
                                            <th>Reviews</th>
                                            <th>Options</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >1</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >User221</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >25361</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >CJ</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >JD</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >JC</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >Rev</a
                                              >
                                            </td>
                                            <td class="menu-action">
                                              <a
                                                data-toggle="modal"
                                                data-target="#unblockThisCompany"
                                                class="btn menu-icon vd_bd-blue vd_blue"
                                                ><i
                                                  data-original-title="Unblock"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                  class="fa fa-unlock-alt"
                                                ></i
                                              ></a>
                                              <a
                                                data-toggle="modal"
                                                data-target="#suspendThisCompany"
                                                class="btn menu-icon vd_bd-red vd_red"
                                                ><i
                                                  data-original-title="Suspend"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                  class="fa fa-pause"
                                                ></i
                                              ></a>
                                              <a
                                                data-toggle="modal"
                                                data-target="#theReason"
                                                href="javascript:void(0);"
                                                ><span
                                                  class="label label-default"
                                                  >Reason</span
                                                ></a
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <!-- Panel Widget end-->
                                </div>
                                <!-- col-md-12 end -->
                              </div>
                              <!-- row end -->
                            </div>
                            <!-- tab-pane end -->

                            <div id="suspendedCompaniesTab1" class="tab-pane">
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="panel widget">
                                    <div class="panel-body table-responsive">
                                      <table class="table table-hover">
                                        <thead>
                                          <tr>
                                            <th>#</th>
                                            <th>Company Name</th>
                                            <th>Company ID</th>
                                            <th>Current Jobs</th>
                                            <th>Jobs Done</th>
                                            <th>Jobs Canceled</th>
                                            <th>Reviews</th>
                                            <th>Options</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >1</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >User221</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >25361</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >CJ</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >JD</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >JC</a
                                              >
                                            </td>
                                            <td class="pdng0">
                                              <a
                                                href="javascript:void(0);"
                                                data-toggle="modal"
                                                data-target="#saleHistory"
                                                class="tableLink"
                                                >Rev</a
                                              >
                                            </td>
                                            <td class="menu-action">
                                              <a
                                                data-toggle="modal"
                                                data-target="#blockThisCompany"
                                                class="btn menu-icon vd_bd-red vd_red"
                                                ><i
                                                  class="fa fa-lock"
                                                  data-original-title="Block"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                ></i
                                              ></a>
                                              <a
                                                data-toggle="modal"
                                                data-target="#resumeThisCompany"
                                                class="btn menu-icon vd_bd-blue vd_blue"
                                                ><i
                                                  class="fa fa-play"
                                                  data-original-title="Resume"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                ></i
                                              ></a>
                                              <a
                                                data-toggle="modal"
                                                data-target="#theReason"
                                                href="javascript:void(0);"
                                                ><span
                                                  class="label label-default"
                                                  >Reason</span
                                                ></a
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <!-- Panel Widget end-->
                                </div>
                                <!-- col-md-12 end -->
                              </div>
                              <!-- row end -->
                            </div>
                            <!-- tab-pane end -->
                          </div>
                          <!-- tab-content end -->
                        </div>
                        <!-- tabs-widget end -->
                      </div>
                    </div>
                    <!-- row end -->

                    <!-- Category1 Tab END-->
                  </div>
                  <!-- Category Tabs END -->
                </div>
                <!-- col-sm-12 tabs end -->
              </div>
              <!-- row end -->
            </div>
            <!-- .vd_content-section -->
          </div>
          <!-- .vd_content -->
        </div>
        <!-- .vd_container -->
      
      <!-- .vd_content-wrapper -->

      <!-- Middle Content End -->
    </div>
    
  </div>
</template>

<script>
export default {
  name: "PortalClients",
};
</script>
