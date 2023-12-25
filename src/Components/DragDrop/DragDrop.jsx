import { useEffect, useState } from "react";
import Tasks from "../Tasks/Tasks";
import { useDrop } from "react-dnd";
import { toast } from "react-toastify";

const DragDrop = () => {
    const [tasks, setTasks] = useState([])
    const [onGoing, setOngoing] = useState([])
    const [completed, setCompleted] = useState([])
    useEffect(()=>{
                fetch('http://localhost:4000/tasks')
                .then(res => res.json())
                .then(data => {
                    // setTasks(data)
                    const fTodos = data?.filter(task => task?.status === 'todo')
                    setTasks(fTodos)
                    const fOnGoing = data?.filter(task => task?.status === 'ongoing')
                    setOngoing(fOnGoing)
                    const fCompleted = data?.filter(task => task?.status === 'completed')
                    setCompleted(fCompleted)
                })
            },[])

            const [{ isOver, }, drop] = useDrop(()=>({
                accept: "div",
                drop: ((item) => addTaskToList(item?.id)),
                // drop: ({id: "1"}),
                collect: (monitor) => ({
                    isOver: !!monitor.isOver()
                  })
            }))
            const addTaskToList = (id) => {
                console.log(id);
                const mainTask = tasks?.filter(task => task?._id === id)
                setCompleted((completed) => [...completed, mainTask[0]])
                toast('task Completed')
            }
    return (
            <div className="flex md:flex-row flex-col justify-around text-center w-full p-2">
                <div ref={drop} className="todo border-2 md:w-1/4 h-[90vh]"><span className="flex justify-center btn bg-slate-400">To-Do<p className="ml-2 font-semibold bg-[#2b2a29] p-2 rounded-full text-white">{tasks?.length}</p></span>{tasks?.map((task) => {
                    return <Tasks key={task?._id} task={task} title={task?.title} id={task?._id}/>
                })}</div>
                <div ref={drop} className="ongoing border-2 md:w-1/4 my-10 md:my-0 h-[90vh]"><span className="flex justify-center btn bg-slate-400">On Going<p className="ml-2 font-semibold bg-[#2b2a29] p-2 rounded-full text-white">{onGoing?.length}</p></span>{onGoing?.map((task) => {
                    return <Tasks key={task?._id} task={task} title={task?.title} id={task?._id}/>
                })}</div>
                <div ref={drop} className="completed border-2 md:w-1/4 h-[90vh]"><span className="flex justify-center btn bg-slate-400">Completed<p className="ml-2 font-semibold bg-[#2b2a29] p-2 rounded-full text-white">{completed?.length}</p></span>{completed?.map((task) => {
                    return <Tasks key={task?._id} task={task} title={task?.title} id={task?._id}/>
                })}</div>
            </div>
    );
};

export default DragDrop;