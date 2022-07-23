import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import GoogleLogin from "react-google-login";

interface AuthResponse {
  token: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

const GoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const onSuccess = async (res: any) => {
    try {
      const result: AxiosResponse<AuthResponse> = await axios.post("/auth/", {
        token: res?.tokenId,
      });

      setUser(result.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {!user && (
        <GoogleLogin
          clientId="131783807710-gdirrk79m7ckrrhpm3uono3gu5o5i704.apps.googleusercontent.com"
          onSuccess={onSuccess}
        />
      )}

      {user && (
        <>
          <img src={user.avatar} className="rounded-full" />
          <h1 className="my-5 text-xl font-semibold text-center">
            {user.name}
          </h1>
        </>
      )}
    </div>
  );
};

export default GoogleAuth;
