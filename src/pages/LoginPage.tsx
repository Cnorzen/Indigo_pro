import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

type AccountInfo = {
  email: string;
  password: string;
};

// AccountInfo
const user1: AccountInfo = {
  email: "binh123@gmail.com",
  password: "123456",
};

const user2: AccountInfo = {
  email: "anna68@gmail.com",
  password: "123456",
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [accountInfo, setAccountInfo] = useState<AccountInfo>({
    email: "",
    password: "",
  });

  const handleSubmitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (
      (accountInfo.email === user1.email &&
        accountInfo.password === user1.password) ||
      (accountInfo.email === user2.email &&
        accountInfo.password === user2.password)
    ) {
      const token = "example_token";
      localStorage.setItem("token", token);
      toast.success("Login Successful!");

      navigate("/admin");
    } else {
      toast.error("Invalid email or password.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/");
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
            đăng nhập vào tài khoản của bạn
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitForm}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email của bạn
              </label>
              <input
                value={accountInfo.email}
                onChange={(e) =>
                  setAccountInfo({ ...accountInfo, email: e.target.value })
                }
                type="email"
                name="email"
                id="email"
                className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="tên@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                value={accountInfo.password}
                onChange={(e) =>
                  setAccountInfo({ ...accountInfo, password: e.target.value })
                }
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-3 focus:ring-blue-300 dark:bg-gray-900 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-400 dark:text-gray-300"
                  >
                    Nhớ tài khoản
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Quên mật khẩu
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Đăng nhập tài khoản
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Bạn chưa có tài khoản{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Đăng ký
              </a>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
