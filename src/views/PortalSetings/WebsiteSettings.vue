<template>
  <div id="WebsiteSettings">
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
                <li class="active">Website Settings</li>
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
                <i class="append-icon fa fa-fw fa-gears"></i> Website Settings
              </h1>
            </div>
          </div>
          <div class="vd_content-section clearfix settings">
            <div class="row">
              <div class="col-sm-12">
                <div class="tabs widget">
                  <ul class="nav nav-tabs widget">
                    <li class="active">
                      <a data-toggle="tab" href="#currency">
                        Currency Settings
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#prefix">
                        Prefix in Table
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#block">
                        Block by Country / IP
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#webinfo">
                        Website Info
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content widget">
                    <div id="currency" class="tab-pane active">
                      <div class="pdng15">
                        <div class="row">
                          <div class="col-md-12">
                            <table class="discountTable table">
                              <colgroup>
                                <col width="25%" />
                                <col width="25%" />
                                <col width="25%" />
                                <col width="25%" />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <td scope="row" class="text-center">Currency Name</td>
                                  <td>
                                    <div class="form-group pdng5">
                                      <div class="col-sm-12 controls">
                                        <div class="vd_checkbox checkbox-success">
                                          <input type="checkbox" value="1" id="checkbox-1" />
                                          <label for="checkbox-1">€ Euro</label>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="form-group pdng5">
                                      <div class="col-sm-12 controls">
                                        <div class="vd_checkbox checkbox-success">
                                          <input type="checkbox" value="2" id="checkbox-2" />
                                          <label for="checkbox-2">$ U.S. Dollar</label>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td class="menu-action">
                                    <div class="pdng5">
                                      <a
                                        data-toggle="modal"
                                        data-target="#"
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
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
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td scope="row" class="text-center">Currency Type</td>
                                  <td>
                                    <div class="form-group pdng5">
                                      <div class="col-sm-12 controls">
                                        <div class="vd_radio radio-success">
                                          <input
                                            type="radio"
                                            name="optionsRadios1"
                                            id="optionsRadios1"
                                            value="option1"
                                          />
                                          <label for="optionsRadios1">€ 2,5</label>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="form-group pdng5">
                                      <div class="col-sm-12 controls">
                                        <div class="vd_radio radio-success">
                                          <input
                                            type="radio"
                                            name="optionsRadios1"
                                            id="optionsRadios2"
                                            value="option2"
                                          />
                                          <label for="optionsRadios2">€ 2,5</label>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td class="menu-action">
                                    <div class="pdng5">
                                      <a
                                        data-toggle="modal"
                                        data-target="#"
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
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
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td scope="row" class="text-center">Sign for Price</td>
                                  <td>
                                    <div class="form-group pdng5">
                                      <div class="col-sm-12 controls">
                                        <div class="vd_radio radio-success">
                                          <input
                                            type="radio"
                                            name="optionsRadios2"
                                            id="optionsRadios3"
                                            value="option1"
                                          />
                                          <label for="optionsRadios3">, Kuma</label>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="form-group pdng5">
                                      <div class="col-sm-12 controls">
                                        <div class="vd_radio radio-success">
                                          <input
                                            type="radio"
                                            name="optionsRadios2"
                                            id="optionsRadios4"
                                            value="option2"
                                          />
                                          <label for="optionsRadios4">. Point</label>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td class="menu-action">
                                    <div class="pdng5">
                                      <a
                                        data-toggle="modal"
                                        data-target="#"
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                        ></i>
                                      </a>
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
                                    </div>
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
                    <!-- tab-pane -->

                    <div id="prefix" class="tab-pane">
                      <div class="pdng15">
                        <div class="row">
                          <div class="col-md-12">
                            <table class="discountTable table">
                              <colgroup>
                                <col width="25%" />
                                <col width="50%" />
                                <col width="25%" />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <td scope="row" class="text-center">Contract Prefix</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Contract Prefix" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Job Prefix</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Job Prefix" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Invoice Prefix</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Invoice Prefix" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Post Prefix</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Post Prefix" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">User Prefix</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="User Prefix" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Client Prefix</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Client Prefix" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Offer Prefix</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Offer Prefix" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Cost Estimate Prefix</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Cost Estimate Prefix" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Service Prefix</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Service Prefix" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                          <!-- col-md-12 end -->
                        </div>
                        <!-- row end -->
                      </div>
                      <!-- pdng5 -->
                    </div>
                    <!-- tab-pane -->
                    <div id="webinfo" class="tab-pane">
                      <div class="pdng15">
                        <div class="row">
                          <div class="col-md-12">
                            <table class="discountTable table">
                              <colgroup>
                                <col width="25%" />
                                <col width="50%" />
                                <col width="25%" />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <td scope="row" class="text-center">Upload Log</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="file" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Upload Favicon</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="file" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Upload Background Image</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="file" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Website Title</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Website Title" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Facebook Login Details</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Facebook Login Details" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Google Plus Login Details</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Google Plus Login Details" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">YamiYami Login Details</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="YamiYami Login Details" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                                <tr>
                                  <td scope="row" class="text-center">Yekbun Login Details</td>
                                  <td>
                                    <div class="form-group">
                                      <div class="col-sm-1"></div>
                                      <div class="col-sm-10 controls">
                                        <input type="text" placeholder="Yekbun Login Details" />
                                      </div>
                                      <div class="col-sm-1"></div>
                                    </div>
                                  </td>
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
                                        class="btn menu-icon vd_bd-green vd_green"
                                      >
                                        <i
                                          class="fa fa-save"
                                          data-original-title="Save"
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
                          <!-- col-md-12 end -->
                        </div>
                        <!-- row end -->
                      </div>
                      <!-- pdng5 -->
                    </div>
                    <!-- tab-pane -->

                    <div id="block" class="tab-pane">
                      <div class="pdng5">
                        <div class="row">
                          <div class="col-md-12">
                            <ul class="nav nav-tabs widget">
                              <li class="active">
                                <a data-toggle="tab" href="#blockCountry">
                                  Block by Country
                                  <span class="menu-active">
                                    <i class="fa fa-caret-up"></i>
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a data-toggle="tab" href="#blockIP">
                                  Block by IP
                                  <span class="menu-active">
                                    <i class="fa fa-caret-up"></i>
                                  </span>
                                </a>
                              </li>
                            </ul>
                            <div class="tab-content widget">
                              <div id="blockCountry" class="tab-pane active">
                                <div class="row mrgn15-0">
                                  <div class="col-md-4"></div>
                                  <div class="col-md-4">
                                    <div class="mgbt-xs-10">
                                      <button
                                        type="button"
                                        class="btn vd_btn vd_bg-blue btn-lg btn-block"
                                        data-toggle="modal"
                                        data-target="#blockCountryModal"
                                      >
                                        <span class="append-icon">
                                          <i class="fa fa-lock"></i>
                                        </span>Block by Country
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-md-4"></div>
                                </div>
                                <div class="row pdng5">
                                  <div class="col-md-12">
                                    <table class="discountTable table">
                                      <colgroup>
                                        <col width="25%" />
                                        <col width="25%" />
                                        <col width="25%" />
                                        <col width="25%" />
                                      </colgroup>
                                      <thead>
                                        <tr>
                                          <th>Country Name</th>
                                          <th>Country ID</th>
                                          <th>Date</th>
                                          <th>Option</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>India</td>
                                          <td>IN</td>
                                          <td>12.12.17-17:30</td>
                                          <td class="menu-action">
                                            <div class="pdng5">
                                              <a
                                                data-toggle="modal"
                                                data-target="#"
                                                class="btn menu-icon vd_bd-yellow vd_yellow"
                                              >
                                                <i
                                                  class="fa fa-unlock"
                                                  data-original-title="Unlock"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>China</td>
                                          <td>CN</td>
                                          <td>12.12.17-17:30</td>
                                          <td class="menu-action">
                                            <div class="pdng5">
                                              <a
                                                data-toggle="modal"
                                                data-target="#"
                                                class="btn menu-icon vd_bd-yellow vd_yellow"
                                              >
                                                <i
                                                  class="fa fa-unlock"
                                                  data-original-title="Unlock"
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
                                <!-- row end -->
                              </div>

                              <div id="blockIP" class="tab-pane">
                                <div class="row mrgn15-0">
                                  <div class="col-md-4"></div>
                                  <div class="col-md-4">
                                    <div class="mgbt-xs-10">
                                      <button
                                        type="button"
                                        class="btn vd_btn vd_bg-blue btn-lg btn-block"
                                        data-toggle="modal"
                                        data-target="#blockIpModal"
                                      >
                                        <span class="append-icon">
                                          <i class="fa fa-lock"></i>
                                        </span>Block by IP
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-md-4"></div>
                                </div>

                                <div class="row pdng5">
                                  <div class="col-md-12">
                                    <table class="discountTable table">
                                      <colgroup>
                                        <col width="50%" />
                                        <col width="25%" />
                                        <col width="25%" />
                                      </colgroup>
                                      <thead>
                                        <tr>
                                          <th>IP</th>
                                          <th>Date</th>
                                          <th>Option</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>192.168.258.123</td>
                                          <td>12.12.17-17:30</td>
                                          <td class="menu-action">
                                            <div class="pdng5">
                                              <a
                                                data-toggle="modal"
                                                data-target="#"
                                                class="btn menu-icon vd_bd-yellow vd_yellow"
                                              >
                                                <i
                                                  class="fa fa-unlock"
                                                  data-original-title="Unlock"
                                                  data-toggle="tooltip"
                                                  data-placement="top"
                                                ></i>
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>192.168.258.123</td>
                                          <td>12.12.17-17:30</td>
                                          <td class="menu-action">
                                            <div class="pdng5">
                                              <a
                                                data-toggle="modal"
                                                data-target="#"
                                                class="btn menu-icon vd_bd-yellow vd_yellow"
                                              >
                                                <i
                                                  class="fa fa-unlock"
                                                  data-original-title="Unlock"
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
                                <!-- row end -->
                              </div>
                            </div>
                          </div>
                          <!-- col-md-12 end -->
                        </div>
                        <!-- row end -->
                      </div>
                      <!-- pdng5 -->
                    </div>
                    <!-- tab-pane -->
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
  name: "WebsiteSettings",
};
</script>