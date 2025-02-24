import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleSignIn = () => {
  // Log the client ID to ensure it's being loaded
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  console.log("Client ID:", clientId); // For debugging

  const handleLoginSuccess = async (credentialResponse) => {
    console.log("Google login successful:", credentialResponse);
    const { credential } = credentialResponse;

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/google/callback",
        { token: credential }
      );
      console.log("User authenticated:", res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      window.location.href = "/"; // Redirect after successful login
    } catch (error) {
      console.error(
        "Error during login:",
        error.response?.data || error.message
      );
      alert("Login failed. Please try again!");
    }
  };

  const handleLoginFailure = () => {
    console.error("Login Failed");
    alert("Login failed. Please try again!");
  };

  if (!clientId) {
    return <div>Error: Google Client ID not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to Well Nest
          </h1>
          <p className="text-gray-600 mt-2">Sign in with Google to continue</p>
        </div>

        <div className="flex justify-center mt-4">
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
              useOneTap
            />
          </GoogleOAuthProvider>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            By signing in, you agree to our{" "}
            <a href="/terms" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;
