
import './App.css';
import AuthReducerProvider from './contexts/AuthReducer';
import MainRouter from './routing/MainRouter';

const App: React.FC = () => {
  return (
    <AuthReducerProvider>
      <MainRouter />
    </AuthReducerProvider>
  );
};

export default App;
