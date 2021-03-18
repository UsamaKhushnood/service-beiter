<template>
  <div id="SearchJob">
    <div class="vd_content-wrapper">
      
        <div class="vd_content clearfix">
          <div class="vd_head-section clearfix">
            <div class="vd_panel-header">
              <ul class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="pages-custom-product.html">Pages</a></li>
                <li class="active">Search Jobs</li>
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
                <i class="append-icon glyphicon glyphicon-zoom-in"></i> Search
                Jobs
              </h1>
            </div>
          </div>
          <!-- vd_title-section end -->
          <div class="dashboardPanels clearfix">
            <div class="col-md-3 col-sm-12 text-center company">
              <div class="vd_status-widget widget dashboardPanel">
                <a class="panel-body vd_blue pd-5" href="#">
                  <div class="clearfix">
                    <div class="menu-text clearfix">New <br />Jobs</div>
                    <span class="company-value">25</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-md-3 col-sm-12 text-center company">
              <div class="vd_status-widget widget dashboardPanel">
                <a class="panel-body vd_blue pd-5" href="#">
                  <div class="clearfix">
                    <div class="menu-text clearfix">Jobs <br />on Hold</div>
                    <span class="company-value">1</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-md-3 col-sm-12 text-center company">
              <div class="vd_status-widget widget dashboardPanel">
                <a class="panel-body vd_blue pd-5" href="#">
                  <div class="clearfix">
                    <div class="menu-text clearfix">Accepted <br />Jobs</div>
                    <span class="company-value">10</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-md-3 col-sm-12 text-center company">
              <div class="vd_status-widget widget dashboardPanel">
                <a class="panel-body vd_blue pd-5" href="#">
                  <div class="clearfix">
                    <div class="menu-text clearfix">Denied <br />Jobs</div>
                    <span class="company-value">2</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-12 tabs">
                <div id="category1" class="active tab-pane   in">
                  <div class="tabs widget">
                    <ul class="nav nav-tabs widget">
                      <li class="active">
                        <a data-toggle="tab" href="#new-request-tab-c1">
                          New Jobs
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#request-hold-tab-c1">
                          Jobs On Hold
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#accepted-request-tab-c1">
                          Accepted Jobs
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#denied-request-tab-c1">
                          Denied Jobs
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i
                          ></span>
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div id="new-request-tab-c1" class="tab-pane active">
                        <div class="pd-20">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="panel widget">
                                <div class="panel-body table-responsive">
                                  <table class="table table-hover">
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>Company Name</th>
                                        <th>Category</th>
                                        <th>Request Time</th>
                                        <th>Phone-No.</th>
                                        <th>Options</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>The Company Ltd</td>
                                        <td class="center">Bitcoin</td>
                                        <td class="center"></td>
                                        <td class="center">112</td>
                                        <td class="menu-action">
                                          <a
                                            data-target="#viewAccept"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-green vd_green"
                                            ><i
                                              data-original-title="view"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-eye"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#successAdd"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-yellow vd_yellow"
                                            ><i
                                              data-original-title="accept"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-check"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#denyRequest"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-red vd_red"
                                            ><i
                                              data-original-title="denied"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-minus-circle"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#holdRequest"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-red vd_red"
                                            ><i
                                              data-original-title="hold"
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
                                <!-- panel-body end -->
                              </div>
                              <!-- panel widget end -->
                            </div>
                            <!-- col-md-12 end -->
                          </div>
                          <!-- row end -->
                        </div>
                        <!-- pd-20 end -->
                      </div>

                      <!-- new-request-tab SECTION 1 END -->

                      <div id="request-hold-tab-c1" class="tab-pane">
                        <div class="pd-20">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="panel widget">
                                <div class="panel-body table-responsive">
                                  <table class="table table-hover">
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>Company Name</th>
                                        <th>Category</th>
                                        <th>Request Time</th>
                                        <th>Phone-No.</th>
                                        <th>Options</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>The Company Ltd</td>
                                        <td class="center">Bitcoin</td>
                                        <td class="center"></td>
                                        <td class="center">112</td>
                                        <td class="menu-action">
                                          <a
                                            data-target="#viewAccept"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-green vd_green"
                                            ><i
                                              data-original-title="view"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-eye"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#successAdd"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-yellow vd_yellow"
                                            ><i
                                              data-original-title="accept"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-check"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#denyRequest"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-red vd_red"
                                            ><i
                                              data-original-title="denied"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-minus-circle"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#onHold"
                                            data-toggle="modal"
                                            href="javascript:void(0);"
                                            ><span class="label label-danger"
                                              >On Hold</span
                                            ></a
                                          >
                                          <!--<a data-target="#theReason" data-toggle="modal" href="javascript:void(0);"><span class="label label-default">Reason</span></a>-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <!-- panel-body end -->
                              </div>
                              <!-- panel widget end -->
                            </div>
                            <!-- col-md-12 end -->
                          </div>
                          <!-- row end -->
                        </div>
                        <!-- pd-20 end -->
                      </div>

                      <!-- request-hold-tab SECTION 1 END -->

                      <div id="accepted-request-tab-c1" class="tab-pane">
                        <div class="pd-20">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="panel widget">
                                <div class="panel-body table-responsive">
                                  <table class="table table-hover">
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>Company Name</th>
                                        <th>Category</th>
                                        <th>Request Time</th>
                                        <th>Phone-No.</th>
                                        <th>Options</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>The Company Ltd</td>
                                        <td class="center">Bitcoin</td>
                                        <td class="center"></td>
                                        <td class="center">112</td>
                                        <td class="menu-action">
                                          <a
                                            data-target="#viewAccept"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-green vd_green"
                                            ><i
                                              data-original-title="view"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-eye"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#onAccept"
                                            data-toggle="modal"
                                            href="javascript:void(0);"
                                            ><span class="label label-success"
                                              >Accepted</span
                                            ></a
                                          >
                                          <a
                                            data-target="#denyRequest"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-red vd_red"
                                            ><i
                                              data-original-title="denied"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-minus-circle"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#holdRequest"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-red vd_red"
                                            ><i
                                              data-original-title="hold"
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
                                <!-- panel-body end -->
                              </div>
                              <!-- panel widget end -->
                            </div>
                            <!-- col-md-12 end -->
                          </div>
                          <!-- row end -->
                        </div>
                        <!-- pd-20 end -->
                      </div>

                      <!-- accepted-request-tab SECTION 1 END -->

                      <div id="denied-request-tab-c1" class="tab-pane">
                        <div class="pd-20">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="panel widget">
                                <div class="panel-body table-responsive">
                                  <table class="table table-hover">
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>Company Name</th>
                                        <th>Category</th>
                                        <th>Request Time</th>
                                        <th>Phone-No.</th>
                                        <th>Options</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>The Company Ltd</td>
                                        <td class="center">Bitcoin</td>
                                        <td class="center"></td>
                                        <td class="center">112</td>
                                        <td class="menu-action">
                                          <a
                                            data-target="#viewAccept"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-green vd_green"
                                            ><i
                                              data-original-title="view"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-eye"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#successAdd"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-yellow vd_yellow"
                                            ><i
                                              data-original-title="accept"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-check"
                                            ></i
                                          ></a>
                                          <a
                                            data-target="#denied"
                                            data-toggle="modal"
                                            href="javascript:void(0);"
                                            ><span class="label label-danger"
                                              >Denied</span
                                            ></a
                                          >
                                          <a
                                            data-target="#holdRequest"
                                            data-toggle="modal"
                                            class="btn menu-icon vd_bd-red vd_red"
                                            ><i
                                              data-original-title="hold"
                                              data-toggle="tooltip"
                                              data-placement="top"
                                              class="fa fa-pause"
                                            ></i
                                          ></a>
                                          <!--<a data-target="#theReason" data-toggle="modal" href="javascript:void(0);"><span class="label label-default">Reason</span></a>-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <!-- panel-body end -->
                              </div>
                              <!-- panel widget end -->
                            </div>
                            <!-- col-md-12 end -->
                          </div>
                          <!-- row end -->
                        </div>
                        <!-- pd-20 end -->
                      </div>

                      <!-- denied-request-tab SECTION 1 END -->
                    </div>
                    <!-- tab-content end -->
                  </div>
                  <!-- tabs widget -->
                </div>
                <!-- #category1 -->
              </div>
            </div>
            <!-- row -->
          </div>
          <!-- vd_content-section end -->
        </div>
        <!-- vd_content end -->
      
      <!-- vd_container end -->
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchJob",
};
</script>
