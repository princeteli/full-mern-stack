"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: 4,
    title: "Coding",
    badge: "Coding",
    image:
    "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
  },
  {
    id: 5,
    title: "Image Generation with AI",
    badge: "AI",
    image:
    "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
];
const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
 "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover"/>
            </div>
            <CardContent className=" p-0 ">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">
              {item.count/1000}K
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
