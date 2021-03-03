<template>
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
              <i class="append-icon glyphicon glyphicon-qrcode"></i> Our
              Services
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
                  data-target="#addMaincategory"
                 >
                  <span class="append-icon">
                    <i class="fa fa-plus-circle fa-fw"></i>
                  </span>Add Maincategory
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mgbt-xs-10">
                <button
                  type="button"
                  class="btn vd_btn vd_bg-blue btn-lg btn-block"
                  data-toggle="modal"
                  data-target="#addSubcategory"
                >
                  <span class="append-icon">
                    <i class="fa fa-plus-circle fa-fw"></i>
                  </span>Add Subcategory
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mgbt-xs-10">
                <button
                  type="button"
                  class="btn vd_btn vd_bg-blue btn-lg btn-block"
                  data-toggle="modal"
                  data-target="#addKeyword"
                >
                  <span class="append-icon">
                    <i class="fa fa-plus-circle fa-fw"></i>
                  </span>Add Keywords
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
                        <th>Maincat Img</th>
                        <th>Maincategory</th>
                        <th>Subcategory</th>
                        <th>Keywords</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <!------------------------------------------------------------------------->
                        <td>


                          <img
                            id="myImg"
                            src="img/products/2048.jpg"
                            alt="Snow"
                            style="width:100%;max-width:30px"
                          />

                          <!-- The Modal -->
                          <div id="myModal" class="modal">
                            <span class="close">&times;</span>
                            <img class="modal-content" id="img01" />
                            <div id="caption"></div>
                          </div>


                        </td>
                        <!------------------------------------------------------------------------------------------->
                        <td>Beauty</td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#subcategories"
                          >5</a>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#keywords"
                          >10</a>
                        </td>
                        <td class="menu-action">
                          <a
                            class="btn menu-icon vd_bd-blue vd_blue"
                            data-toggle="modal"
                            data-target="#addMaincategory"
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
                        <!------------------------------------------------------------------------->
                        <td>
                          <img
                            id="myImg"
                            src="img/products/2048.jpg"
                            alt="Snow"
                            style="width:100%;max-width:30px"
                          />
                        </td>
                        <!------------------------------------------------------------------------------------------->

                        <td>Internet</td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#subcategories"
                          >10</a>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#keywords"
                          >20</a>
                        </td>
                        <td class="menu-action">
                          <a
                            class="btn menu-icon vd_bd-blue vd_blue"
                            data-toggle="modal"
                            data-target="#addMaincategory"
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

</template>

<script>
export default {
  name: "OurServices",
};
</script>
<style scoped>

  #myImg {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  #myImg:hover {
    opacity: 0.7;
  }

  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
     /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  }

  /* Modal Content (image) */
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
  }

  /* Caption of Modal Image */
  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }

  /* Add Animation */
  .modal-content,
  #caption {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  /* The Close Button */
  .close {
    position: absolute;
    top: 100px;
    right: 100px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  /* 100% Image Width on Smaller Screens */
  @media only screen and (max-width: 700px) {
    .modal-content {
      width: 100%;
    }
  }
                          </style>
