<template>
  <div id="PortalIncome">
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
                <li class="active">Portal Income</li>
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
                <i class="append-icon fa fa-fw fa-check-square-o"></i> Portal Income
              </h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-6 col-sm-6 text-center">
                <div class="vd_status-widget widget dashboardPanel">
                  <div class="panel-body vd_blue pd-5">
                    <div class="clearfix">
                      <div class="menu-text clearfix">Income This Month</div>
                      <br />
                      <span class="company-value">25.000 €</span>
                    </div>
                  </div>
                </div>
                <div id="barMonth" class="widget vd_bg-white"></div>
              </div>

              <div class="col-md-6 col-sm-6 text-center">
                <div class="vd_status-widget widget dashboardPanel">
                  <div class="panel-body vd_blue pd-5">
                    <div class="clearfix">
                      <div class="menu-text clearfix">Income This Year</div>
                      <br />
                      <span class="company-value">25.000 €</span>
                    </div>
                  </div>
                </div>
                <div id="barYear" class="widget vd_bg-white"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 controls">
                <div class="col-md-2 controls">
                  <select>
                    <option>Select</option>
                    <option>Month 2</option>
                    <option>Month 3</option>
                  </select>
                </div>
                <!-- col-md-2 end -->

                <div class="col-md-5 controls text-center">
                  <select class="width-45">
                    <option>Month from</option>
                    <option>Month 2</option>
                    <option>Month 3</option>
                  </select>
                  <select class="width-45">
                    <option>Month to</option>
                    <option>Month 2</option>
                    <option>Month 3</option>
                  </select>
                </div>
                <!-- col-md-5 end -->

                <div class="col-md-5 controls text-center">
                  <select class="width-45">
                    <option>Year from</option>
                    <option>Year 2</option>
                    <option>Year 3</option>
                  </select>
                  <select class="width-45">
                    <option>Year to</option>
                    <option>Year 2</option>
                    <option>Year 3</option>
                  </select>
                </div>
                <!-- col-md-5 end -->
              </div>
              <!-- col-md-8 end -->

              <div class="col-md-2 controls">
                <select>
                  <option>Sort By</option>
                  <option>Choice 2</option>
                  <option>Choice 3</option>
                </select>
              </div>
              <!-- col-md-2 end -->

              <div class="col-md-2 controls">
                <div class="input-group bootstrap-timepicker">
                  <input type="text" placeholder="Search" />
                  <span class="input-group-addon">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <!-- col-md-2 end -->
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="tabs widget">
                  <ul class="nav nav-tabs widget">
                    <li class="active">
                      <a data-toggle="tab" href="#monthlyIncome">
                        Monthly Income
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#yearlyIncome">
                        Yearly Income
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div id="monthlyIncome" class="tab-pane fade in active">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="panel widget">
                            <div class="panel-body table-responsive">
                              <table class="table table-hover">
                                <thead>
                                  <tr>
                                    <th class="text-center">Month</th>
                                    <th class="text-center">Invoice Net</th>
                                    <th class="text-center">Tax 19%</th>
                                    <th class="text-center">Total Amount</th>
                                    <th class="text-center">Options</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="text-center">
                                    <td>01.11.2020</td>
                                    <td>100 €</td>
                                    <td>19 €</td>
                                    <td>119 €</td>
                                    <td class="menu-action">
                                      <a
                                        data-toggle="modal"
                                        data-target="#viewThisUser"
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-eye"
                                          data-original-title="View"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#blockThisUser"
                                        class="btn menu-icon vd_bd-yellow vd_yellow"
                                      >
                                        <i
                                          class="fa fa-print"
                                          data-original-title="Print"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download XML"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >XML</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download TXT"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >TXT</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download XLS"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >XLS</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download CSV"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >CSV</span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr class="text-center">
                                    <td>01.11.2020</td>
                                    <td>100 €</td>
                                    <td>19 €</td>
                                    <td>119 €</td>
                                    <td class="menu-action">
                                      <a
                                        data-toggle="modal"
                                        data-target="#viewThisUser"
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-eye"
                                          data-original-title="View"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#blockThisUser"
                                        class="btn menu-icon vd_bd-yellow vd_yellow"
                                      >
                                        <i
                                          class="fa fa-print"
                                          data-original-title="Print"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download XML"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >XML</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download TXT"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >TXT</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download XLS"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >XLS</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download CSV"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >CSV</span>
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

                    <div id="yearlyIncome" class="tab-pane fade">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="panel widget">
                            <div class="panel-body table-responsive">
                              <table class="table table-hover">
                                <thead>
                                  <tr>
                                    <th class="text-center">Year</th>
                                    <th class="text-center">Total Net</th>
                                    <th class="text-center">Tax 19%</th>
                                    <th class="text-center">Total Amount</th>
                                    <th class="text-center">Options</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="text-center">
                                    <td>2017</td>
                                    <td>1.000 €</td>
                                    <td>109 €</td>
                                    <td>1.119 €</td>
                                    <td class="menu-action">
                                      <a
                                        data-toggle="modal"
                                        data-target="#viewThisUser"
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-eye"
                                          data-original-title="View"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#blockThisUser"
                                        class="btn menu-icon vd_bd-yellow vd_yellow"
                                      >
                                        <i
                                          class="fa fa-print"
                                          data-original-title="Print"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download XML"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >XML</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download TXT"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >TXT</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download XLS"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >XLS</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download CSV"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >CSV</span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr class="text-center">
                                    <td>2017</td>
                                    <td>1.000 €</td>
                                    <td>109 €</td>
                                    <td>1.119 €</td>
                                    <td class="menu-action">
                                      <a
                                        data-toggle="modal"
                                        data-target="#viewThisUser"
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-eye"
                                          data-original-title="View"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a
                                        data-toggle="modal"
                                        data-target="#blockThisUser"
                                        class="btn menu-icon vd_bd-yellow vd_yellow"
                                      >
                                        <i
                                          class="fa fa-print"
                                          data-original-title="Print"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download XML"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >XML</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download TXT"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >TXT</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download XLS"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >XLS</span>
                                      </a>

                                      <a href="javascript:void(0);">
                                        <span
                                          class="label label-default vd_bg-blue"
                                          data-original-title="download CSV"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        >CSV</span>
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
      
      <!-- .vd_container -->
    </div>
  </div>
</template>
<script>
export default {
  name: "PortalIncome",
};
</script>