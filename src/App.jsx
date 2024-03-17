// import Link from "next/link";
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="h-dvh bg-gray-50 dark:bg-gray-950">
      <div className="py-12 sm:py-16">
        <div className="mx-auto grid gap-8 sm:gap-12 max-w-sm sm:max-w-md 2xl:max-w-sm">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight dark:text-white">
              Create an account
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Already have an account?
              <a className="underline ml-2" href="#">
                Sign in
              </a>
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 flex flex-col">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                placeholder="m@example.com"
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <a className="text-sm underline" href="#">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="passwordConfirmation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password confirmation
              </label>
              <input
                id="passwordConfirmation"
                required
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="nickname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nickname
              </label>
              <input
                id="nickname"
                placeholder="Nickname"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                <img
                  id="preview_img"
                  className="h-16 w-16 object-cover rounded-full"
                  src="/default-profile.png"
                  alt="Current profile photo"
                />
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                  "
                />
              </label>
            </div>
            <div className="space-y-2">
              <button
                className="bg-black dark:bg-white text-white dark:text-black inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
