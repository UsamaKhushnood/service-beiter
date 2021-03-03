<template>
  <div id="ReleaseRequest">
    <div class="vd_content-wrapper">
      
        <div class="vd_content clearfix">
          <div class="vd_head-section clearfix">
            <div class="vd_panel-header">
              <ul class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="pages-custom-product.html">Pages</a></li>
                <li class="active">Release Request</li>
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
                <span class="append-icon icon-target"></span> Release Request
              </h1>
            </div>
          </div>

          <div class="dashboardPanels clearfix">
            <div class="col-md-4 col-sm-12 text-center company">
              <div class="vd_status-widget widget dashboardPanel">
                <a class="panel-body vd_blue pd-5" href="#">
                  <div class="clearfix">
                    <div class="menu-text clearfix">
                      New Release<br />Request
                    </div>
                    <span class="company-value">10</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-md-4 col-sm-12 text-center company">
              <div class="vd_status-widget widget dashboardPanel">
                <a class="panel-body vd_blue pd-5" href="#">
                  <div class="clearfix">
                    <div class="menu-text clearfix">
                      Client/User <br />Request
                    </div>
                    <span class="company-value">20</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-md-4 col-sm-12 text-center company">
              <div class="vd_status-widget widget dashboardPanel">
                <a class="panel-body vd_blue pd-5" href="#">
                  <div class="clearfix">
                    <div class="menu-text clearfix">
                      Client/Portal <br />Request
                    </div>
                    <span class="company-value">4</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-12 tabs">
                <div id="category1" class="active tab-pane fade in">
                  <div class="tabs widget">
                    <ul class="nav nav-tabs widget">
                      <li class="active">
                        <a data-toggle="tab" href="#userRequest">
                          Client/User Request
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#portalRequest">
                          Client/Portal Request
                          <span class="menu-active"
                            ><i class="fa fa-caret-up"></i
                          ></span>
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div id="userRequest" class="tab-pane active fade in">
                        <div class="pd-20">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="panel widget">
                                <div class="panel-body table-responsive">
                                  <table class="table table-hover">
                                    <thead>
                                      <tr>
                                        <th class="text-center">No.</th>
                                        <th class="text-center">
                                          Time &amp; Date
                                        </th>
                                        <th class="text-center">Release ID</th>
                                        <th class="text-center">Contract ID</th>
                                        <th class="text-center">
                                          Company Name
                                        </th>
                                        <th class="text-center">User Name</th>
                                        <th class="text-center">
                                          Total Amount
                                        </th>
                                        <th class="text-center">
                                          Release Amount
                                        </th>
                                        <th class="text-center">Ready Paid</th>
                                        <th class="text-center">Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="text-center">
                                        <td>1</td>
                                        <td>02/02/2017</td>
                                        <td>DD-9988</td>
                                        <td>DD-9988-s</td>
                                        <td>Bitcoin Wings</td>
                                        <td>Mr. Lee</td>
                                        <td>2.550 €</td>
                                        <td>200 €</td>
                                        <td>200 €</td>
                                        <td class="menu-action">
                                          <a
                                            data-toggle="modal"
                                            data-target="#theReason"
                                            href="javascript:void(0);"
                                            ><span
                                              class="label label-default vd_bg-green"
                                              >Open</span
                                            ></a
                                          >
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

                      <div id="portalRequest" class="tab-pane fade">
                        <div class="pd-20">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="panel widget">
                                <div class="panel-body table-responsive">
                                  <table class="table table-hover">
                                    <thead>
                                      <tr>
                                        <th class="text-center">No.</th>
                                        <th class="text-center">
                                          Time &amp; Date
                                        </th>
                                        <th class="text-center">Release ID</th>
                                        <th class="text-center">Contract ID</th>
                                        <th class="text-center">
                                          Company Name
                                        </th>
                                        <th class="text-center">User Name</th>
                                        <th class="text-center">
                                          Total Amount
                                        </th>
                                        <th class="text-center">
                                          Release Amount
                                        </th>
                                        <th class="text-center">Ready Paid</th>
                                        <th class="text-center">Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="text-center">
                                        <td>1</td>
                                        <td>02/02/2017</td>
                                        <td>DD-9988</td>
                                        <td>DD-9988-s</td>
                                        <td>Bitcoin Wings</td>
                                        <td>Mr. Lee</td>
                                        <td>2.550 €</td>
                                        <td>200 €</td>
                                        <td>200 €</td>
                                        <td class="menu-action">
                                          <a
                                            data-toggle="modal"
                                            data-target="#changeStatus"
                                            href="javascript:void(0);"
                                            ><span
                                              class="label label-default vd_bg-red"
                                              >Denied</span
                                            ></a
                                          >
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
          <!-- .vd_content-section -->
        </div>
        <!-- .vd_content -->
      
      <!-- .vd_container -->
    </div>
  </div>
</template>
<script>
export default {
  name: "ReleaseRequest",
};
</script>
