import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCar } from '../../../features/car/carSlice';
import './addCar.css';
import styles from '../../../features/SideBar/Sidebar.module.css';

function AddCar() {
  const initialCarState = {
    id: null,
    brand: '',
    model: '',
    image: '',
    description: '',
    price: 0,
  };

  const [car, setCar] = useState(initialCarState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  const saveCar = () => {
    const { brand, model, image, price, description } = car;

    dispatch(
      createCar({
        brand,
        model,
        image,
        price,
        description,
      }),
    )
      .unwrap()
      .then((data) => {
        setCar({
          id: data.id,
          brand: data.brand,
          model: data.model,
          image: data.image,
          description: data.description,
        });
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newCar = () => {
    setCar(initialCarState);
    setSubmitted(false);
  };

  return (
    <div className="md:mt-24 submit-form">
      {submitted ? (
        <div className="flex flex-col justify-center items-center">
          <h4>Car added successfully!</h4>
          <button
            type="button"
            className="btn btn-style rounded-full"
            onClick={newCar}
          >
            Add a Car
          </button>
        </div>
      ) : (
        <div>
          <div
            className={`${styles.brandName} top-div mb-6 fs-1 ps-4 rounded-t-lg`}
          >
            Add a new car
          </div>
          <div className="mb-6">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Brand
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="brand"
              required
              value={car.brand || ''}
              onChange={handleInputChange}
              name="brand"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="model"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Model
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="model"
              required
              value={car.model || ''}
              onChange={handleInputChange}
              name="model"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="image"
              required
              value={car.image || ''}
              onChange={handleInputChange}
              name="image"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="description"
              required
              value={car.description || ''}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="price"
              required
              value={car.price || 0}
              onChange={handleInputChange}
              name="price"
            />
          </div>

          <button
            type="button"
            onClick={saveCar}
            className="btn btn-style rounded-full"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default AddCar;
