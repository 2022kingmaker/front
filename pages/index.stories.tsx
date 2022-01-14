import Home from '../pages/index';
import Header from '../components/Header/Header';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const HomePage = () => (
  <>
    <Header />
    <Home />
  </>
);
