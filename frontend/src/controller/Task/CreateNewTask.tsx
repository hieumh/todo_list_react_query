import AddElement from "../../component/AddElement";

type CreateNewTaskProps = Record<string, never>;


function CreateNewTask(_: CreateNewTaskProps) {
  return (
    <AddElement />
  );
}

export default CreateNewTask;