<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;

class UsersController extends Controller
{
    public function index()
    {
        Inertia::setRootView('layouts/app');

        return Inertia::render('Users', [
            'data' => ['users_table_link' => route('users.table'), 'users_update_link' => route('users.update')],
        ]);
    }

    public function usersTable()
    {
        return DataTables::of(User::all())->setTransformer(function ($data) {
            $data               = collect($data)->toArray();
            $data["created_at"] = Carbon::parse($data["created_at"])->format("F j, Y h:i:sA");
            $data["updated_at"] = Carbon::parse($data["updated_at"])->format("F j, Y h:i:sA");

            return $data;
        })->make(true);
    }

    public function update(Request $request)
    {
        dd($request->all());
    }
}
