import React from 'react';

async function getTodos(){
  const res = await fetch('http://localhost:3001/todos');
  const todos = await res.json();
  return todos;
}



export default async function ToDoList() {

  const tasktable = await getTodos();

  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>TASK</th>
        <th>ACTION</th>
     </tr>
    </thead>
    <tbody>
      {tasktable.map(task =>(
           <tr key={task.id}>
           <th>{task.id}</th>
           <td>{task.text}</td>
           <td>Blue</td>
         </tr>
      ))}
      
    </tbody>
  </table>
</div>
  )
}


