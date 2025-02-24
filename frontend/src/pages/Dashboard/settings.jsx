import React from "react";
import { Link } from "react-router-dom";

import { FileText, Settings, LogOut, Activity } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card1";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const SettingsPage = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold">
            CB
          </div>
          <div className="ml-4">
            <h2 className="font-semibold">Chetan Borkar</h2>
            <p className="text-sm text-gray-400">chetanccc@gmail.com</p>
          </div>
        </div>
        <nav>
          <Link to="/dashboard">
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Activity className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          <Link to="/health-report">
            <Button variant="ghost" className="w-full justify-start mb-2">
              <FileText className="mr-2 h-4 w-4" />
              Health Report
            </Button>
          </Link>

          <Link to="/settings">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <Card className="bg-gray-800 border-blue-600 mb-6">
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  defaultValue="Chetan Borkar"
                  className="bg-gray-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="chetancc@gmail.com"
                  className="bg-gray-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  className="bg-gray-700 text-white"
                />
              </div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-blue-600">
          <CardHeader>
            <CardTitle>Account Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" className="w-full mb-4">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SettingsPage;
