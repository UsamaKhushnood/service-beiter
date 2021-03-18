<template>
  <div id="PayAccounts">
    <div
      class="modal  "
      id="addPayIn"
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
            <h4 class="modal-title vd_white">ADD NEW PAYIN ACCOUNT</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group clearfix">
                <label class="col-sm-4 control-label text-right">Title</label>
                <div class="col-sm-7 controls">
                  <input placeholder="Title" type="text" />
                  <span class="help-inline"></span>
                </div>
              </div>

              <div class="form-group clearfix">
                <label class="col-sm-4 control-label text-right">Details</label>
                <div class="col-sm-7 controls">
                  <input placeholder="Details" type="text" />
                  <span class="help-inline"></span>
                </div>
              </div>

              <div class="form-group clearfix">
                <label class="col-sm-4 control-label text-right">Details</label>
                <div class="col-sm-7 controls">
                  <input placeholder="Details" type="text" />
                  <span class="help-inline"></span>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">
                  ADD PAYIN ACCOUNT
                </button>
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

    <!-- ADD NEW PAYOUT ACCOUNT -->
    <div
      class="modal  "
      id="addPayOut"
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
            <h4 class="modal-title vd_white">ADD NEW PAYOUT ACCOUNT</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group clearfix">
                <label class="col-sm-4 control-label text-right">Title</label>
                <div class="col-sm-7 controls">
                  <input placeholder="Title" type="text" />
                  <span class="help-inline"></span>
                </div>
              </div>

              <div class="form-group clearfix">
                <label class="col-sm-4 control-label text-right">Details</label>
                <div class="col-sm-7 controls">
                  <input placeholder="Details" type="text" />
                  <span class="help-inline"></span>
                </div>
              </div>

              <div class="form-group clearfix">
                <label class="col-sm-4 control-label text-right">Details</label>
                <div class="col-sm-7 controls">
                  <input placeholder="Details" type="text" />
                  <span class="help-inline"></span>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">
                  ADD PAYOUT ACCOUNT
                </button>
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

    <!-- EDIT PAYWAY -->
    <div
      class="modal  "
      id="editPayWay"
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
            <h4 class="modal-title vd_white">EDIT</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group clearfix">
                <label class="col-sm-4 control-label text-right">Title</label>
                <div class="col-sm-7 controls">
                  <input placeholder="Title" type="text" value="paypal" />
                  <span class="help-inline"></span>
                </div>
              </div>
              <div class="form-group clearfix">
                <label class="col-sm-4 control-label text-right">Details</label>
                <div class="col-sm-7 controls">
                  <input
                    placeholder="Details"
                    type="text"
                    value="paypal@paypal.com"
                  />
                  <span class="help-inline"></span>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">SAVE</button>
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

    <!-- REMOVE PAYMENT WAY -->
    <div
      class="modal  "
      id="removePayWay"
      tabindex="-1"
      role="dialog"
      aria-labelledby="Add maincategory"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header vd_bg-red">
            <button
              type="button"
              class="close vd_white"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title vd_white">REMOVE</h4>
          </div>
          <div class="modal-body">
            <form method="post">
              <button type="submit" class="btn btn-primary">CONFIRM</button>
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
  name: "PayAccounts",
};
</script>
