<template>
  <div id="ClientIncome">
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
                <li class="active">Client Income</li>
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
                <i class="append-icon fa fa-fw fa-check"></i> Client Income
              </h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-3 controls">
                <select>
                  <option>Select Country</option>
                  <option>Month 2</option>
                  <option>Month 3</option>
                </select>
              </div>
              <!-- col-md-3 end -->

              <div class="col-md-3 controls">
                <select>
                  <option>Select City</option>
                  <option>Month 2</option>
                  <option>Month 3</option>
                </select>
              </div>
              <!-- col-md-3 end -->

              <div class="col-md-3 controls">
                <select>
                  <option>Select Service</option>
                  <option>Month 2</option>
                  <option>Month 3</option>
                </select>
              </div>
              <!-- col-md-3 end -->

              <div class="col-md-3 controls">
                <div class="input-group bootstrap-timepicker">
                  <input type="text" placeholder="Search" />
                  <span class="input-group-addon">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <!-- col-md-3 end -->
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="widget">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="panel widget">
                        <div class="panel-body table-responsive">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Company Name</th>
                                <th class="text-center">Total Jobs</th>
                                <th class="text-center">In Excrow</th>
                                <th class="text-center">Ready Get</th>
                                <th class="text-center">Remain</th>
                                <th class="text-center">Total Earn</th>
                                <th class="text-center">Options</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="text-center">
                                <td>01</td>
                                <td>Tacos Service</td>
                                <td>12</td>
                                <td>10.500 &euro;</td>
                                <td>5.500 &euro;</td>
                                <td class="menu-action">5.000 @</td>
                                <td class="menu-action">10.500</td>
                                <td class="menu-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#blockThisUser"
                                    class="btn menu-icon vd_bd-yellow vd_yellow"
                                  >
                                    <i
                                      class="fa fa-eye"
                                      data-original-title="Profile"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i> View
                                  </a>
                                </td>
                              </tr>
                              <tr class="text-center">
                                <td>02</td>
                                <td>Tacos Service</td>
                                <td>15</td>
                                <td>12.500 &euro;</td>
                                <td>7.500 &euro;</td>
                                <td class="menu-action">5.000 @</td>
                                <td class="menu-action">11.500</td>
                                <td class="menu-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#blockThisUser"
                                    class="btn menu-icon vd_bd-yellow vd_yellow"
                                  >
                                    <i
                                      class="fa fa-eye"
                                      data-original-title="Profile"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i> View
                                  </a>
                                </td>
                              </tr>
                              <tr class="text-center">
                                <td>02</td>
                                <td>Tacos Service</td>
                                <td>18</td>
                                <td>11.500 &euro;</td>
                                <td>6.500 &euro;</td>
                                <td class="menu-action">6.000 @</td>
                                <td class="menu-action">10.500</td>
                                <td class="menu-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#blockThisUser"
                                    class="btn menu-icon vd_bd-yellow vd_yellow"
                                  >
                                    <i
                                      class="fa fa-eye"
                                      data-original-title="Profile"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i> View
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
                <!-- widget -->
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
  name: "ClientIncome",
};
</script>