import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

function LoginForm() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  
  const handleOnLogin = () => {
    console.log("Login");
    startTransition(() => {
      setIsLoading(true);
    });

    setTimeout(() => {
      startTransition(() => {
        setIsLoading(false);
        navigate("/dashboard");
      });
    }, 3000);
  };
  // const handleOnLogin = () => {
  //   console.log("Login");
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     navigate("/dashboard");
  //   }, 3000);
  // };
    // const payload = { email, password };
    
    // setLoading(true);
    // const res = await fetch("http://127.0.0.1:8000/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // });

    // const resJson = await res.json();
    // setLoading(false);

    // if (resJson.data.access_token) {
    //   localStorage.setItem("token", resJson.data.access_token);
    // }
  // };



  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen ">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder=""
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          {/* <Button
            className="w-full"
            onClick={handleOnLogin}
            loading={isLoading}
            >
            Sign in
          </Button> */}
           <Button className="w-full" 
              onClick={handleOnLogin} 
              disabled={isLoading}>{isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Card className="w-full max-w-sm">
//         <CardHeader>
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription>
//             Enter your email below to login to your account.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               required
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button className="w-full" onClick={handleOnLogin} disabled={loading} >
//             { loading ? "Submitting..." : "Sign in" }
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

export default LoginForm;
