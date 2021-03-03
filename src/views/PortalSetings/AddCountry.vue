<template>
  <div id="AddCountry">
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
              <li class="active">Our Services</li>
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
              <i class="append-icon glyphicon glyphicon-tags"></i> Add Countrys
            </h1>
          </div>
        </div>
        <div class="vd_content-section clearfix">
          <div class="row">
            <div class="col-md-4">
              <div class="mgbt-xs-10">
                <button
                  type="button"
                  class="btn vd_btn vd_bg-blue btn-lg btn-block"
                  data-toggle="modal"
                  data-target="#addCounty"
                >
                  <span class="append-icon">
                    <i class="fa fa-plus-circle fa-fw"></i>
                  </span>Add County
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mgbt-xs-10">
                <button
                  type="button"
                  class="btn vd_btn vd_bg-blue btn-lg btn-block"
                  data-toggle="modal"
                  data-target="#addDescrit"
                >
                  <span class="append-icon">
                    <i class="fa fa-plus-circle fa-fw"></i>
                  </span>Add Descrit
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mgbt-xs-10">
                <button
                  type="button"
                  class="btn vd_btn vd_bg-blue btn-lg btn-block"
                  data-toggle="modal"
                  data-target="#addCitys"
                >
                  <span class="append-icon">
                    <i class="fa fa-plus-circle fa-fw"></i>
                  </span>Add Citys
                </button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="panel widget">
                <div class="panel-body table-responsive">
                  <table class="table table-hover center">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Discrit</th>
                        <th>Citys</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Beauty</td>
                        <td>
                          <a href="javascript:void(0);" data-toggle="modal" data-target="#Descrit">5</a>
                        </td>
                        <td>
                          <a href="javascript:void(0);" data-toggle="modal" data-target="#Citys">10</a>
                        </td>
                        <td class="menu-action">
                          <a
                            class="btn menu-icon vd_bd-blue vd_blue"
                            data-toggle="modal"
                            data-target="#addCounty"
                          >
                            <i
                              class="fa fa-plus"
                              data-toggle="tooltip"
                              data-original-title="add new"
                              data-placement="top"
                            ></i>
                          </a>
                          <a
                            data-original-title="edit"
                            data-toggle="tooltip"
                            data-placement="top"
                            class="btn menu-icon vd_bd-yellow vd_yellow"
                          >
                            <i class="fa fa-edit"></i>
                          </a>
                          <a
                            data-original-title="view"
                            data-toggle="tooltip"
                            data-placement="top"
                            class="btn menu-icon vd_bd-green vd_green"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                          <a
                            data-original-title="remove"
                            data-toggle="tooltip"
                            data-placement="top"
                            class="btn menu-icon vd_bd-red vd_red"
                          >
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Internet</td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#Descrit"
                          >10</a>
                        </td>
                        <td>
                          <a href="javascript:void(0);" data-toggle="modal" data-target="#Citys">20</a>
                        </td>
                        <td class="menu-action">
                          <a
                            class="btn menu-icon vd_bd-blue vd_blue"
                            data-toggle="modal"
                            data-target="#addCounty"
                          >
                            <i
                              class="fa fa-plus"
                              data-toggle="tooltip"
                              data-original-title="add new"
                              data-placement="top"
                            ></i>
                          </a>
                          <a
                            data-original-title="edit"
                            data-toggle="tooltip"
                            data-placement="top"
                            class="btn menu-icon vd_bd-yellow vd_yellow"
                          >
                            <i class="fa fa-edit"></i>
                          </a>
                          <a
                            data-original-title="view"
                            data-toggle="tooltip"
                            data-placement="top"
                            class="btn menu-icon vd_bd-green vd_green"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                          <a
                            data-original-title="remove"
                            data-toggle="tooltip"
                            data-placement="top"
                            class="btn menu-icon vd_bd-red vd_red"
                          >
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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
  name: "AddCountry",
};
</script>