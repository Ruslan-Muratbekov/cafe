import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import Contacts from './pages/contacts';
import Delivery from './pages/Delivery';
import About from './pages/About';
import Orders from './pages/Orders';
import DeliveryRegistration from './components/DeliveryRegistration';
import Registration from './components/registration';
import Login from './components/login';
import LogInByWhatsapp from './components/logInByWhatsapp';
import ConfirmedOrder from './components/confirmedOrder';
import { Profile } from './components/profile/index';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="contacts"
          element={
            <Suspense fallback={<div>Идёт загрузка контактов ...</div>}>
              <Contacts />
            </Suspense>
          }
        />
        <Route
          path="delivery"
          element={
            <Suspense fallback={<div>Идёт загрузка доставки ...</div>}>
              <Delivery />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<div>Идёт загрузка о нас ...</div>}>
              <About />
            </Suspense>
          }
        />

        <Route
          path="orders"
          element={
            <Suspense fallback={<div>Идёт загрузка о ваших заказов ...</div>}>
              <Orders />
              {/* {Token ? <Orders/> : <Login/>} */}
            </Suspense>
          }
        />
        <Route
          path="deliveryPay"
          element={
            <Suspense fallback={<div>Идёт загрузка о ваших заказов ...</div>}>
              <DeliveryRegistration />
            </Suspense>
          }
        />
        <Route
          path="profile"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="confirm"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <ConfirmedOrder />
            </Suspense>
          }
        />
      </Route>

      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="login-by-whatsapp" element={<LogInByWhatsapp />} />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Идёт загрузка...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;