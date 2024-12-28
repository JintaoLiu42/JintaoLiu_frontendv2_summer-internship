/**
 * v0 by Vercel.
 * @see https://v0.dev/t/m2QbdD0SSb6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function SettingsComponent() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-gray-100/40 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Customize your preferences to personalize your experience.
        </p>
      </div>

      {/** 导航栏：新增了“Accessibility”、“General” */}
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid gap-4 text-sm text-gray-500 dark:text-gray-400">
          <a
            href="#account"
            className="font-semibold text-gray-900 dark:text-gray-50"
          >
            Account
          </a>
          <a href="#notifications">Notifications</a>
          <a href="#appearance">Appearance</a>
          <a href="#privacy">Privacy</a>
          <a href="#security">Security</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#general">General</a>
        </nav>

        <div className="grid gap-6">
          {/** Account Section */}
          <section id="account" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Account</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Manage your account settings.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Username</CardTitle>
                <CardDescription>
                  This is the name that will be displayed on your profile.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Input
                    placeholder="Enter your username"
                    defaultValue="johndoe"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Address</CardTitle>
                <CardDescription>
                  This is the email address associated with your account.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    defaultValue="johndoe@example.com"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Change Login Password</CardTitle>
                <CardDescription>
                  Change your password to secure your account.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Input
                    type="password"
                    placeholder="Enter your new password"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm your new password"
                  />
                </div>
              </CardContent>
            </Card>

            {/**
             * 新增: Fingerprint ID (Mobile App)
             * 这里用一个 Switch 来模拟是否开启指纹解锁
             */}
            <Card>
              <CardHeader>
                <CardTitle>Fingerprint ID (Mobile App)</CardTitle>
                <CardDescription>
                  Use your fingerprint to quickly unlock the app.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="fingerprint-id"
                    className="flex flex-col space-y-1"
                  >
                    <span>Enable Fingerprint ID</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Secure and convenient login on mobile devices.
                    </span>
                  </Label>
                  <Switch id="fingerprint-id" />
                </div>
              </CardContent>
            </Card>

            {/**
             * 新增: Pattern Lock (Mobile App)
             * 这里也用一个 Switch 来模拟是否开启图案解锁
             */}
            <Card>
              <CardHeader>
                <CardTitle>Pattern Lock (Mobile App)</CardTitle>
                <CardDescription>
                  Use a pattern lock to secure your mobile app.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="pattern-lock"
                    className="flex flex-col space-y-1"
                  >
                    <span>Enable Pattern Lock</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Draw a unique pattern to unlock the app.
                    </span>
                  </Label>
                  <Switch id="pattern-lock" />
                </div>
              </CardContent>
            </Card>

            {/**
             * 新增: Delete Account
             * 一个按钮，用于触发删除帐号的操作
             */}
            <Card>
              <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>
                  Permanently delete your account and all associated data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive">Delete Account</Button>
              </CardContent>
            </Card>
          </section>

          {/** Notifications Section */}
          <section id="notifications" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Manage your notification preferences.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>
                  Receive email notifications for important updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="email-notifications"
                    className="flex flex-col space-y-1"
                  >
                    <span>Receive Email Notifications</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Get notified about important updates and events.
                    </span>
                  </Label>
                  <Switch id="email-notifications" defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Push Notifications</CardTitle>
                <CardDescription>
                  Receive push notifications on your devices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="push-notifications"
                    className="flex flex-col space-y-1"
                  >
                    <span>Receive Push Notifications</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Get notified about important updates on your devices.
                    </span>
                  </Label>
                  <Switch id="push-notifications" />
                </div>
              </CardContent>
            </Card>

            {/**
             * 新增：Device Alert & Do not Disturb
             */}
            <Card>
              <CardHeader>
                <CardTitle>Device Alert</CardTitle>
                <CardDescription>
                  Enable or disable alert sounds/vibrations on the device.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="device-alert"
                    className="flex flex-col space-y-1"
                  >
                    <span>Enable Device Alert</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Play a sound or vibrate on new notifications.
                    </span>
                  </Label>
                  <Switch id="device-alert" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do Not Disturb Schedule</CardTitle>
                <CardDescription>
                  Automatically silence notifications during specific times.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="space-y-1">
                    <Label>Start Time</Label>
                    <Input type="time" defaultValue="22:00" />
                  </div>
                  <div className="space-y-1">
                    <Label>End Time</Label>
                    <Input type="time" defaultValue="07:00" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/** Appearance Section */}
          <section id="appearance" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Appearance</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Customize the visual appearance of the application.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Theme</CardTitle>
                <CardDescription>
                  Select the color theme for the application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="theme" className="flex flex-col space-y-1">
                    <span>Theme</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Choose the color theme for the application.
                    </span>
                  </Label>
                  <Select defaultValue="system">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Font Size</CardTitle>
                <CardDescription>
                  Adjust the font size for better readability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="font-size"
                    className="flex flex-col space-y-1"
                  >
                    <span>Font Size</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Choose the font size for the application.
                    </span>
                  </Label>
                  <Select defaultValue="medium">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </section>

          {/** Privacy Section */}
          <section id="privacy" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Privacy</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Manage your privacy settings.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Data Collection</CardTitle>
                <CardDescription>
                  Control the data that is collected about your usage.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="data-collection"
                    className="flex flex-col space-y-1"
                  >
                    <span>Collect Usage Data</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Allow the application to collect anonymous usage data.
                    </span>
                  </Label>
                  <Switch id="data-collection" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Visibility</CardTitle>
                <CardDescription>
                  Control who can see your account information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="account-visibility"
                    className="flex flex-col space-y-1"
                  >
                    <span>Make Account Public</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Allow others to view your account information.
                    </span>
                  </Label>
                  <Switch id="account-visibility" />
                </div>
              </CardContent>
            </Card>

            {/** 新增：Privacy Policy、Terms of use、Precision */}
            <Card>
              <CardHeader>
                <CardTitle>Privacy Policy List/History</CardTitle>
                <CardDescription>
                  View current and past privacy policies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  View Policies
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Terms of Use</CardTitle>
                <CardDescription>
                  Review the terms and conditions for using the app.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  View Terms
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Precision Settings</CardTitle>
                <CardDescription>
                  Control how location and sensor data is used.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="precision-settings"
                    className="flex flex-col space-y-1"
                  >
                    <span>Enable High-Precision Data</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Allow more precise location and sensor tracking.
                    </span>
                  </Label>
                  <Switch id="precision-settings" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/** Security Section */}
          <section id="security" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Security</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Manage your security settings.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>
                  Add an extra layer of security to your account.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="two-factor-auth"
                    className="flex flex-col space-y-1"
                  >
                    <span>Enable Two-Factor Authentication</span>
                    <span className="font-normal leading-snug text-gray-500 dark:text-gray-400">
                      Require a second step to verify your identity.
                    </span>
                  </Label>
                  <Switch id="two-factor-auth" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logged-in Devices</CardTitle>
                <CardDescription>
                  View and manage the devices logged into your account.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-medium">MacBook Pro</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        Logged in on 2023-04-15
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Sign out
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-medium">iPhone 13</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        Logged in on 2023-04-12
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Sign out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/** 新增：Accessibility Section */}
          <section id="accessibility" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Accessibility</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Manage how the app accesses your device features (Mobile app).
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Storage Access</CardTitle>
                <CardDescription>
                  Allow the app to access device storage.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="storage-access"
                    className="flex flex-col space-y-1"
                  >
                    <span>Enable Storage Access</span>
                  </Label>
                  <Switch id="storage-access" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Camera & Microphone</CardTitle>
                <CardDescription>
                  Allow the app to access camera and microphone.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="camera-access"
                      className="flex flex-col space-y-1"
                    >
                      <span>Camera Access</span>
                    </Label>
                    <Switch id="camera-access" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="mic-access"
                      className="flex flex-col space-y-1"
                    >
                      <span>Microphone Access</span>
                    </Label>
                    <Switch id="mic-access" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clear Cache</CardTitle>
                <CardDescription>
                  Remove temporary files and clear local cache.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Clear Cache</Button>
              </CardContent>
            </Card>
          </section>

          {/** 新增：General Section */}
          <section id="general" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">General</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Configure language, location, tone, and unit preferences.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Language and Location</CardTitle>
                <CardDescription>
                  Set your preferred language and location settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    <Label htmlFor="language" className="mb-1 block">
                      Language
                    </Label>
                    <Select defaultValue="en">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="zh">中文</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location" className="mb-1 block">
                      Location
                    </Label>
                    <Input
                      placeholder="Enter your location"
                      defaultValue="USA"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tone</CardTitle>
                <CardDescription>
                  Select a style or tone for text prompts or voice feedback.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select defaultValue="default">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Units</CardTitle>
                <CardDescription>
                  Choose how units like temperature or power consumption are
                  displayed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="temperature-unit">Temperature Unit</Label>
                    <Select defaultValue="celsius">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="celsius">Celsius</SelectItem>
                        <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="power-unit">Power Unit</Label>
                    <Select defaultValue="watt">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="watt">Watt</SelectItem>
                        <SelectItem value="kilowatt">Kilowatt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-6xl justify-end">
        <Button>Save Changes</Button>
      </div>
    </main>
  );
}
