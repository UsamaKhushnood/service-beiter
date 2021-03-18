<template>
  <div id="Payouts">
    <div
      class="modal  "
      id="addPayWay"
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
            <h4 class="modal-title vd_white">ADD PAYMENT WAY</h4>
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
                <label class="col-sm-4 control-label text-right">Euro</label>
                <div class="col-sm-7 controls">
                  <input placeholder="Euro" type="text" />
                  <span class="help-inline"></span>
                </div>
              </div>

              <div class="form-group clearfix">
                <label class="col-sm-4 control-label text-right">%</label>
                <div class="col-sm-7 controls">
                  <input placeholder="%" type="text" />
                  <span class="help-inline"></span>
                </div>
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-primary">ADD</button>
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

    <!-- EDIT PAYMENT WAY -->
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
            <h4 class="modal-title vd_white">EDIT PAYMENT WAY</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="comment">Comment:</label>
              <textarea
                class="form-control"
                rows="5"
                id="comment"
                style="resize:none;"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer vd_bg-white">
            <button type="submit" class="btn btn-success">Submit</button>
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
          <div class="modal-header vd_bg-green">
            <button
              type="button"
              class="close vd_white"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title vd_white">REMOVE PAYMENT WAY</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="firstname-1" class="col-sm-3 control-label"
                >Coupon Code</label
              >
              <div class="col-sm-7">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  class="form-control input-sm"
                  name="generate"
                  id="generate"
                />
                <a
                  onClick="gen()"
                  href="javascript:void(0);"
                  class="btn btn-link"
                  >Generate</a
                >
              </div>
              <button type="submit" class="btn btn-success ml-10">
                Submit
              </button>
            </div>
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

    <div
      class="modal  "
      id="adminmodal"
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
            <h4 class="modal-title vd_white">Administrator Password</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
          </div>
          <div class="modal-footer vd_bg-white">
            <button type="submit" class="btn btn-success ml-10">Submit</button>
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
  name: "Payouts",
};
</script>
