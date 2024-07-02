import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto"> 
       <div className=" text-center my-4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold tracking-widest">To Do App</h1>
       </div>
      <AddTask/>
      <ToDoList/>
    </main>
  );
}
