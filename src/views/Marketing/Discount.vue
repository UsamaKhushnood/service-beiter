<template>
  <div id="Discount">
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
                <li class="active">Discount</li>
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
                <i class="append-icon glyphicon glyphicon-tags"></i> Discount
              </h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-12">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <div class="mgbt-xs-10">
                        <button
                          type="button"
                          class="btn vd_btn vd_bg-blue btn-lg btn-block"
                          data-toggle="modal"
                          data-target="#addDiscount"
                        >
                          <span class="append-icon">
                            <i class="fa fa-plus"></i>
                          </span>Add Discount
                        </button>
                      </div>
                    </div>
                    <div class="col-md-4"></div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 pdng5">
                      <table class="discountTable">
                        <colgroup>
                          <col width="5%" />
                          <col width="20%" />
                          <col width="20%" />
                          <col width="20%" />
                          <col width="25%" />
                          <col width="15%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th class="text-center">No.</th>
                            <th class="text-center">Discount Title</th>
                            <th class="text-center">Start Date</th>
                            <th class="text-center">End Date</th>
                            <th class="text-center">Discount Type</th>
                            <th class="text-center">Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Super Discount Name</td>
                            <td>2017-08-05</td>
                            <td>2017-08-25</td>
                            <td>15%</td>
                            <td>
                              <a
                                class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                                data-toggle="modal"
                                data-target="#editDiscount"
                              >
                                <i
                                  class="fa fa-pencil"
                                  data-original-title="edit"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                ></i>
                              </a>
                              <a
                                class="btn menu-icon vd_bd-red vd_red mrgn5 pdng1-8"
                                data-toggle="modal"
                                data-target="#removeDiscount"
                              >
                                <i
                                  class="fa fa-trash-o"
                                  data-original-title="remove"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                ></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Super Discount Name</td>
                            <td>2017-08-05</td>
                            <td>2017-08-25</td>
                            <td>15%</td>
                            <td>
                              <a
                                class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                                data-toggle="modal"
                                data-target="#editDiscount"
                              >
                                <i
                                  class="fa fa-pencil"
                                  data-original-title="edit"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                ></i>
                              </a>
                              <a
                                class="btn menu-icon vd_bd-red vd_red mrgn5 pdng1-8"
                                data-toggle="modal"
                                data-target="#removeDiscount"
                              >
                                <i
                                  class="fa fa-trash-o"
                                  data-original-title="remove"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                ></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Super Discount Name</td>
                            <td>2017-08-05</td>
                            <td>2017-08-25</td>
                            <td>15%</td>
                            <td>
                              <a
                                class="btn menu-icon vd_bd-blue vd_blue mrgn5 pdng1-8"
                                data-toggle="modal"
                                data-target="#editDiscount"
                              >
                                <i
                                  class="fa fa-pencil"
                                  data-original-title="edit"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                ></i>
                              </a>
                              <a
                                class="btn menu-icon vd_bd-red vd_red mrgn5 pdng1-8"
                                data-toggle="modal"
                                data-target="#removeDiscount"
                              >
                                <i
                                  class="fa fa-trash-o"
                                  data-original-title="remove"
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
                <!-- pdng5 -->
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
  name: "Discount",
};
</script>
