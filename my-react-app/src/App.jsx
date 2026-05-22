import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CarTable from './components/CarTable';
import CarForm from './components/CarForm';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [showForm, setShowForm] = useState(false);
  const [editingCar, setEditingCar] = useState(null);

  // Mock car data
  const [cars] = useState([
    { id: 1, brand: 'Toyota', model: 'Camry', year: 2024, price: 1250000, stock: 15, status: 'Available' },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2024, price: 1180000, stock: 12, status: 'Available' },
    { id: 3, brand: 'Ford', model: 'Mustang', year: 2023, price: 2800000, stock: 5, status: 'Low Stock' },
    { id: 4, brand: 'BMW', model: 'X5', year: 2024, price: 4500000, stock: 8, status: 'Available' },
    { id: 5, brand: 'Mercedes', model: 'C-Class', year: 2024, price: 3200000, stock: 10, status: 'Available' },
    { id: 6, brand: 'Hyundai', model: 'Tucson', year: 2023, price: 1450000, stock: 0, status: 'Out of Stock' },
    { id: 7, brand: 'Mazda', model: 'CX-5', year: 2024, price: 1680000, stock: 7, status: 'Available' },
    { id: 8, brand: 'Tesla', model: 'Model 3', year: 2024, price: 2500000, stock: 3, status: 'Low Stock' },
  ]);

  const handleAddCar = () => {
    setEditingCar(null);
    setShowForm(true);
  };

  const handleEditCar = (car) => {
    setEditingCar(car);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingCar(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    alert(`Car ${editingCar ? 'updated' : 'added'} successfully!`);
    handleCloseForm();
  };

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        <div className="content">
          {currentView === 'dashboard' && <Dashboard cars={cars} />}
          {currentView === 'inventory' && (
            <CarTable 
              cars={cars} 
              onAddCar={handleAddCar}
              onEditCar={handleEditCar}
            />
          )}
        </div>
      </div>
      {showForm && (
        <CarForm 
          car={editingCar}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

export default App;