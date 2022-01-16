import Home from '../pages/index';
import Header from '@atoms/Header/Header';

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
