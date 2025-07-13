import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AddTaskForm />
        <TasksList />
      </main>
      <Footer />
    </div>
  );
}

export default App;