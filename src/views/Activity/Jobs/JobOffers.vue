<template>
  <div id="JobOffers">
    <div
      class="modal fade"
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
              class="btn btn-secondary "
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ON HOLD -->
    <div
      class="modal fade"
      id="onHold"
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
            <h4 class="modal-title vd_white">ON HOLD</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <h5>
                  <i class="fa fa-exclamation-circle vd_blue"></i> While you
                  will receive the confirmation
                </h5>
              </div>
            </form>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary "
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- DENIED -->
    <div
      class="modal fade"
      id="denied"
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
            <h4 class="modal-title vd_white">DENIED</h4>
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
              class="btn btn-secondary "
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ACCEPTED -->
    <div
      class="modal fade"
      id="onAccept"
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
            <h4 class="modal-title vd_white">ACCEPTED</h4>
          </div>

          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <h5>
                  <i class="fa-check-circle fa vd_green"></i> Successfully added
                </h5>
              </div>
            </form>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary "
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SUCCESSFULLY ADDED -->
    <div
      class="modal fade"
      id="successAdd"
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
            <h4 class="modal-title vd_white">ACCEPT THIS OFFER</h4>
          </div>

          <div class="modal-body">
            <form method="post">
              <button type="submit" class="btn btn-primary">ACCEPT</button>
            </form>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary "
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- VIEW -->
    <div
      class="modal right fade"
      id="viewAccept"
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
            <h4 class="modal-title vd_white">VIEW OFFER</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <h5>Attached PDF form</h5>
              </div>
            </form>
          </div>
          <div class="modal-footer vd_bg-white"></div>
        </div>
      </div>
    </div>

    <!-- DENY THIS REQUEST -->
    <div
      class="modal fade"
      id="denyRequest"
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
            <h4 class="modal-title vd_white">DENY THIS OFFER</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <select class="custom-select">
                  <option selected>Select the deny reason</option>
                  <option value="1">Because of</option>
                  <option value="2">Because of</option>
                </select>
              </div>
              <div class="form-group">
                <input type="text" placeholder="text" />
              </div>
              <button type="submit" class="btn btn-primary">OK</button>
            </form>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary "
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- HOLD THIS REQUEST -->
    <div
      class="modal fade"
      id="holdRequest"
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
            <h4 class="modal-title vd_white">HOLD THIS OFFER</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <select class="custom-select">
                  <option selected>Select the hold reason</option>
                  <option value="1">Because of</option>
                  <option value="2">Because of</option>
                </select>
              </div>
              <div class="form-group">
                <input type="text" placeholder="text" />
              </div>
              <button type="submit" class="btn btn-primary">OK</button>
            </form>
          </div>
          <div class="modal-footer vd_bg-white">
            <button
              type="button"
              class="btn btn-secondary "
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
  name: "JobOffers",
};
</script>
