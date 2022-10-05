<template>
  <div>
    <div class="row">
      <div class="col-12">
        <Box>
          <template #right-side-title>
            <div class="dl">
              <select class="form-select shadow-none">
                <option value="0" selected>Monthly</option>
                <option value="1">Daily</option>
                <option value="2">Weekly</option>
                <option value="3">Yearly</option>
              </select>
            </div>
          </template>
          <BaseTable></BaseTable>
        </Box>
      </div>
    </div>
    <!-- <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Recent Comments</h4>
                </div>
                <div class="comment-widgets scrollable">
                    <div class="d-flex flex-row comment-row m-t-0">
                        <div class="p-2"><img src="@assets/images/users/1.jpg" alt="user" width="50"
                                class="rounded-circle"></div>
                        <div class="comment-text w-100">
                            <h6 class="font-medium">James Anderson</h6>
                            <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                and type setting industry. </span>
                            <div class="comment-footer">
                                <span class="text-muted float-end">April 14, 2021</span> <span
                                    class="badge bg-primary">Pending</span> <span
                                    class="action-icons">
                                    <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                    <a href="javascript:void(0)"><i class="ti-check"></i></a>
                                    <a href="javascript:void(0)"><i class="ti-heart"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row comment-row">
                        <div class="p-2"><img src="@assets/images/users/4.jpg" alt="user" width="50"
                                class="rounded-circle"></div>
                        <div class="comment-text active w-100">
                            <h6 class="font-medium">Michael Jorden</h6>
                            <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                and type setting industry. </span>
                            <div class="comment-footer ">
                                <span class="text-muted float-end">April 14, 2021</span>
                                <span class="badge bg-success">Approved</span>
                                <span class="action-icons active">
                                    <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                    <a href="javascript:void(0)"><i class="icon-close"></i></a>
                                    <a href="javascript:void(0)"><i class="ti-heart text-danger"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row comment-row">
                        <div class="p-2"><img src="@assets/images/users/5.jpg" alt="user" width="50"
                                class="rounded-circle"></div>
                        <div class="comment-text w-100">
                            <h6 class="font-medium">Johnathan Doeting</h6>
                            <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                and type setting industry. </span>
                            <div class="comment-footer">
                                <span class="text-muted float-end">April 14, 2021</span>
                                <span class="badge bg-danger">Rejected</span>
                                <span class="action-icons">
                                    <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                    <a href="javascript:void(0)"><i class="ti-check"></i></a>
                                    <a href="javascript:void(0)"><i class="ti-heart"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
  </div>
</template>