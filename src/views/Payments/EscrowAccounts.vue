<template>
  <div id="EscrowAccounts">
    <div
      class="modal right  "
      id="viewThisUser"
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
            <h4 class="modal-title vd_white">PROFILE</h4>
          </div>
          <div class="modal-body h100">
            <div class="row">
              <div class="col-md-2">
                <div class="widget panel-bd-top container-fluid">
                  <h4 class="mrgn5-0">Company Name</h4>

                  <hr class="mrgn0" />

                  <img src="img/avatar/customer175.png" alt class="mrgn5-0" />

                  <div class="row">
                    <div class="col-xs-4 vd_yellow">
                      <i class="fa fa-star-half-o fs2"></i>
                    </div>
                    <div class="col-xs-8 vd_yellow">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                    </div>
                  </div>

                  <hr class="row mrgntb5" />

                  <div class="row">
                    <div class="col-md-12">
                      <div class="menu-text">
                        <span class="menu-icon">
                          <i class="fa fa-wrench vd_green"></i>
                        </span>
                        98% Job Success
                        <div class="menu-info">
                          <div class="progress progress-sm mrgn0">
                            <div
                              style="width:98%"
                              class="progress-bar progress-bar-success"
                            >
                              98%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="row mrgntb5" />

                  <div class="row">
                    <div class="col-md-12">
                      <i class="fa fa-clock-o vd_green"></i> 15 Hourly Jobs
                    </div>
                  </div>

                  <hr class="row mrgntb5" />

                  <div class="row">
                    <div class="col-md-12">
                      <i class="fa fa-suitcase vd_green"></i> 15 Contracts
                    </div>
                  </div>

                  <hr class="row mrgntb5" />

                  <div class="row">
                    <div class="col-md-12">
                      <i class="fa fa-gavel vd_green"></i> 15 Current Jobs
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-10">
                <div class="tabs widget">
                  <ul class="nav nav-tabs widget">
                    <li class="active">
                      <a data-toggle="tab" href="#profileTab">
                        Profile
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#currentProjectsTab">
                        Current Projects
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#canceledProjectsTab">
                        Canceld Projects
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#currentContractTab">
                        Current Contract
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#jobsDoneTab">
                        Jobs Done
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#escrowTab">
                        Escrow
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#reviewsTab">
                        Reviews
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#reportsTab">
                        Reports
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#settingsTab">
                        Settings
                        <span class="menu-active">
                          <i class="fa fa-caret-up"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="profileTab" class="tab-pane active">
                      <div class="pd-20">
                        <div class="vd_info tr">
                          <a class="btn vd_btn btn-xs vd_bg-yellow">
                            <i class="fa fa-pencil append-icon"></i> Edit
                          </a>
                        </div>
                        <h3 class="mgbt-xs-15 mgtp-10 font-semibold">
                          <i class="icon-user mgr-10 profile-icon"></i> ABOUT
                        </h3>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >First Name:</label
                              >
                              <div class="col-xs-7 controls">Mariah</div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >Last Name:</label
                              >
                              <div class="col-xs-7 controls">Caraiban</div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >User Name:</label
                              >
                              <div class="col-xs-7 controls">Mariah</div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >Email:</label
                              >
                              <div class="col-xs-7 controls">
                                mariah@Vendroid.com
                              </div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >City:</label
                              >
                              <div class="col-xs-7 controls">Los Angeles</div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >Country:</label
                              >
                              <div class="col-xs-7 controls">United States</div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >Birthday:</label
                              >
                              <div class="col-xs-7 controls">Jan 22, 1984</div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >Interests:</label
                              >
                              <div class="col-xs-7 controls">
                                Basketball, Web, Design, etc.
                              </div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >Website:</label
                              >
                              <div class="col-xs-7 controls">
                                <a href="http://Vendroid.venmond.com"
                                  >Vendroid.venmond.com</a
                                >
                              </div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="row mgbt-xs-0">
                              <label class="col-xs-5 control-label"
                                >Phone:</label
                              >
                              <div class="col-xs-7 controls">+1-234-5678</div>
                              <!-- col-sm-10 -->
                            </div>
                          </div>
                        </div>
                        <hr class="pd-10" />
                        <div class="row">
                          <div class="col-sm-7 mgbt-xs-20">
                            <h3 class="mgbt-xs-15 font-semibold">
                              <i
                                class="fa fa-file-text-o mgr-10 profile-icon"
                              ></i>
                              EXPERIENCE
                            </h3>
                            <div class="content-list content-menu">
                              <ul class="list-wrapper">
                                <li class="mgbt-xs-10">
                                  <span class="menu-icon vd_green">
                                    <i class="fa fa-circle-o"></i>
                                  </span>
                                  <span class="menu-text">
                                    <a href="http://www.venmond.com">Owner</a>
                                    at
                                    <a href="http://www.venmond.com"
                                      >Vendroid Ltd.</a
                                    >
                                    <span class="menu-info">
                                      <span class="menu-date"
                                        >March 2013 ~ Now</span
                                      >
                                    </span>
                                  </span>
                                </li>
                                <li class="mgbt-xs-10">
                                  <span class="menu-icon vd_grey">
                                    <i class="fa fa-circle-o"></i>
                                  </span>
                                  <span class="menu-text">
                                    <a href="http://www.venmond.com">CEO</a> at
                                    <a href="http://www.venmond.com"
                                      >Mc. Dondon</a
                                    >
                                    <span class="menu-info">
                                      <span class="menu-date"
                                        >March 2011 ~ February 2013</span
                                      >
                                    </span>
                                  </span>
                                </li>
                                <li class="mgbt-xs-10">
                                  <span class="menu-icon vd_grey">
                                    <i class="fa fa-circle-o"></i>
                                  </span>
                                  <span class="menu-text">
                                    <a href="http://www.venmond.com"
                                      >Web Designer</a
                                    >
                                    at
                                    <a href="http://www.venmond.com"
                                      >Web Design Company Ltd.</a
                                    >
                                    <span class="menu-info">
                                      <span class="menu-date"
                                        >March 2010 ~ February 2011</span
                                      >
                                    </span>
                                  </span>
                                </li>
                                <li class="mgbt-xs-10">
                                  <span class="menu-icon vd_grey">
                                    <i class="fa fa-circle-o"></i>
                                  </span>
                                  <span class="menu-text">
                                    <a href="http://www.venmond.com">Sales</a>
                                    at
                                    <a href="http://www.venmond.com"
                                      >Sales Company Ltd.</a
                                    >
                                    <span class="menu-info">
                                      <span class="menu-date"
                                        >March 2009 ~ February 2010</span
                                      >
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-sm-5">
                            <h3 class="mgbt-xs-15 font-semibold">
                              <i class="fa fa-trophy mgr-10 profile-icon"></i>
                              EDUCATION
                            </h3>
                            <div class="content-list content-menu">
                              <ul class="list-wrapper">
                                <li class="mgbt-xs-10">
                                  <span class="menu-icon vd_green">
                                    <i class="fa fa-circle-o"></i>
                                  </span>
                                  <span class="menu-text">
                                    Bachelor's degree, E-Commerce/Electronic
                                    Commerce at
                                    <a href="http://www.venmond.com">UCLA</a>
                                    <span class="menu-info">
                                      <span class="menu-date"
                                        >August 2003 ~ July 2008</span
                                      >
                                    </span>
                                  </span>
                                </li>
                                <li class="mgbt-xs-10">
                                  <span class="menu-icon vd_grey">
                                    <i class="fa fa-circle-o"></i>
                                  </span>
                                  <span class="menu-text">
                                    Student at
                                    <a href="http://www.venmond.com"
                                      >Web Design Education</a
                                    >
                                    <span class="menu-info">
                                      <span class="menu-date"
                                        >March 2006 ~ February 2007</span
                                      >
                                    </span>
                                  </span>
                                </li>
                                <li class="mgbt-xs-10">
                                  <span class="menu-icon vd_grey">
                                    <i class="fa fa-circle-o"></i>
                                  </span>
                                  <span class="menu-text">
                                    Student at
                                    <a href="http://www.venmond.com"
                                      >St. Louis High School</a
                                    >
                                    <span class="menu-info">
                                      <span class="menu-date"
                                        >August 2000 ~ July 2003</span
                                      >
                                    </span>
                                  </span>
                                </li>
                                <li class="mgbt-xs-10">
                                  <span class="menu-icon vd_grey">
                                    <i class="fa fa-circle-o"></i>
                                  </span>
                                  <span class="menu-text">
                                    Student at
                                    <a href="http://www.venmond.com"
                                      >St. Monica Junior High School</a
                                    >
                                    <span class="menu-info">
                                      <span class="menu-date"
                                        >August 1998 ~ July 2000</span
                                      >
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <!-- row -->
                        <hr class="pd-10" />
                        <div class="row">
                          <div class="col-sm-7">
                            <h3 class="mgbt-xs-15 font-semibold">
                              <i class="fa fa-globe mgr-10 profile-icon"></i>
                              ACTIVITY
                            </h3>
                            <div class>
                              <div class="content-list">
                                <div
                                  data-rel="scroll"
                                  class="mCustomScrollbar _mCS_6"
                                  style="overflow: hidden;"
                                >
                                  <div
                                    class="mCustomScrollBox mCS-light"
                                    id="mCSB_6"
                                    style="position: relative; height: 100%; overflow: hidden; max-width: 100%; max-height: 400px;"
                                  >
                                    <div
                                      class="mCSB_container"
                                      style="position: relative; top: 0px;"
                                    >
                                      <ul class="list-wrapper">
                                        <li>
                                          <span class="menu-icon vd_yellow">
                                            <i class="fa fa-suitcase"></i>
                                          </span>
                                          <span class="menu-text">
                                            Someone has give you a surprise
                                            <span class="menu-info">
                                              <span class="menu-date"
                                                >~ 12 Minutes Ago</span
                                              >
                                            </span>
                                          </span>
                                        </li>
                                        <li>
                                          <span class="menu-icon vd_blue">
                                            <i class="fa fa-user"></i>
                                          </span>
                                          <span class="menu-text">
                                            Change your user profile details
                                            <span class="menu-info">
                                              <span class="menu-date"
                                                >~ 1 Hour 20 Minutes Ago</span
                                              >
                                            </span>
                                          </span>
                                        </li>
                                        <li>
                                          <span class="menu-icon vd_red">
                                            <i class="fa fa-cogs"></i>
                                          </span>
                                          <span class="menu-text">
                                            Your setting is updated
                                            <span class="menu-info">
                                              <span class="menu-date"
                                                >~ 12 Days Ago</span
                                              >
                                            </span>
                                          </span>
                                        </li>
                                        <li>
                                          <span class="menu-icon vd_green">
                                            <i class="fa fa-book"></i>
                                          </span>
                                          <span class="menu-text">
                                            Added new article
                                            <span class="menu-info">
                                              <span class="menu-date"
                                                >~ 19 Days Ago</span
                                              >
                                            </span>
                                          </span>
                                        </li>
                                        <li>
                                          <span class="menu-icon vd_green">
                                            <img
                                              alt="example image"
                                              src="img/avatar/avatar.jpg"
                                            />
                                          </span>
                                          <span class="menu-text">
                                            Change Profile Pic
                                            <span class="menu-info">
                                              <span class="menu-date"
                                                >~ 20 Days Ago</span
                                              >
                                            </span>
                                          </span>
                                        </li>
                                        <li>
                                          <span class="menu-icon vd_red">
                                            <i class="fa fa-cogs"></i>
                                          </span>
                                          <span class="menu-text">
                                            Your setting is updated
                                            <span class="menu-info">
                                              <span class="menu-date"
                                                >~ 12 Days Ago</span
                                              >
                                            </span>
                                          </span>
                                        </li>
                                        <li>
                                          <span class="menu-icon vd_green">
                                            <i class="fa fa-book"></i>
                                          </span>
                                          <span class="menu-text">
                                            Added new article
                                            <span class="menu-info">
                                              <span class="menu-date"
                                                >~ 19 Days Ago</span
                                              >
                                            </span>
                                          </span>
                                        </li>
                                        <li>
                                          <span class="menu-icon vd_green">
                                            <img
                                              alt="example image"
                                              src="img/avatar/avatar.jpg"
                                            />
                                          </span>
                                          <span class="menu-text">
                                            Change Profile Pic
                                            <span class="menu-info">
                                              <span class="menu-date"
                                                >~ 20 Days Ago</span
                                              >
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                    <div
                                      class="mCSB_scrollTools"
                                      style="position: absolute; display: block; opacity: 0;"
                                    >
                                      <div class="mCSB_draggerContainer">
                                        <div
                                          class="mCSB_dragger"
                                          style="position: absolute; top: 0px; height: 352px;"
                                          oncontextmenu="return false;"
                                        >
                                          <div
                                            class="mCSB_dragger_bar"
                                            style="position: relative; line-height: 352px;"
                                          ></div>
                                        </div>
                                        <div class="mCSB_draggerRail"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="closing text-center" style>
                                  <a href="#">
                                    See All Activities
                                    <i class="fa fa-angle-double-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- col-sm-7 -->
                          <div class="col-sm-5">
                            <h3 class="mgbt-xs-15 font-semibold">
                              <i class="fa fa-flask mgr-10 profile-icon"></i>
                              SKILL
                            </h3>
                            <div class="skill-list">
                              <div class="skill-name">Photoshop</div>
                              <div class="progress progress-sm">
                                <div
                                  style="width: 90%"
                                  aria-valuemax="100"
                                  aria-valuemin="0"
                                  aria-valuenow="90"
                                  role="progressbar"
                                  class="progress-bar progress-bar-success"
                                >
                                  <span class="sr-only">90%</span>
                                </div>
                              </div>
                            </div>
                            <div class="skill-list">
                              <div class="skill-name">Illustrator</div>
                              <div class="progress progress-sm">
                                <div
                                  style="width: 20%"
                                  aria-valuemax="100"
                                  aria-valuemin="0"
                                  aria-valuenow="20"
                                  role="progressbar"
                                  class="progress-bar progress-bar-danger"
                                >
                                  <span class="sr-only">20%</span>
                                </div>
                              </div>
                            </div>
                            <div class="skill-list">
                              <div class="skill-name">PHP</div>
                              <div class="progress progress-sm">
                                <div
                                  style="width: 50%"
                                  aria-valuemax="100"
                                  aria-valuemin="0"
                                  aria-valuenow="50"
                                  role="progressbar"
                                  class="progress-bar progress-bar-warning"
                                >
                                  <span class="sr-only">50% Complete</span>
                                </div>
                              </div>
                            </div>
                            <div class="skill-list">
                              <div class="skill-name">Javascript</div>
                              <div class="progress progress-sm">
                                <div
                                  style="width: 60%"
                                  aria-valuemax="100"
                                  aria-valuemin="0"
                                  aria-valuenow="60"
                                  role="progressbar"
                                  class="progress-bar progress-bar-info"
                                >
                                  <span class="sr-only">60% Complete</span>
                                </div>
                              </div>
                            </div>
                            <div class="skill-list">
                              <div class="skill-name">Communication</div>
                              <div class="progress progress-sm">
                                <div
                                  style="width: 95%"
                                  aria-valuemax="100"
                                  aria-valuemin="0"
                                  aria-valuenow="95"
                                  role="progressbar"
                                  class="progress-bar progress-bar-success"
                                >
                                  <span class="sr-only">95% Complete</span>
                                </div>
                              </div>
                            </div>
                            <div class="skill-list">
                              <div class="skill-name">Writing</div>
                              <div class="progress progress-sm">
                                <div
                                  style="width: 45%"
                                  aria-valuemax="100"
                                  aria-valuemin="0"
                                  aria-valuenow="45"
                                  role="progressbar"
                                  class="progress-bar progress-bar-warning"
                                >
                                  <span class="sr-only">45% Complete</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- col-sm-7 -->
                        </div>
                        <!-- row -->
                      </div>
                    </div>

                    <div id="currentProjectsTab" class="tab-pane active">
                      <div class="pd-20">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="row">
                              <div class="col-md-2 text-center">
                                <img
                                  src="img/avatar/customer.png"
                                  alt
                                  width="140"
                                  height="100"
                                  class="mrgn15-0"
                                />
                              </div>
                              <div class="col-md-8">
                                <div class="row mrgn0 pdng5">
                                  <div class="col-md-4">Status: Private</div>
                                  <div class="col-md-4">User Name: ID</div>
                                  <div class="col-md-4">Job: ID</div>
                                </div>
                                <hr class="mrgn0" />
                                <div class="row mrgn0">
                                  <div class="col-md-12 pdng5">
                                    Hello there, I´m Planing my Birthday with
                                    Family and Friends and i´m looking for a
                                    Partyservice who can Deliver us with Drinks
                                    and Food ..
                                  </div>
                                </div>
                                <hr class="mrgn0" />
                                <div class="row mrgn0 pdng5">
                                  <div class="col-md-3">
                                    <i class="fa fa-info-circle"></i> Mobile
                                    Repair
                                  </div>
                                  <div class="col-md-3">
                                    <i class="fa fa-clock-o"></i> 10.12.2016 –
                                    19:30
                                  </div>
                                  <div class="col-md-3">
                                    <i class="fa fa-tags"></i> Fix / Agreement
                                  </div>
                                  <div class="col-md-3">
                                    <i class="fa fa-money"></i> 2500,00 €
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-2">
                                <div class="row text-center mrgn0">
                                  <a
                                    class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                                    data-toggle="modal"
                                    data-target="#viewThisJob"
                                  >
                                    <i
                                      class="fa fa-eye"
                                      data-original-title="view"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                  <a
                                    class="btn menu-icon vd_bd-yellow vd_yellow pdng1-8"
                                    data-toggle="modal"
                                    data-target="#blockThisJob"
                                  >
                                    <i
                                      class="fa fa-minus"
                                      data-original-title="block"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                                <hr class="mrgn0" />
                                <div class="row text-center mrgn0">
                                  <a
                                    class="btn menu-icon vd_bd-red vd_red mrgn5 pdng1-8"
                                    data-toggle="modal"
                                    data-target="#removeThisJob"
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      data-original-title="remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                                <h5
                                  class="vd_white vd_bg-green text-center pdng5 mrgn0"
                                >
                                  Proposals
                                </h5>
                                <p class="text-center mrgn0 fs2">
                                  <a
                                    href="javascript:void(0);"
                                    data-toggle="modal"
                                    data-target="#viewProposals"
                                    title
                                  >
                                    <span
                                      data-original-title="view proposals"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      >35</span
                                    >
                                  </a>
                                </p>
                              </div>
                            </div>

                            <hr />

                            <div class="row">
                              <div class="col-md-2 text-center">
                                <img
                                  src="img/avatar/customer.png"
                                  alt
                                  width="140"
                                  height="100"
                                  class="mrgn15-0"
                                />
                              </div>
                              <div class="col-md-8">
                                <div class="row mrgn0 pdng5">
                                  <div class="col-md-4">Status: Private</div>
                                  <div class="col-md-4">User Name: ID</div>
                                  <div class="col-md-4">Job: ID</div>
                                </div>
                                <hr class="mrgn0" />
                                <div class="row mrgn0">
                                  <div class="col-md-12 pdng5">
                                    Hello there, I´m Planing my Birthday with
                                    Family and Friends and i´m looking for a
                                    Partyservice who can Deliver us with Drinks
                                    and Food ..
                                  </div>
                                </div>
                                <hr class="mrgn0" />
                                <div class="row mrgn0 pdng5">
                                  <div class="col-md-3">
                                    <i class="fa fa-info-circle"></i> Mobile
                                    Repair
                                  </div>
                                  <div class="col-md-3">
                                    <i class="fa fa-clock-o"></i> 10.12.2016 –
                                    19:30
                                  </div>
                                  <div class="col-md-3">
                                    <i class="fa fa-tags"></i> Fix / Agreement
                                  </div>
                                  <div class="col-md-3">
                                    <i class="fa fa-money"></i> 2500,00 €
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-2">
                                <div class="row text-center mrgn0">
                                  <a
                                    class="btn menu-icon vd_bd-green vd_green mrgn5 pdng1-8"
                                    data-toggle="modal"
                                    data-target="#viewThisJob"
                                  >
                                    <i
                                      class="fa fa-eye"
                                      data-original-title="view"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                  <a
                                    class="btn menu-icon vd_bd-yellow vd_yellow pdng1-8"
                                    data-toggle="modal"
                                    data-target="#blockThisJob"
                                  >
                                    <i
                                      class="fa fa-minus"
                                      data-original-title="block"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                                <hr class="mrgn0" />
                                <div class="row text-center mrgn0">
                                  <a
                                    class="btn menu-icon vd_bd-red vd_red mrgn5 pdng1-8"
                                    data-toggle="modal"
                                    data-target="#removeThisJob"
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      data-original-title="remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i>
                                  </a>
                                </div>
                                <h5
                                  class="vd_white vd_bg-green text-center pdng5 mrgn0"
                                >
                                  Proposals
                                </h5>
                                <p class="text-center mrgn0 fs2">
                                  <a
                                    href="javascript:void(0);"
                                    data-toggle="modal"
                                    data-target="#viewProposals"
                                    title
                                  >
                                    <span
                                      data-original-title="view proposals"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      >35</span
                                    >
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="canceledProjectsTab" class="tab-pane active"></div>
                    <div id="currentContractTab" class="tab-pane active"></div>
                    <div id="jobsDoneTab" class="tab-pane active"></div>
                    <div id="escrowTab" class="tab-pane active"></div>
                    <div id="reviewsTab" class="tab-pane active"></div>
                    <div id="reportsTab" class="tab-pane active"></div>
                    <div id="settingsTab" class="tab-pane active"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- BLOCK THIS USER -->
    <div
      class="modal  "
      id="blockThisUser1"
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
            <h4 class="modal-title vd_white">New Payment For</h4>
          </div>
          <div class="modal-body">
            E-mail templates Milestone payment User to Client
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal  "
      id="blockThisUser2"
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
            <h4 class="modal-title vd_white">New Payment For</h4>
          </div>
          <div class="modal-body">E-mail templates Payment Release</div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal  "
      id="blockThisUser3"
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
            <h4 class="modal-title vd_white">New Payment For</h4>
          </div>
          <div class="modal-body">E-mail templates Payment Refunded</div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SUSPEND THIS USER -->
    <div
      class="modal  "
      id="suspendThisUser"
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
            <h4 class="modal-title vd_white">SUSPEND THIS USER</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <select class="custom-select">
                  <option selected>Select the Suspend reason</option>
                  <option value="1">Because of</option>
                  <option value="2">Because of</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">OK</button>
            </form>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- UNBLOCK THIS USER -->
    <div
      class="modal  "
      id="unblockThisUser"
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
            <h4 class="modal-title vd_white">UNBLOCK THIS USER</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <select class="custom-select">
                  <option selected>Select the Unblock reason</option>
                  <option value="1">Because of</option>
                  <option value="2">Because of</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">OK</button>
            </form>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- RESUME THIS USER -->
    <div
      class="modal  "
      id="resumeThisUser"
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
            <h4 class="modal-title vd_white">RESUME THIS USER</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <select class="custom-select">
                  <option selected>Select the Resume reason</option>
                  <option value="1">Because of</option>
                  <option value="2">Because of</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">OK</button>
            </form>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- THE REASON IS -->
    <div
      class="modal  "
      id="theReason"
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
            <h4 class="modal-title vd_white">THE REASON IS</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <h5>
                  <i class="fa fa-exclamation-circle vd_red"></i> Incompleted
                  task #3.2
                </h5>
              </div>
            </form>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EscrowAccounts",
};
</script>
