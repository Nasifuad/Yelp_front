import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import useUserStore from "../store/user.store";

const Signup = () => {
  const { user, signup } = useUserStore();

  if (user) {
    return <Navigate to="/" />;
  }
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = {
      userName: "",
      userEmail: "",
      password: "",
    };

    if (!formData.userName.trim()) {
      newErrors.userName = "Username is required";
      valid = false;
    }

    if (!formData.userEmail) {
      newErrors.userEmail = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail)) {
      newErrors.userEmail = "Email is invalid";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Signup data:", formData);
      signup(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Create your account
          </h2>
          <p className="mt-2 text-slate-600">Get started with your journal</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-slate-700"
              >
                Username
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                autoComplete="username"
                value={formData.userName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.userName ? "border-red-300" : "border-slate-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
              />
              {errors.userName && (
                <p className="mt-1 text-sm text-red-600">{errors.userName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="userEmail"
                className="block text-sm font-medium text-slate-700"
              >
                Email address
              </label>
              <input
                id="userEmail"
                name="userEmail"
                type="email"
                autoComplete="email"
                value={formData.userEmail}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.userEmail ? "border-red-300" : "border-slate-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
              />
              {errors.userEmail && (
                <p className="mt-1 text-sm text-red-600">{errors.userEmail}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full px-3 py-2 border ${
                    errors.password ? "border-red-300" : "border-slate-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-slate-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-slate-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
              <p className="mt-1 text-xs text-slate-500">
                Use 8 or more characters
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              onClick={handleSubmit}
            >
              Create account
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-teal-600 hover:text-teal-500"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
