import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addReservation } from './features/reservationSlice';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import CustomerCard from './components/CustomerCard';

function App() {
  const dispatch = useDispatch();

  const [reservationNameInput, setReservationNameInput] =
    useState('');

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector(
    (state: RootState) => state.customer.value
  );
  const handleAddReservations = () => {
    dispatch(addReservation(reservationNameInput));
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name, index) => {
                return (
                  <ReservationCard
                    key={index}
                    name={name}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              value={reservationNameInput}
              onChange={e => {
                setReservationNameInput(e.target.value);
              }}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className='customer-food-container'>
          {customers.map(customer => {
            return (
              <CustomerCard
                key={customer.id}
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
