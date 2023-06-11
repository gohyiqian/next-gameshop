import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export default function LoginPage() {
  return (
    <div className="container flex flex-col m-8">
      <div className="flex m-auto">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Log In</CardTitle>
                <CardDescription>Welcome back Genius!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Welcome to NextGameShop!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Create Username</Label>
                  <Input id="username" defaultValue="kenjigoh" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Create Password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex m-auto pt-6">
        <Button className="w-[400px]">
          <Link href="/shop">Go Shop</Link>
        </Button>
      </div>
      {/* <div className="flex m-auto pt-6">
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div> */}
      <div className="flex m-auto pt-6">
        <Button className="w-[400px]">
          <Link href="/admin">Admin</Link>
        </Button>
      </div>
      <div className="flex m-auto pt-6">
        <Button className="w-[400px]">
          <Link href="/store">Go Store</Link>
        </Button>
      </div>
    </div>
  );
}

// export default function Page() {
//   return (
//     <h1>
//       Hello, Home page!<Link href="/shop">Shop</Link>
//     </h1>
//   );
// }
