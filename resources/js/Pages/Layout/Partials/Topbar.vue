<template>
    <nav class="navbar navbar-expand navbar-light navbar-bg">
        <a class="sidebar-toggle d-flex" @click="toggleSideBar">
            <i class="hamburger align-self-center"></i>
        </a>
        <div class="navbar-collapse collapse">
            <ul class="navbar-nav navbar-align">
                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                        <i class="align-middle" data-feather="settings"></i>
                    </a>

                    <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                        <!--                        @if(isset((new \App\Models\Files())->getProfilePic(auth()->id())->path) && (new \App\Models\Files())->getProfilePic(auth()->id())->path)-->
                        <!--                        <img src="{{ (new \App\Models\Files())->getProfilePic(auth()->id())->path }}"-->
                        <!--                             class="avatar img-fluid rounded me-1"-->
                        <!--                             alt="Charles Hall"/>-->
                        <!--                        @else-->
                        <img src="https://avatars.dicebear.com/api/jdenticon/.svg" class="avatar img-fluid rounded me-1"
                             alt="Charles Hall"/>
                        <!--                        @endif-->
                        <!--                        <span class="text-dark">{{ auth()->user()->name }}</span>-->
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" :href="top_bar.settings_privacy">
                            <i class="align-middle me-1" data-feather="settings"></i> Settings & Privacy
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="align-middle me-1" data-feather="help-circle"></i> Help Center
                        </a>
                        <div class="dropdown-divider"></div>
                        <!--                        <form method="POST" action="{{ route('logout') }}">-->
                        <!--                            @csrf-->
                                                    <a class="dropdown-item" href="/logout">Log out</a>
                        <!--                        </form>-->
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Topbar",
        props: ['sidebar_collapse'],
        data() {
            return {
                top_bar: {}
            }
        },
        methods: {
            toggleSideBar() {
                this.$emit('sideBarToggle', !this.sidebar_collapse);
            },
            getDefaults() {
                var $this = this;
                axios.post('/admin/top-bar', {})
                    .then(function (value) {
                        $this.top_bar = value.data;
                    });
            }
        }, mounted() {
            this.getDefaults();
        },
    }
</script>

<style scoped>

</style>
