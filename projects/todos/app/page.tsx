import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-screen h-screen">
    <TodoForm/>
    <TodoList/>
   </div>
  );
}
