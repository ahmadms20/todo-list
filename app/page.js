import { TodoProvider } from './_context/TodoContext';
import TodoList from './_components/TodoList';

const Home = () => {
    return (
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    );
};

export default Home;