import CreateTask from "../../Components/CreateTask";
import DragDrop from "../../Components/DragDrop/DragDrop";

const TaskManagementDashboard = () => {
    return (
        <div className="bg-slate-100 w-full flex flex-col h-screen items-center pt-5 gap-5">
            <CreateTask/>
            <DragDrop/>
        </div>
    );
};

export default TaskManagementDashboard;