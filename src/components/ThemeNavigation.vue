<template>
  <div id="ThemeNavigation">
    <header class="header-1" id="header">
      <div class="vd_top-menu-wrapper">
        <div class="container-fluid ">
          <!-- vd_top-nav end -->
          <div class="">
            <div class="row">
              <div class="col-sm-2 col-xs-12">
                <div class="vd_top-nav vd_nav-width">
                  <div class="vd_panel-header">
                    <div class="logo">
                      <a href="index.html"
                        ><img alt="logo" src="@/assets/logo.png"
                      /></a>
                    </div>
                  </div>
                  <!-- vd_panel-header end -->
                </div>
              </div>
              <div class="col-sm-8 col-xs-12">
                <div class="vd_menu-search">
                  <form id="search-box" method="post" action="#">
                    <input
                      type="text"
                      name="search"
                      class="vd_menu-search-text width-60"
                      placeholder="Search"
                    />
                    <div class="vd_menu-search-category">
                      <span data-action="click-trigger">
                        <span class="separator"></span>
                        <span class="text">Category</span>
                        <span class="icon"
                          ><i class="fa fa-caret-down"></i
                        ></span>
                      </span>
                      <!-- vd_mega-menu-content end -->
                    </div>
                    <!-- vd_menu-search-category end -->
                    <span class="vd_menu-search-submit"
                      ><i class="fa fa-search"></i
                    ></span>
                  </form>
                </div>
                <!-- vd_menu-search end -->

                <div class="navbar-tabs-menu clearfix">
                  <span
                    class="expand-menu"
                    data-action="expand-navbar-tabs-menu"
                  >
                    <span class="menu-icon menu-icon-left"
                      ><i class="fa fa-ellipsis-h"></i
                      ><span class="badge vd_bg-red">20</span></span
                    >
                    <span class="menu-icon menu-icon-right"
                      ><i class="fa fa-ellipsis-h"></i
                      ><span class="badge vd_bg-red">20</span></span
                    >
                  </span>
                  <div class="vd_mega-menu-wrapper">
                    <div
                      class="vd_mega-menu"
                      data-intro="<strong>Tabs Menu</strong><br/>Can be placed for dropdown menu, tabs, or user profile. Responsive for medium and small size navigation."
                      data-step="3"
                    >
                      <ul class="mega-ul">
                        <li id="home" class="one-icon mega-li">
                          <a
                            class="mega-link  vd_bg-green"
                            href="javascript:void(0);"
                            data-action="click-trigger"
                            data-original-title="Payout Request"
                            data-toggle="tooltip"
                            data-placement="bottom"
                          >
                            <span class="mega-icon"
                              ><i class="fa fa-money"></i
                            ></span>
                            <span class="badge vd_bg-red">5</span>
                          </a>
                          <div
                            class="vd_mega-menu-content width-xs-3 width-sm-5 width-md-6   right-xs "
                            data-action="click-target"
                          >
                            <div class="child-menu">
                              <div class="title">
                                Payout Request
                                <div class="vd_panel-menu">
                                  <span
                                    data-original-title="Find Server"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    class="menu"
                                    ><i class="fa fa-search"></i
                                  ></span>
                                  <span
                                    data-original-title="Message Setting"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    class="menu"
                                    ><i class="fa fa-cog"></i
                                  ></span>
                                </div>
                              </div>
                              <div
                                class="content-grid column-md-3 column-sm-2 column-xs-1 height-xs-auto height-sm-4"
                              >
                                <div data-rel="scroll">
                                  <p>Payout Request</p>
                                </div>
                                <!-- data-rel="scroll" -->
                                <div class="closing text-center" style="">
                                  <a href="javascript:void(0);"
                                    >See All Requests
                                    <i class="fa fa-angle-double-right"></i
                                  ></a>
                                </div>
                              </div>
                            </div>
                            <!-- child-menu end -->
                          </div>
                          <!-- vd_mega-menu-content -->
                        </li>

                        <li id="home2" class="one-icon mega-li">
                          <a
                            class="mega-link  vd_bg-blue"
                            href="javascript:void(0);"
                            data-action="click-trigger"
                            data-original-title="Refund Request"
                            data-toggle="tooltip"
                            data-placement="bottom"
                          >
                            <span class="mega-icon"
                              ><i class="fa fa-credit-card"></i
                            ></span>
                            <span class="badge vd_bg-red">5</span>
                          </a>
                          <div
                            class="vd_mega-menu-content width-xs-3 width-sm-5 width-md-6   right-xs "
                            data-action="click-target"
                          >
                            <div class="child-menu">
                              <div class="title">
                                Refund Request
                                <div class="vd_panel-menu">
                                  <span
                                    data-original-title="Find Server"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    class="menu"
                                    ><i class="fa fa-search"></i
                                  ></span>
                                  <span
                                    data-original-title="Message Setting"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    class="menu"
                                    ><i class="fa fa-cog"></i
                                  ></span>
                                </div>
                              </div>
                              <div
                                class="content-grid column-md-3 column-sm-2 column-xs-1 height-xs-auto height-sm-4"
                              >
                                <div data-rel="scroll">
                                  <p>Refund Request</p>
                                </div>
                                <!-- data-rel="scroll" -->
                                <div class="closing text-center" style="">
                                  <a href="javascript:void(0);"
                                    >See All Requests
                                    <i class="fa fa-angle-double-right"></i
                                  ></a>
                                </div>
                              </div>
                            </div>
                            <!-- child-menu end -->
                          </div>
                          <!-- vd_mega-menu-content -->
                        </li>

                        <li id="test-2" class="one-icon mega-li">
                          <a
                            class="mega-link vd_bg-red "
                            href="javascript:void(0);"
                            data-action="click-trigger"
                            data-original-title="New Reports"
                            data-toggle="tooltip"
                            data-placement="bottom"
                          >
                            <span class="mega-icon"
                              ><i class="fa fa-comment"></i
                            ></span>
                          </a>
                          <div
                            class="vd_mega-menu-content width-xs-3 width-sm-4 width-md-5 center-xs-3 right-sm pd-0"
                            data-action="click-target"
                          >
                            <div class="child-menu">
                              <textarea
                                class="no-bd"
                                rows="3"
                                placeholder="What are you doing?"
                              ></textarea>
                              <div
                                class="vd_textarea-menu vd_bg-yellow vd_bd-yellow"
                              >
                                <ul class="nav nav-pills ">
                                  <li class="one-icon">
                                    <a
                                      data-toggle="tab-post"
                                      href="javascript:void(0);"
                                      ><span class="menu-icon"
                                        ><i class="fa fa-user fa-fw"></i></span
                                    ></a>
                                  </li>
                                  <li class="one-icon">
                                    <a
                                      data-toggle="tab-post"
                                      href="javascript:void(0);"
                                      ><span class="menu-icon"
                                        ><i
                                          class="fa fa-camera fa-fw"
                                        ></i></span
                                    ></a>
                                  </li>
                                  <li class="one-icon">
                                    <a
                                      data-toggle="tab-post"
                                      href="javascript:void(0);"
                                      ><span class="menu-icon"
                                        ><i
                                          class="fa fa-smile-o fa-fw"
                                        ></i></span
                                    ></a>
                                  </li>
                                  <li class="pull-right">
                                    <a
                                      data-toggle="tab-post"
                                      href="javascript:void(0);"
                                      style="border-left:1px solid rgba(255,255,255,.3)"
                                    >
                                      <span class="menu-icon"
                                        ><i class="fa fa-check fa-fw"></i
                                      ></span>
                                      <span class="menu-text">Post</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <!-- child-menu -->
                          </div>
                          <!-- vd_mega-menu-content -->
                        </li>

                        <li id="home2" class="one-icon mega-li">
                          <a
                            class="mega-link  vd_bg-yellow"
                            href="javascript:void(0);"
                            data-action="click-trigger"
                            data-original-title="Write Post"
                            data-toggle="tooltip"
                            data-placement="bottom"
                          >
                            <span class="mega-icon"
                              ><i class="fa fa-edit"></i
                            ></span>
                          </a>
                          <div
                            class="vd_mega-menu-content width-xs-3 width-sm-5 width-md-6   right-xs "
                            data-action="click-target"
                          >
                            <div class="child-menu">
                              <div class="title">
                                Write Post
                                <div class="vd_panel-menu">
                                  <span
                                    data-original-title="Find Server"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    class="menu"
                                    ><i class="fa fa-search"></i
                                  ></span>
                                  <span
                                    data-original-title="Message Setting"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    class="menu"
                                    ><i class="fa fa-cog"></i
                                  ></span>
                                </div>
                              </div>
                              <div
                                class="content-grid column-md-3 column-sm-2 column-xs-1 height-xs-auto height-sm-4"
                              >
                                <div data-rel="scroll">
                                  <textarea
                                    class="no-bd"
                                    rows="3"
                                    placeholder="Write a Post"
                                  ></textarea>
                                </div>
                                <!-- data-rel="scroll" -->
                                <div class="closing text-center" style="">
                                  <a href="javascript:void(0);"
                                    >Go to Blog
                                    <i class="fa fa-angle-double-right"></i
                                  ></a>
                                </div>
                              </div>
                            </div>
                            <!-- child-menu end -->
                          </div>
                          <!-- vd_mega-menu-content -->
                        </li>
                      </ul>
                    </div>
                    <!-- vd_mega-menu end -->
                  </div>
                  <!-- vd_mega-menu-wrapper end -->
                </div>
                <!-- navbar-tabs-menu end -->

              </div>
              <div class="col-sm-2 col-xs-12">
                <div class="vd_mega-menu-wrapper">
                  <div class="vd_mega-menu pull-right">
                    <ul class="mega-ul">
                      <li id="top-menu-profile" class="profile mega-li">
                        <a
                          href="#"
                          class="mega-link"
                          data-action="click-trigger"
                        >
                          <span class="mega-image"
                            ><img
                              src="@/assets/avatar/vint_cerf_thumb.jpg"
                              alt="example image"
                          /></span>
                          <span class="mega-name"
                            >Vint Cerf<i class="fa fa-caret-down fa-fw"></i
                          ></span>
                          
                        </a>
                        <div
                          class="vd_mega-menu-content  width-xs-2  left-xs left-sm"
                          data-action="click-target"
                        >
                          <div class="child-menu">
                            <div class="content-list content-menu">
                              <ul class="list-wrapper pd-lr-10">
                                <h4 class="vd_navbar vd_bg-grey">Profile</h4>
                                <li>
                                  <a href="profile.html">
                                    <div class="menu-icon">
                                      <i class=" fa fa-user"></i>
                                    </div>
                                    <div class="menu-text">My Profile</div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="top-menu-settings"
                        class="one-big-icon hidden-xs hidden-sm mega-li"
                        data-intro="<strong>Toggle Right Navigation </strong><br/>On smaller device such as tablet or phone you can click on the middle content to close the right or left navigation."
                        data-step="2"
                        data-position="left"
                      >
                        <a
                          href="#"
                          class="mega-link"
                          data-action="toggle-navbar-right"
                        >
                          <span class="mega-icon"
                            ><i class="fa fa-comments"></i
                          ></span>
                          <span class="badge vd_bg-red">8</span>
                        </a>
                      </li>
                    </ul>
                    <!-- mega-ul end -->
                  </div>
                  <!-- vd_mega-menu end -->
                </div>
                <!-- vd_mega-menu-wrapper end -->
              </div>
            </div>
            <!-- row end -->
          </div>
          <!-- vd_container end -->
        </div>
        <!-- container end -->
      </div>
      <!-- vd_primary-menu-wrapper end -->
    </header>
  </div>
