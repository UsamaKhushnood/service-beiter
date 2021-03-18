<template>
  <div id="ServiceComission">
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
                <li class="active">Service Comission</li>
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
                <i class="append-icon glyphicon glyphicon-usd"></i> Service Comission
              </h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row mrgn15-0">
              <div class="col-md-2"></div>
              <div class="col-md-4">
                <button
                  type="button"
                  class="btn vd_btn vd_bg-blue btn-lg btn-block"
                  data-toggle="modal"
                  data-target="#addComission"
                >
                  <span class="append-icon">
                    <i class="fa fa-plus-square"></i>
                  </span>Add Service Comission
                </button>
              </div>
              <div class="col-md-4">
                <button
                  type="button"
                  class="btn vd_btn vd_bg-blue btn-lg btn-block"
                  data-toggle="modal"
                  data-target="#addService"
                >
                  <span class="append-icon">
                    <i class="fa fa-plus-square"></i>
                  </span>Add % Sale Service
                </button>
              </div>
              <div class="col-md-2"></div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="tabs widget">
                  <ul class="nav nav-tabs widget">
                    <li class="active">
                      <a data-toggle="tab" href="#serviceComission">
                        Service Comission
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#salesComission">
                        Sales Comission
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="serviceComission" class="tab-pane active   in">
                      <div class="pd-20">
                        <table class="table table-hover">
                          <colgroup>
                            <col width="10%" />
                            <col width="30%" />
                            <col width="30%" />
                            <col width="30%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th class="text-center">No.</th>
                              <th class="text-center">Service</th>
                              <th class="text-center">Comission, %</th>
                              <th class="text-center">Options</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="text-center">
                              <td>1</td>
                              <td>Service 1</td>
                              <td>5</td>
                              <td class="menu-action">
                                <div class="pdng5">
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-yellow vd_yellow"
                                  >
                                    <i
                                      class="fa fa-pencil"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-red vd_red"
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr class="text-center">
                              <td>2</td>
                              <td>Service 2</td>
                              <td>10</td>
                              <td class="menu-action">
                                <div class="pdng5">
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-yellow vd_yellow"
                                  >
                                    <i
                                      class="fa fa-pencil"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-red vd_red"
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr class="text-center">
                              <td>2</td>
                              <td>Service 3</td>
                              <td>14</td>
                              <td class="menu-action">
                                <div class="pdng5">
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-yellow vd_yellow"
                                  >
                                    <i
                                      class="fa fa-pencil"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-red vd_red"
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div id="salesComission" class="tab-pane  ">
                      <div class="pd-20">
                        <table class="table table-hover">
                          <colgroup>
                            <col width="10%" />
                            <col width="25%" />
                            <col width="25%" />
                            <col width="25%" />
                            <col width="15%" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th class="text-center">No.</th>
                              <th class="text-center">Service</th>
                              <th class="text-center">Posting Price</th>
                              <th class="text-center">Comission, %</th>
                              <th class="text-center">Options</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="text-center">
                              <td>1</td>
                              <td>Service 1</td>
                              <td>500</td>
                              <td>5</td>
                              <td class="menu-action">
                                <div class="pdng5">
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-yellow vd_yellow"
                                  >
                                    <i
                                      class="fa fa-pencil"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-red vd_red"
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr class="text-center">
                              <td>2</td>
                              <td>Service 2</td>
                              <td>1.000</td>
                              <td>10</td>
                              <td class="menu-action">
                                <div class="pdng5">
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-yellow vd_yellow"
                                  >
                                    <i
                                      class="fa fa-pencil"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-red vd_red"
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr class="text-center">
                              <td>2</td>
                              <td>Service 3</td>
                              <td>1.450</td>
                              <td>14</td>
                              <td class="menu-action">
                                <div class="pdng5">
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-yellow vd_yellow"
                                  >
                                    <i
                                      class="fa fa-pencil"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#"
                                    class="btn menu-icon vd_bd-red vd_red"
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- col-md-12 end -->
            </div>
            <!-- row end -->
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
  name: "ServiceComission",
};
</script>