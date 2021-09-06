<?php

namespace App\Http\Controllers;

use Silber\Bouncer\Bouncer;
use Illuminate\Http\Request;

class DefaultsController extends Controller
{
    public function sidebar(Bouncer $bouncer)
    {
        return [
            'appname' => config('app.name'),
            'home'    => route('home'),
            'roles'   => $bouncer->can('roles') ? route('roles') : null,
            'users'   => $bouncer->can('users') ? route('users') : null,
        ];
    }

    public function footer()
    {
        return [
            'appname' => config('app.name'),
        ];
    }

    public function topBar()
    {
        return [
            'settings_privacy' => route('settings-privacy'),
        ];
    }
}
