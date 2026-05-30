"use client";
import { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function AuthModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const {setUser} = useUser();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const res = await axios.post(url, form);

      if(res.status === 200){
        if (isLogin) {
        setUser(res.data.user);
        setIsLogin(true);
        setForm({ name: "", email: "", password: "" });
        setError("");
        setIsOpen(false);
      } else {
        alert("Signup successful");
        setIsLogin(true);
        setForm({ name: "", email: "", password: "" });
        setError("");
        setIsOpen(false);
      }
      }


    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (mode: boolean) => {
    setIsLogin(mode);
    setError("");
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white px-4 rounded-2xl w-96 shadow-xl overflow-hidden border border-yellow-100">

        {/* Top accent bar */}
        <div className="h-1 w-full bg-[#e8c96a]" />

        <div className="px-8 mt-4">
          {/* Icon */}
          <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#e8c96a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <button className="cursor-pointer" onClick={()=> setIsOpen(false)}>
            <X className="text-black"/>
          </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex border rounded-xl p-1">
            <button
              onClick={() => switchMode(true)}
              className={`flex-1 py-2 text-sm transition-all duration-200 font-medium rounded-lg
                ${isLogin
                  ? "bg-[#e8c96a] shadow-sm border"
                  : "text-black"
                }`}
            >
              Login
            </button>
            <button
              onClick={() => switchMode(false)}
              className={`flex-1 py-2 text-sm rounded-lg transition-all duration-200 font-medium
                ${!isLogin
                  ? "bg-[#e8c96a] text-white shadow-sm border border-yellow-100"
                  : "text-black"
                }`}
            >
              Sign up
            </button>
          </div>

          {/* Fields */}
          <div className="">
            {!isLogin && (
              <input
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full py-2 px-2 rounded-xl border
                  text-gray-800 text-sm placeholder:text-gray-400
                  focus:outline-none focus:ring-1 focus:ring-[#e8c96a]
                  transition-all duration-200 mt-4"
              />
            )}

            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full py-2 px-2 rounded-xl border
                text-gray-800 text-sm placeholder:text-gray-400
                focus:outline-none focus:ring-1 focus:ring-[#e8c96a]
                transition-all duration-200 ${!isLogin ? "mt-2" : "mt-4"}`}
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full py-2 px-2 rounded-xl border
                text-gray-800 text-sm placeholder:text-gray-400
                focus:outline-none focus:ring-1 focus:ring-[#e8c96a]
                transition-all duration-200 mt-2"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="mt-3 text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-5 w-full py-2 cursor-pointer bg-[#e8c96a]
              text-white font-medium text-sm
              transition-all duration-200 active:scale-[0.98]
              disabled:opacity-60 disabled:cursor-not-allowed
              flex items-center justify-center gap-2 rounded-xl mb-4"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                </svg>
                {isLogin ? "Logging in..." : "Creating account..."}
              </>
            ) : (
              isLogin ? "Login" : "Create account"
            )}
          </button>

          {/* Forgot password (login only) */}
          {/* {isLogin && (
            <p className="mt-3 text-center text-xs text-yellow-600 hover:text-yellow-700 cursor-pointer transition-colors">
              Forgot your password?
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
}