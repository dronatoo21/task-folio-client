import { useDrag } from "react-dnd";
import Swal from "sweetalert2";
const Tasks = ({id, title}) => {
    const [{ isDragging }, drag] = useDrag(()=>({
        type: "div",
        item: {id: id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),  
        })
    }))
    const handleDelete = id => {
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
          fetch(`http://localhost:4000/tasks/${id}`,{
            method: "DELETE"
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
    return (
        <div className="bg-slate-400 py-2 rounded-lg mt-2" ref={drag}>
            <h1 className="bg-slate-400 font-medium" style={{border: isDragging ? "2px solid black" : ""}}>{title}</h1>
            <div className="mt-2">
                <button className="btn border-none mx-1 bg-green-500">Edit</button>
                <button onClick={() => handleDelete(id)} className="btn border-none mx-1 bg-red-500">Delete</button>
            </div>
        </div>
    );
};

export default Tasks;