</template>
<script>
export default {
  name: "ThemeNavigation",
};
</script>

<style lang="scss">
.navbar-tabs-menu .vd_mega-menu-wrapper .vd_mega-menu > .mega-ul > .mega-li {
  margin-left: 0px;
}

.vd_menu-search {
  float: left;
}

.navbar-tabs-menu {
  margin-left: 0;
  background-color: transparent;
}

.vd_mega-menu-wrapper .vd_mega-menu {
  float: none;
  display: flex;
  justify-content: center;
}

.vd_navbar,
.navbar-tabs-menu {
  -webkit-box-shadow: -5px 0px 5px -5px #9990 inset;
  box-shadow: -5px 0px 5px -5px #9990 inset;
}

.vd_navbar,
.navbar-tabs-menu {
  -webkit-box-shadow: -5px 0px 5px -5px #9990 inset;
  box-shadow: -5px 0px 5px -5px #9990 inset;
  text-align: center;
  display: flex;
  justify-content: center;
}

.vd_mega-menu-wrapper {
  position: relative !important;
  z-index: 3 !important;
  display: flex !important;
  justify-content: center !important;
}

.mybadge {
  position: relative;
  display: flex;
  align-items: center;
  .b-number {
    position: absolute;
    top: 2px;
    background: red;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    right: -10px;
    color: #fff;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    border: 2px solid #fff;
    align-items: center;
    padding: 10px;
  }
}
</style>
