import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CardList from "@/components/CardList";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge, BadgeCheck, Citrus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";

const singleUser = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users Page</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Prince</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>{" "}
      {/* Container  */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left  */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* users badges  */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold ">Users Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2 text-green-400">
                    Verified User
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2 text-green-400">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    This user is admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* users information  */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold ">Users Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <SheetContent>
                  <EditUser />
                </SheetContent>
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>{" "}
              </div>
              <Progress value={66} />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">UserName:</span>
              <span>Prince</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Email:</span>
              <span>Pr@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Phone No:</span>
              <span>+91 2377 335</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Location:</span>
              <span>india maharastra</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Role:</span>
              <span>Admin</span>
            </div>
            <p className="text-sm text-muted-foreground m-4">
              Joined on 22.09.2025
            </p>
          </div>
          {/* users card list  */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Trasactions" />
          </div>
        </div>
        {/* rigth  */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* users Card  */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-3">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                <AvatarFallback>PT</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">prince</h1>
            </div>
            <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi optio voluptates. Iste ullam eius voluptate corporis ducimus. Cum alias quisquam debitis quae nisi maxime optio dignissimos modi beatae laboriosam.</p>
          </div>
          {/* users Charts  */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleUser;
