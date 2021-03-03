<template>
  <div id="PortalUsers">
    <div class="vd_content-wrapper">
      
        <div class="vd_content clearfix">
          <div class="vd_head-section clearfix">
            <div class="vd_panel-header">
              <ul class="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="pages-custom-product.html">Pages</a>
                </li>
                <li class="active">Portal Users</li>
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
              <h1>
                <span class="append-icon icon-users"></span> Portal Users
              </h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="mgbt-xs-10">
                  <button
                    type="button"
                    class="btn vd_btn vd_bg-blue btn-lg btn-block"
                    data-toggle="modal"
                    data-target="#sentMessageUser"
                  >
                    <span class="append-icon">
                      <i class="fa fa-comment-o fa-fw"></i>
                    </span>Sent Message To All Users
                  </button>
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>

            <div class="row dashboardPanels">
              <div class="col-md-3 col-sm-4 col-xs-12 text-center company">
                <div class="vd_status-widget widget dashboardPanel">
                  <a class="panel-body vd_blue pd-5" href="#">
                    <div class="clearfix">
                      <div class="menu-text clearfix">Active Users</div>
                      <span class="company-value">10.500</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-12 text-center company">
                <div class="vd_status-widget widget dashboardPanel">
                  <a class="panel-body vd_blue pd-5" href="#">
                    <div class="clearfix">
                      <div class="menu-text clearfix">Blocked Users</div>
                      <span class="company-value">200</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-12 text-center company">
                <div class="vd_status-widget widget dashboardPanel">
                  <a class="panel-body vd_blue pd-5" href="#">
                    <div class="clearfix">
                      <div class="menu-text clearfix">Suspended Users</div>
                      <span class="company-value">300</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-12 text-center company">
                <div class="vd_status-widget widget dashboardPanel">
                  <a class="panel-body vd_blue pd-5" href="#">
                    <div class="clearfix">
                      <div class="menu-text clearfix">Total Users</div>
                      <span class="company-value">11.000</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="tabs widget">
                  <ul class="nav nav-tabs widget">
                    <li class="active">
                      <a data-toggle="tab" href="#allUsersTab">
                        All Users
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#activeUsersTab">
                        Active Users
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#blockedUsersTab">
                        Blocked Users
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#suspendedUsersTab">
                        Suspended Users
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="allUsersTab" class="tab-pane active">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="panel widget">
                            <div class="panel-body table-responsive">
                              <table class="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Username Name</th>
                                    <th>User ID</th>
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
                                      >1</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >User221</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >25361</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >CJ</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >JD</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >JC</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >Rev</a>
                                    </td>
                                    <td class="menu-action">
                                      <a
                                        data-toggle="modal"
                                        data-target="#blockThisUser"
                                        class="btn menu-icon vd_bd-red vd_red"
                                      >
                                        <i
                                          class="fa fa-lock"
                                          data-original-title="Block"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#suspendThisUser"
                                        class="btn menu-icon vd_bd-red vd_red"
                                      >
                                        <i
                                          data-original-title="Suspend"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          class="fa fa-pause"
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <!-- Panel Widget -->
                        </div>
                        <!-- col-md-12 -->
                      </div>
                    </div>
                    <!-- home-tab -->

                    <div id="activeUsersTab" class="tab-pane">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="panel widget">
                            <div class="panel-body table-responsive">
                              <table class="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Username Name</th>
                                    <th>User ID</th>
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
                                      >1</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >User221</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >25361</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >CJ</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >JD</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >JC</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >Rev</a>
                                    </td>
                                    <td class="menu-action">
                                      <a
                                        data-toggle="modal"
                                        data-target="#blockThisUser"
                                        class="btn menu-icon vd_bd-red vd_red"
                                      >
                                        <i
                                          class="fa fa-lock"
                                          data-original-title="Block"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#suspendThisUser"
                                        class="btn menu-icon vd_bd-red vd_red"
                                      >
                                        <i
                                          data-original-title="Suspend"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          class="fa fa-pause"
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <!-- Panel Widget -->
                        </div>
                        <!-- col-md-12 -->
                      </div>
                    </div>

                    <div id="blockedUsersTab" class="tab-pane">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="panel widget">
                            <div class="panel-body table-responsive">
                              <table class="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Username Name</th>
                                    <th>User ID</th>
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
                                      >1</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >User221</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >25361</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >CJ</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >JD</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >JC</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >Rev</a>
                                    </td>
                                    <td class="menu-action">
                                      <a
                                        data-toggle="modal"
                                        data-target="#unblockThisUser"
                                        class="btn menu-icon vd_bd-blue vd_blue"
                                      >
                                        <i
                                          data-original-title="Unblock"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          class="fa fa-unlock-alt"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#suspendThisUser"
                                        class="btn menu-icon vd_bd-red vd_red"
                                      >
                                        <i
                                          data-original-title="Suspend"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          class="fa fa-pause"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#theReason"
                                        href="javascript:void(0);"
                                      >
                                        <span class="label label-default">Reason</span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <!-- Panel Widget -->
                        </div>
                        <!-- col-md-12 -->
                      </div>
                    </div>
                    <div id="suspendedUsersTab" class="tab-pane">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="panel widget">
                            <div class="panel-body table-responsive">
                              <table class="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Username Name</th>
                                    <th>User ID</th>
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
                                      >1</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >User221</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >25361</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >CJ</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >JD</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >JC</a>
                                    </td>
                                    <td class="pdng0">
                                      <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#saleHistory"
                                        class="tableLink"
                                      >Rev</a>
                                    </td>
                                    <td class="menu-action">
                                      <a
                                        data-toggle="modal"
                                        data-target="#blockThisUser"
                                        class="btn menu-icon vd_bd-red vd_red"
                                      >
                                        <i
                                          class="fa fa-lock"
                                          data-original-title="Block"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#resumeThisUser"
                                        class="btn menu-icon vd_bd-blue vd_blue"
                                      >
                                        <i
                                          class="fa fa-play"
                                          data-original-title="Resume"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#theReason"
                                        href="javascript:void(0);"
                                      >
                                        <span class="label label-default">Reason</span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <!-- Panel Widget -->
                        </div>
                        <!-- col-md-12 -->
                      </div>
                    </div>
                  </div>
                  <!-- tab-content -->
                </div>
                <!-- tabs-widget -->
              </div>
            </div>
            <!-- row -->
          </div>
          <!-- .vd_content-section -->
        </div>
        <!-- .vd_content -->
      </div>
      <!-- .vd_container -->
    </div>
  
</template>
<script>
export default {
  name: "PortalUsers",
};
</script>