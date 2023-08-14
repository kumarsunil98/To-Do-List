import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
  const dispatch = useDispatch();

  const alltodos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  return (
    <article>
      <ul>
        {alltodos.map((todo) => {
          return <li>{todo.data}</li>;
        })}
      </ul>
    </article>
  );
};

export default Todos;
