// App.js
import React from 'react';
import AddressForm from './components/AddressForm';
import './index.css'; // Make sure Tailwind CSS is imported here

const App = () => {
  return (
    <div className="App">
      
      <main className="p-6">
        <AddressForm />
      </main>
    </div>
  );
};

export default App;
