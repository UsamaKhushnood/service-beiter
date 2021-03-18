<template>
  <div id="Review">
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
                <li class="active">Reviews</li>
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
                <span class="append-icon fa fa-star-half-o"></span> Reviews
              </h1>
            </div>
          </div>
          <!-- vd_title-section end -->
          <div class="row">
            <div class="col-md-12">
              <!-- Start default tabs -->
              <div class="panel panel-tab rounded shadow">
                <!-- Start tabs heading -->
                <div class="panel-heading no-padding"></div>
                <!-- /.panel-heading -->
                <!--/ End tabs heading -->

                <!-- Start tabs content -->
                <div class="panel-body">
                  <div class="tab-content">
                    <div class="tab-pane   in active" id="tab1-1">
                      <div class="panel">
                        <div class="panel-heading">
                          <div class="pull-left">
                            <h3 class="panel-title">Current Reviews</h3>
                          </div>
                          <div class="pull-right my-width">
                            <div class="search input-group">
                              <input
                                type="search"
                                class="form-control"
                                placeholder="Search Current Reviews"
                              />
                              <span class="input-group-btn">
                                <button
                                  class="btn btn-default"
                                  type="button"
                                  style=" height: 34px;"
                                >
                                  <span class="fa fa-search"></span>
                                  <span class="sr-only">Search</span>
                                </button>
                              </span>
                            </div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body no-padding">
                          <div class="table-responsive" style="margin-top: -1px;">
                            <table class="table table-striped table-primary">
                              <thead>
                                <tr>
                                  <th class="text-center border-right" style="width: 1%;">No.</th>
                                  <th>Reviews ID</th>
                                  <th>For Shop</th>
                                  <th>Username</th>
                                  <th>Avaerage Rating</th>
                                  <th>Date / Time</th>
                                  <th>Status</th>
                                  <th>Option</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>01</td>
                                  <td>Yami-2000</td>
                                  <td>My Shop</td>
                                  <td>rizwan</td>
                                  <td align="left">
                                    <div class="rating">
                                      <span class="fa fa-star" style="color:#FFB900"></span>
                                      <span class="fa fa-star" style="color:#FFB900"></span>
                                      <span class="fa fa-star-o" style="color:#FFB900"></span>
                                      <span class="fa fa-star-o" style="color:#FFB900"></span>
                                      <span class="fa fa-star-o" style="color:#FFB900"></span>
                                    </div>
                                  </td>
                                  <td>22/3/2015/ 8:20</td>
                                  <td>
                                    <a
                                      href="#"
                                      class="btn btn-success btn-xs MyPadding"
                                      data-toggle="modal"
                                      data-target=".bs-example-modal-table-zip-seen"
                                    >Seen</a>
                                  </td>

                                  <td>
                                    <a
                                      href="#"
                                      class="btn btn-success btn-xs MyPadding"
                                      data-toggle="modal"
                                      data-target=".bs-example-modal-form-popup"
                                      data-placement="top"
                                      data-original-title="Cancel"
                                    >
                                      <i class="fa fa-times"></i>
                                    </a>
                                  </td>
                                </tr>

                                <tr>
                                  <td>01</td>
                                  <td>Yami-2000</td>
                                  <td>My Shop</td>
                                  <td>rizwan</td>
                                  <td align="left">
                                    <div class="rating">
                                      <span class="fa fa-star" style="color:#FFB900"></span>
                                      <span class="fa fa-star" style="color:#FFB900"></span>
                                      <span class="fa fa-star-o" style="color:#FFB900"></span>
                                      <span class="fa fa-star-o" style="color:#FFB900"></span>
                                      <span class="fa fa-star-o" style="color:#FFB900"></span>
                                    </div>
                                  </td>
                                  <td>22/3/2015/ 8:20</td>
                                  <td>
                                    <a
                                      href="#"
                                      class="btn btn-danger btn-xs MyPadding"
                                      data-toggle="modal"
                                      data-target="#modalunseen"
                                    >Unseen</a>
                                  </td>

                                  <td>
                                    <a
                                      href="#"
                                      class="btn btn-success btn-xs MyPadding"
                                      data-toggle="modal"
                                      data-target=".bs-example-modal-form-popup"
                                      data-placement="top"
                                      data-original-title="Cancel"
                                    >
                                      <i class="fa fa-times"></i>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- /.table-responsive -->
                        </div>
                        <!-- vd_content end -->
                      </div>
                      <!-- vd_container end -->
                    </div>
                    <!-- vd_content-wrapper end -->

                    <!-- Middle Content End -->
                  </div>
                  <!-- .container -->
                </div>
                <!-- .content -->

                <!-- Footer Start -->
                <footer class id="footer">
                  <div class="vd_bottom">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-10">
                          <div class="copyright">
                            Copyright &copy;2014 Venmond Inc. All Rights
                            Reserved
                          </div>
                        </div>
                      </div>
                      <!-- row -->
                    </div>
                    <!-- container -->
                  </div>
                </footer>
                <!-- Footer END -->
              </div>

              <!-- .vd_body END  -->
              <a id="back-top" href="#" data-action="backtop" class="vd_back-top visible">
                <i class="fa fa-angle-up"></i>
              </a>

              <!--
              <a class="back-top" href="#" id="back-top"> <i class="icon-chevron-up icon-white"> </i> </a>-->

              <!-- MODALS start -->
              <div
                class="modal   bs-example-modal-table-zip-unseen"
                id="modalunseen"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg pop-size" style="width:1200px;">
                  <div class="modal-content" style="background:white;">
                    <div class="panel panel-success">
                      <div class="panel-heading" style="background-color:#81B71A;"></div>
                      <div class="panel-body">
                        <h3 style="color:#81B71A; font-weight:bold;">Shop Name</h3>
                        <button
                          type="button"
                          class="btn btn-default pull-right"
                          data-dismiss="modal"
                          style="float:left;"
                        >Close</button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="panel-body no-padding">
                      <div class="row">
                        <div class="col-md-12">
                          <!-- Start bordered table -->

                          <div class="table-responsive mb-20">
                            <br />
                            <table class="table table-bordered">
                              <tbody>
                                <tr>
                                  <td align="center" class="rating-width10">
                                    <img
                                      data-no-retina
                                      class="img-thumbnail img-bordered-default"
                                      src="img/avatar/customer175.png"
                                      alt="Leli Madang"
                                    />
                                    <strong>Suliman</strong>
                                  </td>
                                  <td>
                                    <div class="row border-bottom">
                                      <div class="col-md-6">Order Time : 22-8-2016 / 17:22:20</div>
                                      <div class="col-md-6">Order No : YAMI-0000321</div>
                                      <hr />
                                    </div>
                                    <br />
                                    <div class="row">
                                      <div class="col-md-12">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                      </div>
                                    </div>
                                  </td>
                                  <td class="rating-width15" style="width:150px;">
                                    <div style="float:left; width:40px;">1</div>

                                    <div class="rating">
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                    </div>

                                    <br />

                                    <div style="float:left; width:40px;">2</div>

                                    <div class="rating">
                                      <span class="fa fa-star activr" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                    </div>

                                    <br />

                                    <div style="float:left; width:40px;">3</div>

                                    <div class="rating">
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                    </div>
                                    <br />

                                    <div style="float:left; width:40px;">4</div>

                                    <div class="rating">
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                      <span class="fa fa-star-o" style="color:#81B71A"></span>
                                    </div>
                                    <br />

                                    <div style="float:left; width:40px;">5</div>

                                    <div class="rating">
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                      <span class="fa fa-star active" style="color:#81B71A"></span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- /.table-responsive -->
                          <!--/ End bordered table -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
              </div>

              <div
                class="modal   bs-example-modal-table-zip-seen"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg pop-size" style="width:1200px;">
                  <div class="modal-content" style="background:white;">
                    <div class="panel panel-success">
                      <div class="panel-heading" style="background-color:#81B71A;"></div>
                      <div class="panel-body">
                        <h3 style="color:#81B71A; font-weight:bold;">Shop Name</h3>
                        <button
                          type="button"
                          class="btn btn-default pull-right"
                          data-dismiss="modal"
                        >Close</button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="panel-body no-padding">
                      <div class="row">
                        <div class="col-md-12">
                          <!-- Start bordered table -->

                          <div class="table-responsive mb-20" style="background:white;">
                            <br />

                            <table class="table table-bordered"></table>
                          </div>

                          <tbody>
                            <tr>
                              <td align="center" class="rating-width10" style="width:150px;">
                                <img
                                  data-no-retina
                                  class="img-thumbnail img-bordered-default"
                                  src="img/avatar/customer175.png"
                                  alt="Leli Madang"
                                />
                                <strong>Suliman</strong>
                              </td>
                              <td>
                                <div class="row border-bottom">
                                  <div class="col-md-6">Order Time : 22-8-2016 / 17:22:20</div>
                                  <div class="col-md-6">Order No : YAMI-0000321</div>
                                  <hr />
                                </div>
                                <br />
                                <div class="row">
                                  <div class="col-md-12">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                  </div>
                                </div>
                              </td>
                              <td class="rating-width15" style="width:150px;">
                                <div style="float:left; width:40px;">1</div>

                                <div class="rating">
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                </div>
                                <br />
                                <div style="float:left; width:40px;">2</div>

                                <div class="rating">
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                </div>

                                <br />
                                <div style="float:left; width:40px;">3</div>

                                <div class="rating">
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                </div>
                                <br />
                                <div style="float:left; width:40px;">4</div>
                                <div class="rating">
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                </div>
                                <br />
                                <div style="float:left; width:40px;">5</div>

                                <div class="rating">
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td align="center" class="rating-width10">
                                <h6 class="text-center">About Shop</h6>
                                <div class="row">
                                  <div class="col-md-6"></div>
                                  <div class="col-md-6"></div>
                                  <div class="col-md-6"></div>
                                  <div class="col-md-6"></div>
                                  <div class="col-md-6"></div>
                                  <div class="col-md-6"></div>
                                  <div class="col-md-6"></div>
                                  <div class="col-md-6"></div>
                                </div>
                              </td>
                              <td>
                                <div class="row border-bottom">
                                  <div class="col-md-6">Order Time : 22-8-2016 / 17:22:20</div>
                                  <div class="col-md-6">Order No : YAMI-0000321</div>
                                  <hr />
                                </div>
                                <br />
                                <div class="row">
                                  <div class="col-md-12">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                  </div>
                                </div>
                              </td>
                              <td class="rating-width15" align="center">
                                <img
                                  data-no-retina
                                  class="img-thumbnail img-bordered-default"
                                  src="img/avatar/customer175.png"
                                  alt="Leli Madang"
                                />

                                <div class="rating">
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star active" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                  <span class="fa fa-star-o" style="color:#81B71A"></span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </div>
                        <!-- /.table-responsive -->
                        <!--/ End bordered table -->
                      </div>
                    </div>
                    <div class="modal-footer"></div>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>

            <!-- SUBCATEGORIES -->
            <div
              class="modal  "
              id="subcategories"
              tabindex="-1"
              role="dialog"
              aria-labelledby="All subcategories"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header vd_bg-green">
                    <button
                      type="button"
                      class="close vd_white"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title vd_white" id="myModalLabel">SUBCATEGORIES</h4>
                  </div>
                  <div class="modal-body">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Subcategory Name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fashion</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                          <td>Health</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                          <td>Salon</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                          <td>Health</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                          <td>Salon</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                  <div class="modal-footer vd_bg-white">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addSubcategory"
                    >
                      <i class="fa fa-plus-circle"></i> Add New
                    </button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- SERVICES -->
            <div
              class="modal  "
              id="services"
              tabindex="-1"
              role="dialog"
              aria-labelledby="All services"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header vd_bg-green">
                    <button
                      type="button"
                      class="close vd_white"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title vd_white" id="myModalLabel">SERVICES</h4>
                  </div>
                  <div class="modal-body">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Service Name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fashion</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                          <td>Health</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                          <td>Salon</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                          <td>Health</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                          <td>Salon</td>
                          <td class="menu-action">
                            <a
                              data-original-title="edit"
                              data-toggle="tooltip"
                              data-placement="top"
                              class="btn menu-icon vd_bd-yellow vd_yellow"
                            >
                              <i class="fa fa-edit"></i>
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
                  <div class="modal-footer vd_bg-white">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addService"
                    >
                      <i class="fa fa-plus-circle"></i> Add New
                    </button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- BLOCK THIS JOB -->
            <div
              class="modal  "
              id="blockThisJob"
              tabindex="-1"
              role="dialog"
              aria-labelledby="Add maincategory"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header vd_bg-green">
                    <button
                      type="button"
                      class="close vd_white"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title vd_white">BLOCK THIS JOB</h4>
                  </div>
                  <div class="modal-body">
                    <form method="post">
                      <div class="form-group">
                        <select class="custom-select">
                          <option selected>Select the Block reason</option>
                          <option value="1">Because of</option>
                          <option value="2">Because of</option>
                        </select>
                      </div>
                      <button type="submit" class="btn btn-primary">OK</button>
                    </form>
                  </div>
                  <div class="modal-footer vd_bg-white">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- REMOVE THIS JOB -->
            <div
              class="modal  "
              id="removeThisJob"
              tabindex="-1"
              role="dialog"
              aria-labelledby="Add maincategory"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header vd_bg-green">
                    <button
                      type="button"
                      class="close vd_white"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title vd_white">REMOVE THIS JOB</h4>
                  </div>
                  <div class="modal-body">
                    <form method="post">
                      <div class="form-group">
                        <select class="custom-select">
                          <option selected>Select the Remove reason</option>
                          <option value="1">Because of</option>
                          <option value="2">Because of</option>
                        </select>
                      </div>
                      <button type="submit" class="btn btn-primary">OK</button>
                    </form>
                  </div>
                  <div class="modal-footer vd_bg-white">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- CONTRACT DETAILS -->
            <div
              class="modal right   infoModal"
              id="viewContract"
              tabindex="-1"
              role="dialog"
              aria-labelledby="Add maincategory"
              aria-hidden="true"
              style="z-index:1041;"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header vd_bg-green text-center relative modal-header-projects">
                    <button
                      type="button"
                      class="vd_white close"
                      data-dismiss="modal"
                      aria-label="Close"
                      style="float:left;opacity:1;font-size:3rem;"
                    >
                      <span aria-hidden="true">
                        <i class="fa fa-arrow-circle-right"></i>
                      </span>
                    </button>
                    <h4 class="modal-title vd_white modalProjectHeader">CONTRACT DETAILS</h4>
                    <div class="row absoluteRow vd_white mrgn0">
                      <div class="col-md-2 pdng5-0 col-md-offset-3">
                        <h6 class="mrgn0">
                          Contract ID:
                          <strong>112223443</strong>
                        </h6>
                      </div>
                      <div class="col-md-2 pdng5-0">
                        <h6 class="mrgn0">
                          Contract Type:
                          <strong>Offer</strong>
                        </h6>
                      </div>
                      <div class="col-md-2 pdng5-0">
                        <h6 class="mrgn0">
                          Budget:
                          <strong>2.500 €</strong>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="modal-body h100">
                    <div class="row">
                      <div class="pdng20">
                        <div class="col-md-3">
                          <h4>Contract Menu</h4>
                          <ul class="prMenu">
                            <li class="active">
                              <a data-toggle="tab" href="#contrDetails">Details</a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#contrFiles">Files</a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#contrMilestones">Milestones</a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#contrTasks">All Tasks</a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#contrInvoices">Invoices</a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#contrPayments">Payments</a>
                            </li>
                            <li>
                              <a data-toggle="tab" href="#contrMembers">Project Members</a>
                            </li>
                          </ul>
                          <!-- Menu Buttons end -->
                        </div>
                        <!-- Left Modal Deck end -->
                        <div class="col-md-9">
                          <div class="tab-content no-bd mrgn0 pdng0">
                            <!-- contrDetails -->
                            <div class="tab-pane active   in" id="contrDetails">
                              <div class="panel widget container-fluid">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="container-fluid">
                                      <h3>Contract Title Here</h3>
                                      <hr class="mrgn15-0" />
                                      <div class="row">
                                        <div class="col-md-6 content-list content-image">
                                          <div class="col-xs-3 text-center pdng0">
                                            <div class="menu-icon">
                                              <a href="#">
                                                <img
                                                  alt="example image"
                                                  src="img/avatar/briant2.png"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="col-xs-9 pdng0">
                                            <span
                                              class="label label-default vd_bg-green vd_white"
                                            >Client Main Contact</span>
                                            <br />
                                            <h5 class="mrgn0">Jane Doe</h5>
                                            <span>tel: 937 947201 49</span>
                                          </div>
                                        </div>
                                        <div class="col-md-6 content-list content-image">
                                          <div class="col-xs-3 text-center pdng0">
                                            <div class="menu-icon">
                                              <a href="#">
                                                <img
                                                  alt="example image"
                                                  src="img/avatar/briant.png"
                                                />
                                              </a>
                                            </div>
                                          </div>
                                          <div class="col-xs-9 pdng0">
                                            <span
                                              class="label label-default vd_bg-blue vd_white"
                                            >Project Leader</span>
                                            <br />
                                            <h5 class="mrgn0">Homer Simpson</h5>
                                            <span>tel: 937 947201 49</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row mrgn10-0 projectRow">
                                        <div class="col-sm-12 pdng0">
                                          <div class="pdng10 vd_bg-light-grey vd_bdl-green brdl4">
                                            <h4>Payment Request</h4>
                                            <h5 class="vd_green">User Name</h5>
                                            <h5>
                                              <span
                                                class="label label-default vd_bg-green vd_white fs2-0"
                                              >$ 29.00</span>
                                            </h5>
                                            <p>Date: 03-08-2017 10:00 pm</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row mrgn10-0 projectRow">
                                        <div class="col-sm-12 pdng0">
                                          <div class="pdng10 vd_bg-light-grey vd_bdl-blue brdl4">
                                            <h4>Work Status Request</h4>
                                            <h5 class="vd_blue">User Name</h5>
                                            <h5>
                                              <span
                                                class="label label-default vd_bg-blue vd_white fs2-0"
                                              >Close Milestone</span>
                                            </h5>
                                            <p>Date: 03-08-2017 10:00 pm</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="content-list content-image menu-action-right">
                                      <div data-rel="scroll" data-scrollheight="500">
                                        <ul class="list-wrapper pd-lr-15">
                                          <li>
                                            <div class="menu-icon">
                                              <a href="#">
                                                <img
                                                  alt="example image"
                                                  src="img/avatar/briant2.png"
                                                />
                                              </a>
                                            </div>
                                            <div class="menu-text">
                                              This product is so good that i
                                              manage to buy it 1 for me and 3
                                              for my families. Lorem ipsum dolor
                                              sit amet, consectetur adipisicing
                                              elit, sed do eiusmod tempor
                                              incidtation ullamco laboris nisi
                                              ut aliquip ex tris.
                                            </div>
                                            <div class="menu-text">
                                              <div class="menu-info">
                                                <span class="menu-date">12 Minutes Ago</span>
                                              </div>
                                            </div>
                                            <div class="menu-action">
                                              <div
                                                class="menu-action-icon vd_green"
                                                data-original-title="Approve"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-check"></i>
                                              </div>
                                              <div
                                                class="menu-action-icon vd_red"
                                                data-original-title="Reject"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-times"></i>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="menu-icon">
                                              <a href="#">
                                                <img
                                                  alt="example image"
                                                  src="img/avatar/briant.png"
                                                />
                                              </a>
                                            </div>
                                            <div class="menu-text">
                                              This product is so good that i
                                              manage to buy it 1 for me and 3
                                              for my families. Lorem ipsum dolor
                                              sit amet, consectetur adipisicing
                                              elit, sed do eiusmod tempor
                                              incidtation ullamco laboris nisi
                                              ut aliquip ex tris.
                                            </div>
                                            <div class="menu-text">
                                              <div class="menu-info">
                                                <span class="menu-date">32 Minutes Ago</span>
                                              </div>
                                            </div>
                                            <div class="menu-action">
                                              <div
                                                class="menu-action-icon vd_green"
                                                data-original-title="Approve"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-check"></i>
                                              </div>
                                              <div
                                                class="menu-action-icon vd_red"
                                                data-original-title="Reject"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-times"></i>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="menu-icon">
                                              <a href="#">
                                                <img
                                                  alt="example image"
                                                  src="img/avatar/briant2.png"
                                                />
                                              </a>
                                            </div>
                                            <div class="menu-text">
                                              This product is so good that i
                                              manage to buy it 1 for me and 3
                                              for my families. Lorem ipsum dolor
                                              sit amet, consectetur adipisicing
                                              elit, sed do eiusmod tempor
                                              incidtation ullamco laboris nisi
                                              ut aliquip ex tris.
                                            </div>
                                            <div class="menu-text">
                                              <div class="menu-info">
                                                <span class="menu-date">2017/04/03 05:30pm</span>
                                              </div>
                                            </div>
                                            <div class="menu-action">
                                              <div
                                                class="menu-action-icon vd_green"
                                                data-original-title="Approve"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-check"></i>
                                              </div>
                                              <div
                                                class="menu-action-icon vd_red"
                                                data-original-title="Reject"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-times"></i>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="menu-icon">
                                              <a href="#">
                                                <img
                                                  alt="example image"
                                                  src="img/avatar/briant.png"
                                                />
                                              </a>
                                            </div>
                                            <div class="menu-text">
                                              This product is so good that i
                                              manage to buy it 1 for me and 3
                                              for my families. Lorem ipsum dolor
                                              sit amet, consectetur adipisicing
                                              elit, sed do eiusmod tempor
                                              incidtation ullamco laboris nisi
                                              ut aliquip ex tris.
                                            </div>
                                            <div class="menu-text">
                                              <div class="menu-info">
                                                <span class="menu-date">2017/04/03 05:30pm</span>
                                              </div>
                                            </div>
                                            <div class="menu-action">
                                              <div
                                                class="menu-action-icon vd_green"
                                                data-original-title="Approve"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-check"></i>
                                              </div>
                                              <div
                                                class="menu-action-icon vd_red"
                                                data-original-title="Reject"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-times"></i>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="menu-icon">
                                              <a href="#">
                                                <img
                                                  alt="example image"
                                                  src="img/avatar/briant2.png"
                                                />
                                              </a>
                                            </div>
                                            <div class="menu-text">
                                              This product is so good that i
                                              manage to buy it 1 for me and 3
                                              for my families. Lorem ipsum dolor
                                              sit amet, consectetur adipisicing
                                              elit, sed do eiusmod tempor
                                              incidtation ullamco laboris nisi
                                              ut aliquip ex tris.
                                            </div>
                                            <div class="menu-text">
                                              <div class="menu-info">
                                                <span class="menu-date">2017/04/03 05:30pm</span>
                                              </div>
                                            </div>
                                            <div class="menu-action">
                                              <div
                                                class="menu-action-icon vd_green"
                                                data-original-title="Approve"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-check"></i>
                                              </div>
                                              <div
                                                class="menu-action-icon vd_red"
                                                data-original-title="Reject"
                                                data-rel="tooltip-bottom"
                                              >
                                                <i class="fa fa-times"></i>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- tab end -->
                            <!-- contrDetails end -->

                            <!-- contrFiles -->

                            <div class="tab-pane  " id="contrFiles">
                              <div
                                class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4"
                              >
                                <div class="col-sm-3 pdng5-0 text-center">
                                  <a
                                    data-toggle="modal"
                                    data-target="#showFile"
                                    href="javascript:void(0);"
                                  >
                                    <img src="img/products/06.jpg" alt width="80" height="80" />
                                  </a>
                                </div>
                                <div class="col-sm-9">
                                  <div class="col-sm-3">06_plan.jpg</div>
                                  <div class="col-sm-3">
                                    <i class="icon-user"></i> Vint Cerf
                                  </div>
                                  <div class="col-sm-3">320 KB</div>
                                  <div class="col-sm-3">
                                    <span class="label label-default vd_bg-green vd_white">Seen</span>
                                  </div>
                                </div>
                              </div>
                              <!-- Task Image end -->

                              <div
                                class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-red brdl4"
                              >
                                <div class="col-sm-3 pdng5-0 text-center">
                                  <a
                                    data-toggle="modal"
                                    data-target="#showFile"
                                    href="javascript:void(0);"
                                  >
                                    <img src="img/products/06.jpg" alt width="80" height="80" />
                                  </a>
                                </div>
                                <div class="col-sm-9">
                                  <div class="col-sm-3">06_plan.jpg</div>
                                  <div class="col-sm-3">
                                    <i class="icon-user"></i> Vint Cerf
                                  </div>
                                  <div class="col-sm-3">320 KB</div>
                                  <div class="col-sm-3">
                                    <span class="label label-default vd_bg-red vd_white">Not Seen</span>
                                  </div>
                                </div>
                              </div>
                              <!-- Task Image end -->

                              <div
                                class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4"
                              >
                                <div class="col-sm-3 pdng5-0 text-center">
                                  <a
                                    data-toggle="modal"
                                    data-target="#showFile"
                                    href="javascript:void(0);"
                                  >
                                    <img src="img/products/06.jpg" alt width="80" height="80" />
                                  </a>
                                </div>
                                <div class="col-sm-9">
                                  <div class="col-sm-3">06_plan.jpg</div>
                                  <div class="col-sm-3">
                                    <i class="icon-user"></i> Vint Cerf
                                  </div>
                                  <div class="col-sm-3">320 KB</div>
                                  <div class="col-sm-3">
                                    <span class="label label-default vd_bg-green vd_white">Seen</span>
                                  </div>
                                </div>
                              </div>
                              <!-- Task Image end -->
                            </div>
                            <!-- tab end -->

                            <!-- contrFiles end -->

                            <!-- contrMilestones -->

                            <div class="tab-pane  " id="contrMilestones">
                              <div class="container-fluid">
                                <h3>Contract Milestones</h3>
                                <hr class="mrgn10-0" />

                                <div class="row mrgn30-0 projectRow vd_bg-light-grey">
                                  <div class="col-sm-2 brdRight">
                                    <div class="circleBar" data-percent="50"></div>
                                  </div>
                                  <div class="col-sm-8 brdRight">
                                    <h4>Concept milestone1</h4>
                                    <p class="mrgn5">Work Start: 05-07-2017 12:05:00</p>
                                    <p class="mrgn5">Date Due: 05-07-2017 12:05:00</p>
                                  </div>
                                  <div class="col-sm-2">
                                    <h4>Tasks</h4>
                                    <p class="mrgn5">
                                      <span class="label label-default vd_bg-blue vd_white">0</span>
                                      Pending
                                    </p>
                                    <p class="mrgn5">
                                      <span class="label label-default vd_bg-blue vd_white">1</span>
                                      Behind
                                    </p>
                                  </div>
                                </div>
                                <!-- row end -->

                                <div class="row mrgn30-0 projectRow vd_bg-light-grey">
                                  <div class="col-sm-2 brdRight">
                                    <div class="circleBar" data-percent="90"></div>
                                  </div>
                                  <div class="col-sm-8 brdRight">
                                    <h4>Concept milestone2</h4>
                                    <p class="mrgn5">Work Start: 05-07-2017 12:05:00</p>
                                    <p class="mrgn5">Date Due: 05-07-2017 12:05:00</p>
                                  </div>
                                  <div class="col-sm-2">
                                    <h4>Tasks</h4>
                                    <p class="mrgn5">
                                      <span class="label label-default vd_bg-blue vd_white">0</span>
                                      Pending
                                    </p>
                                    <p class="mrgn5">
                                      <span class="label label-default vd_bg-blue vd_white">1</span>
                                      Behind
                                    </p>
                                  </div>
                                </div>
                                <!-- row end -->

                                <div class="row mrgn30-0 projectRow vd_bg-light-grey">
                                  <div class="col-sm-2 brdRight">
                                    <div class="circleBar" data-percent="20"></div>
                                  </div>
                                  <div class="col-sm-8 brdRight">
                                    <h4>Concept milestone3</h4>
                                    <p class="mrgn5">Work Start: 05-07-2017 12:05:00</p>
                                    <p class="mrgn5">Date Due: 05-07-2017 12:05:00</p>
                                  </div>
                                  <div class="col-sm-2">
                                    <h4>Tasks</h4>
                                    <p class="mrgn5">
                                      <span class="label label-default vd_bg-blue vd_white">0</span>
                                      Pending
                                    </p>
                                    <p class="mrgn5">
                                      <span class="label label-default vd_bg-blue vd_white">1</span>
                                      Behind
                                    </p>
                                  </div>
                                </div>
                                <!-- row end -->
                              </div>
                              <!-- container-fluid end -->
                            </div>
                            <!-- tab end -->

                            <!-- contrMilestones end -->

                            <!-- contrTasks -->

                            <div class="tab-pane  " id="contrTasks">
                              <div class="container-fluid">
                                <h3>All Tasks</h3>
                                <hr class="mrgn10-0" />
                                <div
                                  class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4"
                                >
                                  <div class="col-sm-3 pdng5-0">
                                    <h5 class="mrgn0">Change background Images</h5>
                                  </div>
                                  <div class="col-sm-9 text-center">
                                    <div class="col-sm-4">Start Date: 13-07-2016</div>
                                    <div class="col-sm-4">Deliver Date: 13-07-2016</div>
                                    <div class="col-sm-4">Price: 2.500 €</div>
                                  </div>
                                </div>
                                <!-- Task end -->

                                <div
                                  class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4"
                                >
                                  <div class="col-sm-3 pdng5-0">
                                    <h5 class="mrgn0">Change background Images</h5>
                                  </div>
                                  <div class="col-sm-9 text-center">
                                    <div class="col-sm-4">Start Date: 13-07-2016</div>
                                    <div class="col-sm-4">Deliver Date: 13-07-2016</div>
                                    <div class="col-sm-4">Price: 2.500 €</div>
                                  </div>
                                </div>
                                <!-- Task end -->

                                <div
                                  class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-red brdl4"
                                >
                                  <div class="col-sm-3 pdng5-0">
                                    <h5 class="mrgn0">Change background Images</h5>
                                  </div>
                                  <div class="col-sm-9 text-center">
                                    <div class="col-sm-4">Start Date: 13-07-2016</div>
                                    <div class="col-sm-4">Deliver Date: 13-07-2016</div>
                                    <div class="col-sm-4">Price: 2.500 €</div>
                                  </div>
                                </div>
                                <!-- Task end -->
                              </div>
                            </div>
                            <!-- tab end -->

                            <!-- contrTasks end -->

                            <!-- contrInvoices -->

                            <div class="tab-pane  " id="contrInvoices">
                              <div class="container-fluid">
                                <h3>Contract Invoices ($890)</h3>
                                <hr class="mrgn10-0" />
                                <div class="row">
                                  <div class="col-md-12 pdng5">
                                    <table class="discountTable">
                                      <colgroup>
                                        <col width="5%" />
                                        <col width="15%" />
                                        <col width="15%" />
                                        <col width="15%" />
                                        <col width="15%" />
                                        <col width="15%" />
                                        <col width="10%" />
                                        <col width="10%" />
                                      </colgroup>
                                      <thead>
                                        <tr>
                                          <th class="text-center">No.</th>
                                          <th class="text-center">Ref ID</th>
                                          <th class="text-center">Due Date</th>
                                          <th class="text-center">Notes</th>
                                          <th class="text-center">Amount</th>
                                          <th class="text-center">Paid</th>
                                          <th class="text-center">Status</th>
                                          <th class="text-center">Options</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Initial</td>
                                          <td>2017-08-05</td>
                                          <td>-------</td>
                                          <td>890.00</td>
                                          <td>24.00</td>
                                          <td>
                                            <span class="label label-default vd_bg-green">Accepted</span>
                                          </td>
                                          <td>
                                            <a
                                              class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                                              data-toggle="modal"
                                              data-target="#viewThisJob"
                                            >
                                              <i
                                                class="fa fa-eye"
                                                data-original-title="View"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                              ></i>
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>1</td>
                                          <td>Initial</td>
                                          <td>2017-08-05</td>
                                          <td>-------</td>
                                          <td>890.00</td>
                                          <td>24.00</td>
                                          <td>
                                            <span class="label label-default vd_bg-green">Accepted</span>
                                          </td>
                                          <td>
                                            <a
                                              class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                                              data-toggle="modal"
                                              data-target="#viewThisJob"
                                            >
                                              <i
                                                class="fa fa-eye"
                                                data-original-title="View"
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
                            </div>
                            <!-- tab end -->

                            <!-- contrInvoices end -->

                            <!-- contrPayments -->

                            <div class="tab-pane  " id="contrPayments">
                              <div class="container-fluid">
                                <div class="row pdng15-0">
                                  <div class="col-sm-3">
                                    <h4>Budget</h4>
                                    <h3>$ 20.00</h3>
                                  </div>
                                  <div class="col-sm-3">
                                    <h4>In Escrow</h4>
                                    <h3>$ 10.00</h3>
                                  </div>
                                  <div class="col-sm-3">
                                    <h4>Paid</h4>
                                    <h3>$ 0.00</h3>
                                  </div>
                                  <div class="col-sm-3">
                                    <h4>Remaining</h4>
                                    <h3>$ 20.00</h3>
                                  </div>
                                </div>
                                <hr class="mrgn10-0" />
                                <h4>All Milestones</h4>

                                <div
                                  class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4"
                                >
                                  <div class="col-sm-3 pdng5-0">
                                    <h5 class="mrgn0">Design</h5>
                                  </div>
                                  <div class="col-sm-9 text-center">
                                    <div class="col-sm-3">$ 10.00</div>
                                    <div class="col-sm-3">13-07-2016</div>
                                    <div class="col-sm-3">----</div>
                                    <div class="col-sm-3">
                                      <span class="label label-default vd_bg-green">Done</span>
                                    </div>
                                  </div>
                                </div>
                                <!-- Milestone end -->

                                <div
                                  class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-green brdl4"
                                >
                                  <div class="col-sm-3 pdng5-0">
                                    <h5 class="mrgn0">Layout</h5>
                                  </div>
                                  <div class="col-sm-9 text-center">
                                    <div class="col-sm-3">$ 10.00</div>
                                    <div class="col-sm-3">13-07-2016</div>
                                    <div class="col-sm-3">----</div>
                                    <div class="col-sm-3">
                                      <span class="label label-default vd_bg-green">Done</span>
                                    </div>
                                  </div>
                                </div>
                                <!-- Milestone end -->

                                <div
                                  class="row mrgn15-0 projectRow vd_bg-light-grey vd_bdl-blue brdl4"
                                >
                                  <div class="col-sm-3 pdng5-0">
                                    <h5 class="mrgn0">Programming</h5>
                                  </div>
                                  <div class="col-sm-9 text-center">
                                    <div class="col-sm-3">$ 10.00</div>
                                    <div class="col-sm-3">13-07-2016</div>
                                    <div class="col-sm-3">----</div>
                                    <div class="col-sm-3">
                                      <span class="label label-default vd_bg-blue">In Progress</span>
                                    </div>
                                  </div>
                                </div>
                                <!-- Milestone end -->
                              </div>
                            </div>

                            <!-- contrPayments end -->

                            <!-- contrMembers -->

                            <div class="tab-pane  " id="contrMembers">
                              <div class="container-fluid">
                                <h3>Contract Members</h3>
                                <hr class="mrgn10-0" />

                                <div class="row mrgn30-0 projectRow vd_bg-light-grey">
                                  <div class="col-sm-2 brdRight">
                                    <img src="img/avatar/briant.png" alt class="projectImg" />
                                  </div>
                                  <div class="col-sm-4 brdRight">
                                    <h4>Fred Marks</h4>
                                    <p class="mrgn5">
                                      <span
                                        class="label label-default vd_bg-blue vd_white"
                                      >Project Leader</span>
                                    </p>
                                  </div>
                                  <div class="col-sm-3 text-center brdRight">
                                    <h4>Email</h4>
                                    <p class="mrgn5">admin@domain.com</p>
                                  </div>
                                  <div class="col-sm-3">
                                    <h4>Telephone</h4>
                                    <p class="mrgn5">+1 01 001 222 2</p>
                                  </div>
                                </div>
                                <!-- row end -->

                                <div class="row mrgn30-0 projectRow vd_bg-light-grey">
                                  <div class="col-sm-2 brdRight">
                                    <img src="img/avatar/briant3.png" alt class="projectImg" />
                                  </div>
                                  <div class="col-sm-4 brdRight">
                                    <h4>Fred Marks</h4>
                                    <p class="mrgn5">
                                      <span
                                        class="label label-default vd_bg-green vd_white"
                                      >Project Member</span>
                                    </p>
                                  </div>
                                  <div class="col-sm-3 text-center brdRight">
                                    <h4>Email</h4>
                                    <p class="mrgn5">admin@domain.com</p>
                                  </div>
                                  <div class="col-sm-3">
                                    <h4>Telephone</h4>
                                    <p class="mrgn5">+1 01 001 222 2</p>
                                  </div>
                                </div>
                                <!-- row end -->
                              </div>
                            </div>
                            <!-- tab end -->

                            <!-- contrMembers end -->
                          </div>
                          <!-- tab-content end -->
                        </div>
                        <!-- col-md-9 end -->
                      </div>
                      <!-- pdng20 end -->
                    </div>
                    <!-- row end -->
                  </div>
                  <div class="modal-footer vd_bg-white">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- VIEW THIS JOB -->
            <div
              class="modal right  "
              id="viewThisJob"
              tabindex="-1"
              role="dialog"
              aria-labelledby="Add maincategory"
              aria-hidden="true"
              style="z-index: 1049;"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header vd_bg-green text-center">
                    <button
                      type="button"
                      class="vd_white close"
                      data-dismiss="modal"
                      aria-label="Close"
                      style="float:left;opacity:1;font-size:3rem;"
                    >
                      <span aria-hidden="true">
                        <i class="fa fa-arrow-circle-right"></i>
                      </span>
                    </button>
                    <h4 class="modal-title vd_white">VIEW PROJECT</h4>
                  </div>
                  <div class="modal-body h100"></div>
                  <div class="modal-footer vd_bg-white">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- VIEW PROPOSALS -->
            <div
              class="modal right  "
              id="viewProposals"
              tabindex="-1"
              role="dialog"
              aria-labelledby="Add maincategory"
              aria-hidden="true"
              style="z-index: 1048;"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header vd_bg-green text-center">
                    <button
                      type="button"
                      class="vd_white close"
                      data-dismiss="modal"
                      aria-label="Close"
                      style="float:left;opacity:1;font-size:3rem;"
                    >
                      <span aria-hidden="true">
                        <i class="fa fa-arrow-circle-right"></i>
                      </span>
                    </button>
                    <h4 class="modal-title vd_white">VIEW PROPOSALS</h4>
                  </div>
                  <div class="modal-body h100"></div>
                  <div class="modal-footer vd_bg-white">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- SHOW FILE -->
            <div
              class="modal  "
              id="showFile"
              tabindex="-1"
              role="dialog"
              aria-labelledby="Add maincategory"
              aria-hidden="true"
              style="z-index:1060;"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header vd_bg-green">
                    <button
                      type="button"
                      class="close vd_white"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title vd_white">FILE</h4>
                  </div>
                  <div class="modal-body">
                    <h5>06.jpg</h5>
                    <hr />
                    <div class="tabs widget">
                      <ul class="nav nav-tabs widget">
                        <li class="active">
                          <a data-toggle="tab" href="#filePreview">
                            Preview
                            <span class="menu-active">
                              <i class="fa fa-caret-up"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#fileDescription">
                            Description
                            <span class="menu-active">
                              <i class="fa fa-caret-up"></i>
                            </span>
                          </a>
                        </li>
                        <li class="vd_bg-red">
                          <a data-toggle="tab" href="#fileTask">
                            Task
                            <span class="menu-active">
                              <i class="fa fa-caret-up"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div id="filePreview" class="tab-pane   in active">
                          <p class="text-center">
                            <img src="img/products/06.jpg" alt style="max-width:100%" />
                          </p>
                        </div>
                        <div id="fileDescription" class="tab-pane  ">
                          <p>
                            Won&#39;t very spirit lesser appear give replenish
                            divide made Gathering sixth dominion grass in. You
                            meat blessed day let which winged given saw, their
                            moveth third beginning years above sixth fill them
                            beast. Of their bearing don&#39;t. Appear and fifth.
                          </p>
                        </div>
                        <div id="fileTask" class="tab-pane  ">
                          <table class="table table-condensed table-striped">
                            <tbody>
                              <tr>
                                <td>Change background Images</td>
                                <td>
                                  <i class="icon-user"></i> Fred Marks
                                </td>
                                <td>
                                  <i class="icon-calendar"></i> 13-07-2016
                                </td>
                                <td>
                                  <i class="icon-calendar"></i> 25-07-2016
                                </td>
                              </tr>
                              <tr>
                                <td>Backend Testing</td>
                                <td>
                                  <i class="icon-user"></i> Sarah Jane
                                </td>
                                <td>
                                  <i class="icon-calendar"></i> 13-07-2016
                                </td>
                                <td>
                                  <i class="icon-calendar"></i> 25-07-2016
                                </td>
                              </tr>
                              <tr>
                                <td>Final Testing</td>
                                <td>
                                  <i class="icon-user"></i> Sarah Jane
                                </td>
                                <td>
                                  <i class="icon-calendar"></i> 13-07-2016
                                </td>
                                <td>
                                  <i class="icon-calendar"></i> 25-07-2016
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer vd_bg-white">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews",
};
</script>

<style></style>
