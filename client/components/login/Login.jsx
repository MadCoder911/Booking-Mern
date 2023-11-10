"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/user/userSlice";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  //
  const login = async (user, pass) => {
    const res = await fetch(`${process.env.API_URL}/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: user, password: pass }),
      credentials: "include",
    });
    let data = await res.json();

    if (data.username) {
      setMessage("You have been logged in !");
      dispatch(setUser({ user: data.username }));
      setSuccess(true);
      setUsername("");
      setPassword("");
      router.push("/hotels");
    } else if (data.success === false) {
      setMessage("Wrong username or password !");
      setSuccess(false);
      //   setTimeout(() => {
      //     setMessage("");
      //   }, 3000);
    }
  };

  return (
    <div className=" h-[80vh] relative flex justify-center ">
      <div className="rounded-md container  flex flex-col md:w-[30%] w-[90%] absolute top-[50%] translate-y-[-50%] bg-blue-900 items-center justify-center">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="mb-[20px] px-2 py-2 rounded-md mt-[100px] "
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="mb-[20px] px-2 py-2 rounded-md"
        />
        <p className={`${success ? " text-green-500" : "text-red-500"} mb-3 `}>
          {message}
        </p>
        <button
          className="bg-white px-3 py-2 rounded-md text-blue-700 mb-[100px] "
          onClick={() => {
            login(username, password);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
