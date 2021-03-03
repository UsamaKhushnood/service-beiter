<template>
  <div id="Administrator">
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
                <li class="active">Administrator</li>
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
                <span class="append-icon icon-user"></span> Administrator
              </h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row mrgn0">
              <div class="col-sm-12">
                <div class="container-fluid">
                  <div class="row mrgn0">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <div class="mgbt-xs-10">
                        <button
                          type="button"
                          class="btn vd_btn vd_bg-blue btn-lg btn-block"
                          data-toggle="modal"
                          data-target="#addAdmin"
                        >
                          <span class="append-icon">
                            <i class="fa fa-plus"></i>
                          </span>Add New Administrator
                        </button>
                      </div>
                    </div>
                    <div class="col-md-4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="pdng20">
                <div class="panel widget container-fluid">
                  <div class="row projectRow">
                    <div class="col-sm-2">
                      <img src="img/avatar/briant2.png" alt class="projectImg" />
                    </div>
                    <div class="col-sm-6 brdRight brdLeft">
                      <h4>adminName</h4>
                      <p class="mrgn5">
                        Name:
                        <strong>Erik</strong>
                      </p>
                      <p class="mrgn5">
                        Lastname:
                        <strong>Schmidt</strong>
                      </p>
                      <p class="mrgn5">Was added: 05-07-2017 12:05:00</p>
                      <p class="mrgn5">Phone: +1 800 1234567</p>
                      <p class="mrgn5">Email: somename@email.com</p>
                    </div>
                    <div class="col-sm-4 text-left">
                      <p class="mrgn5">
                        <a
                          href="javascript:void(0);"
                          data-toggle="modal"
                          data-target="#permissions"
                        >
                          <span class="label label-default vd_bg-yellow vd_white">
                            <span class="append-icon icon-key vd_white"></span> Permissions
                          </span>
                        </a>
                      </p>
                      <p class="mrgn5">
                        <a
                          href="javascript:void(0);"
                          data-toggle="modal"
                          data-target="#groupSettings"
                        >
                          <span class="label label-default vd_bg-green vd_white">
                            <span class="append-icon icon-users"></span> Group Settings
                          </span>
                        </a>
                      </p>
                      <p class="mrgn5">
                        <a
                          href="javascript:void(0);"
                          data-toggle="modal"
                          data-target="#changeSettings"
                        >
                          <span class="label label-default vd_bg-blue vd_white">
                            <span class="append-icon icon-tools"></span> Edit Settings
                          </span>
                        </a>
                      </p>
                      <p class="mrgn5" data-toggle="modal" data-target="#changePassword">
                        <a href="javascript:void(0);">
                          <span class="label label-default vd_bg-grey vd_white">
                            <span class="append-icon icon-lock"></span> Change Password
                          </span>
                        </a>
                      </p>
                      <p class="mrgn5" data-toggle="modal" data-target="#deleting">
                        <a href="javascript:void(0);">
                          <span class="label label-default vd_bg-red vd_white">
                            <span class="append-icon icon-trash"></span> Delete
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <!-- row end -->
                </div>
              </div>
            </div>
          </div>
          <!-- vd_content-section end -->
        </div>
        <!-- .vd_content -->
      </div>
      <!-- .vd_container -->
    </div>
 
</template>
<script>
export default {
  name: "Administrator",
};
</script>