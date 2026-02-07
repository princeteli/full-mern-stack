"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [Open, setOpen] = useState(false);

  return (
    <div>
      <Popover open={Open} onOpenChange={setOpen}>
        <h1 className="text-lg font-medium mb-6">Todo List</h1>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick A date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          {" "}
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date)=>{
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>{" "}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item" />
              <label htmlFor="item" className="text-sm text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
