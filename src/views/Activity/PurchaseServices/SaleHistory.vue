<template>
  <div id="SaleHistory">
    <div
      class="modal right  "
      id="saleHistory"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Add maincategory"
      aria-hidden="true"
      style="z-index:1042;"
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
              <span aria-hidden="true"
                ><i class="fa fa-arrow-circle-right"></i
              ></span>
            </button>
            <h4 class="modal-title vd_white">SALE HISTORY</h4>
          </div>
          <div class="modal-body">
            <div class="pd-20">
              <div class="row">
                <div class="col-md-3">
                  <div class="userAvatar vd_bg-light-grey text-center mrgn30-0">
                    <div class="avatarBackground">
                      <img src="img/avatar/avatarBg.png" alt="" />
                    </div>
                    <div class="logoWrapper vd_bg-light-grey">
                      <img
                        src="img/logos/boinc.png"
                        alt=""
                        class="projectImg inline-block"
                      />
                    </div>
                    <h4>BioInc Corp.</h4>
                    <h6>Company ID: 120987465</h6>
                    <div class="row text-center">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modalCompanyProfile"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                  <!-- userAvatar end -->
                  <h4>List</h4>
                  <ul class="prMenu">
                    <li class="active">
                      <a data-toggle="tab" href="#sh-total">
                        Total
                        <span class="label label-default pull-right"
                          >500</span
                        ></a
                      >
                    </li>
                    <li>
                      <a data-toggle="tab" href="#sh-used">
                        Used
                        <span
                          class="label label-default vd_bg-blue vd_white pull-right"
                          >20</span
                        ></a
                      >
                    </li>
                    <li>
                      <a data-toggle="tab" href="#sh-unused">
                        Unused
                        <span
                          class="label label-default vd_bg-green vd_white pull-right"
                          >30</span
                        ></a
                      >
                    </li>
                    <li>
                      <a data-toggle="tab" href="#sh-gift">
                        Gift
                        <span
                          class="label label-default vd_bg-red vd_white pull-right"
                          >10</span
                        ></a
                      >
                    </li>
                  </ul>
                  <!-- Menu Buttons end -->
                </div>
                <!-- Left Modal Deck end -->
                <div class="col-md-9">
                  <div class="tab-content no-bd mrgn0 pdng0">
                    <div class="tab-pane active   in" id="sh-total">
                      <div class="panel widget">
                        <div class="panel-body table-responsive">
                          <table class="table discountTable">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Service ID</th>
                                <th>Category</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Sales</th>
                                <th>Used</th>
                                <th>Unused</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>1232132134</td>
                                <td>Beauty</td>
                                <td>03-03-2017</td>
                                <td>04-04-2017</td>
                                <td>1200 €</td>
                                <td>-</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- panel-body end -->
                      </div>
                      <!-- panel widget end -->
                    </div>
                    <!--  tab-pane end -->

                    <div class="tab-pane  " id="sh-used">
                      <div class="panel widget">
                        <div class="panel-body table-responsive">
                          <table class="table discountTable">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Service ID</th>
                                <th>Category</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Sales</th>
                                <th>Used</th>
                                <th>Unused</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>1232132134</td>
                                <td>Beauty</td>
                                <td>03-03-2017</td>
                                <td>04-04-2017</td>
                                <td>1200 €</td>
                                <td>-</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- panel-body end -->
                      </div>
                      <!-- panel widget end -->
                    </div>
                    <!--  tab-pane end -->

                    <div class="tab-pane  " id="sh-unused">
                      <div class="panel widget">
                        <div class="panel-body table-responsive">
                          <table class="table discountTable">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Service ID</th>
                                <th>Category</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Sales</th>
                                <th>Used</th>
                                <th>Unused</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>1232132134</td>
                                <td>Beauty</td>
                                <td>03-03-2017</td>
                                <td>04-04-2017</td>
                                <td>1200 €</td>
                                <td>-</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- panel-body end -->
                      </div>
                      <!-- panel widget end -->
                    </div>
                    <!--  tab-pane end -->

                    <div class="tab-pane  " id="sh-gift">
                      <div class="panel widget">
                        <div class="panel-body table-responsive">
                          <table class="table discountTable">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Service ID</th>
                                <th>Category</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Sales</th>
                                <th>Used</th>
                                <th>Unused</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>1232132134</td>
                                <td>Beauty</td>
                                <td>03-03-2017</td>
                                <td>04-04-2017</td>
                                <td>1200 €</td>
                                <td>-</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- panel-body end -->
                      </div>
                      <!-- panel widget end -->
                    </div>
                    <!--  tab-pane end -->
                  </div>
                  <!--  tab-content end -->
                </div>
                <!-- col-md-9 end -->
              </div>
              <!-- row end -->
            </div>
            <!-- pd-20 end -->
          </div>
          <div class="modal-footer vd_bg-white"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SaleHistory",
};
</script>
