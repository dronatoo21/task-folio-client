import { useEffect, useState } from "react";
const AllTasks = () => {
const [tasks, setTasks] = useState([])
    useEffect(()=>{
        fetch('https://task-folio-server-theta.vercel.app/tasks')
        .then(res => res.json())
        .then(data => {
            setTasks(data)
        })
    },[])
    console.log(tasks);
    return (
        <div>
            {
                tasks?.map(task => {
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title">{task._id}</h2>
                        <p>{task?.description}</p>
                        <p>{task?.priority}</p>
                        <p>{task?.deadline}</p>
                      </div>
                    </div>
                })
            }
        </div>
    );
};

export default AllTasks;