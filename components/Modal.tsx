"use client";

import React, { useState } from "react"; // Removed `useEffect`
import { useRouter } from "next/navigation";
import { auth, provider } from "@/config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Google from "@/public/gimage.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      setError("Please enter a username.");
      return;
    }
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, provider); // Removed `result`
      router.push("/dashboard");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
    setError(""); // Clear error
  };

  return (
    <div
      aria-hidden={!isOpen}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          {isSignup ? "Sign Up" : "Log In"}
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your username"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-4 py-2 rounded ${
              isLoading
                ? "bg-purple-300 cursor-not-allowed"
                : "bg-purple-600 text-white"
            }`}
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <button
          onClick={handleGoogleAuth}
          disabled={isLoading}
          className="w-full mt-4 bg-gray-100 border text-gray-700 py-2 rounded flex items-center justify-center"
        >
          <Image
            src={Google}
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Continue with Google
        </button>

        <p
          onClick={toggleSignup}
          className="text-sm text-purple-600 mt-4 cursor-pointer"
        >
          {isSignup
            ? "Already have an account? Log In"
            : "Don’t have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Modal;
