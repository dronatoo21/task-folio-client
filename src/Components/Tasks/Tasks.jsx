import { useDrag } from "react-dnd";
import Swal from "sweetalert2";
const Tasks = (task, {title}) => {
    const [{ isDragging }, drag] = useDrag(()=>({
        type: "div",
        item: {id: task?._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),  
        })
    }))
    const handleDelete = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(task.id);
          fetch(`https://task-folio-server-theta.vercel.app/tasks/${task?.id}`,{
            method: 'DELETE',
          })
          .then(res=>res.json())
          .then(data => {
              console.log(data);
              if(data?.deletedCount > 0){
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                  });
                  window.location.reload()
              }
          })
          }
        });
    }
    // const handleEdit = (data) => {
    //         const title = data.title
    //         const description = data.description;
    //         const deadline = data.deadline;
    //         const priority = data.priority;
    //         const status = task.status
    //         const fullData = {title, description, deadline, priority, status}
    //         console.log(fullData);
    //     fetch(`https://task-folio-server-theta.vercel.app/tasks/${task?.id}`, {
    //             method: 'PATCH',
    //             headers: {
    //               'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(fullData)
    //             })
    //             .then(res => res.json())
    //             .then(data =>{
    //               console.log(data);
    //               if(data.modifiedCount > 0){
    //                 Swal.fire({
    //                   title: 'Success',
    //                   text: 'Confirmed Donation successfully',
    //                   icon: 'success',
    //                   confirmButtonText: 'Okay'
    //             })
    //         }
    //     })
    // }

    return (
        <div className="bg-slate-400 py-2 rounded-lg mt-2" ref={drag}>
            <h1 className="bg-slate-400 text-black font-medium" style={{border: isDragging ? "2px solid black" : ""}}>{task?.title}</h1>
                <div className="mt-2 flex justify-center gap-2">
                <button onClick={() => handleDelete(task)} className="btn border-none bg-red-500">Delete</button>
            </div>
        </div>
    );
};

export default Tasks;