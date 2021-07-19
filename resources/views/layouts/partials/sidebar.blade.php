<nav id="sidebar" class="sidebar">
    <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" style="text-decoration: unset;" href="{{ route('home') }}">
            <span class="align-middle">{{ env('APP_NAME') }}</span>
        </a>

        <ul class="sidebar-nav">
            <li class="sidebar-header">
                Components
            </li>

            <li class="sidebar-item">
                <a class="sidebar-link" href="{{ route('home') }}">
                    <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
                </a>
            </li>

            <li class="sidebar-item">
                <a href="#manage-users" data-bs-toggle="collapse"
                   class="sidebar-link show collapsed" aria-expanded="false"
                >
                    <i class="align-middle" data-feather="users"></i> <span class="align-middle">Manage Users</span>
                </a>
                <ul id="manage-users" class="sidebar-dropdown list-unstyled collapse"
                    data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <a class="sidebar-link" href="{{ route('roles') }}">Roles</a></li>
                    <li class="sidebar-item">
                        <a class="sidebar-link" href="{{ route('users') }}">Users</a></li>
                </ul>
            </li>
        </ul>

    </div>
</nav>
