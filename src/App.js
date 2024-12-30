import { Route, Routes } from 'react-router';
import './App.css';
import { TasksProvider } from './TasksContext';
import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/add' element={<TaskForm/>}/>
          <Route path='/edit/:id' element={<TaskForm/>}/>
        </Routes>
      </TasksProvider>
    </div>
  );
}

export default App;
