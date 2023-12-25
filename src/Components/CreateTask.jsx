import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";

const CreateTask = () => {
    const {user} = useContext(AuthContext)
    const {register, handleSubmit} = useForm()
      const onSubmit = (data) => {
        const title = data?.title;
        const description = data?.description;
        const deadline = data?.deadline;
        const priority = data?.priority;
        const status = 'todo';
        const taskAdder = user?.email;
        const fullTask = {title, description, deadline, priority, status, taskAdder}
        fetch('http://localhost:4000/tasks', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(fullTask)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.insertedId){
            toast('Successfully added task')
            window.location.reload()
          }
        })
      }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-[#2b2a29] text-white" onClick={()=>document.getElementById('my_modal_2').showModal()}>Create Task</button>
            <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <label className="label">
                <span className="label-text">Title</span>
                </label>
                <input type="text" placeholder="title" className="input input-bordered" {...register("title")} required/>
                <label className="label">
                <span className="label-text">Description</span>
                </label>
                <textarea type="text" placeholder="Description" className="input input-bordered" {...register("description")} required/>
                <label className="label">
                <span className="label-text">Deadline</span>
                </label>
                <input type="date" {...register("deadline")} className="input input-bordered" required/>
                <label className="label">
                <span className="label-text">Priority</span>
                </label>
                <select {...register("priority")} className="h-9 border mb-5" required>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>
              <button type="submit" className="btn bg-[#2b2a29] text-white">Create</button>
            </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
        </div>
    );
};

export default CreateTask;