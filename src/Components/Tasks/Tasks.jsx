import { useDrag } from "react-dnd";
const Tasks = ({id, title}) => {
    const [{ isDragging }, drag] = useDrag(()=>({
        type: "string",
        item: {id: id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),  
        })
    }))
    return (
        <div>
            <h1 ref={drag} style={{border: isDragging ? "2px solid black" : ""}}>{title}</h1>
        </div>
    );
};

export default Tasks;