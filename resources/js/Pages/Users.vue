<template>
    <div>
        <div class="container-fluid p-0">
            <h1 class="h3 mb-3">Users</h1>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            Users Data Table
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <button class="btn btn-primary" @click="showAddUser">Add User</button>
                                </div>
                                <div class="col-12 mt-3">
                                    <table id="users-table" class="table table-hover" style="width: 100%"></table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- User Edit Modal -->
        <div id="user-edit-modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">User Edit Modal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-column">
                            <div>
                                <label>Name</label>
                                <input class="form-control" v-model="overview.name">
                            </div>
                            <div>
                                <label>New Password</label>
                                <input class="form-control" v-model="overview.password">
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input class="form-control" v-model="overview.password_confirmation">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- User Add Modal -->
        <div id="user-add-modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">User Add Modal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-column">
                            <div>
                                <label>Name</label>
                                <input class="form-control" v-model="overview.name">
                            </div>
                            <div>
                                <label>New Password</label>
                                <input class="form-control" v-model="overview.password">
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input class="form-control" v-model="overview.password_confirmation">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: Object,
        },
        data() {
            return {
                overview: {},
                dt: null,
                user_edit_modal: null,
                user_add_modal: null
            };
        },
        methods: {
          showAddUser(){
              this.user_add_modal.show()
          }
        },
        mounted() {
            var $this = this;

            $this.user_edit_modal = new bootstrap.Modal(document.getElementById('user-edit-modal'), {
                keyboard: false
            });

            $this.user_add_modal = new bootstrap.Modal(document.getElementById('user-add-modal'), {
                keyboard: false
            });

            $this.dt = $('#users-table').DataTable({
                serverSide: true,
                ajax: {
                    url: $this.data.users_table_link,
                    type: 'POST'
                },
                "columns": [
                    {"data": "id", "title": "ID"},
                    {"data": "name", "title": "Name"},
                    {"data": "email", "title": "E-mail"},
                    {"data": "created_at", "title": "Created At"},
                    {"data": "updated_at", "title": "Created At"},
                ],
                drawCallback: function (settings) {
                    $('#users-table tbody tr').on('click', function () {
                        user_edit_modal.show();
                        $this.overview = $this.dt.row($(this)).data();
                    });
                }
            });
        }
    }
</script>
