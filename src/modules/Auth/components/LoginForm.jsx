import React from 'react'

const LoginForm = ({ username, password, onChangeUsername, onChangePassword, onSubmit, ...props }) => {
  return (
    <div {...props}>
      <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-zinc-900">
        <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
          Sign in
        </h2>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
            >
              Your Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-950 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
              placeholder="Username"
              value={username}
              onChange={onChangeUsername}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-950 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
              value={password}
              onChange={onChangePassword}
              required=""
            />
          </div>
          <div className="flex items-start">
            <a
              href="#"
              className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 sm:w-auto dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-zinc-900 dark:text-white">
            Not registered yet?{" "}
            <a className="text-cyan-600 hover:underline dark:text-cyan-500">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm