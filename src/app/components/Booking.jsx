"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image'

const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/header-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="relative">
      <input type="text" className="dates form-control text-black px-4 py-2 mb-4 w-full" placeholder="Date & Time" onClick={onClick} value={value} readOnly ref={ref} />
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <span className="text-gray-700"><i className="lnr lnr-calendar-full"></i></span> 
      </div>
    </div>
));


CustomInput.displayName = 'CustomInput';

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="relative text-white mt-4 px-4 w-full" id="booking" style={sectionStyle}>
      <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
              <div className="banner-content lg:w-1/2 md:w-1/2 text-white">
                  <h6>Need a ride? Just call</h6>
                  <h1 className="text-3xl uppercase">
                      +xx xxx xxx xxxx
                  </h1>
                  <p className="pt-4 pb-4">
                      Whether you enjoy city breaks or extended holidays in the sun, you can always improve your travel experiences by staying in a small.
                  </p>
                  <button className="btn  bg-yellow-500 text-white px-2 py-2 mb-2 uppercase">Call for a Ride</button>
              </div>
              <div className="lg:w-1/3 md:w-1/2">
                  <h4 className="pb-6  text-white mt-4">Book Your Ride Online!</h4>
                  <form className="form">
                      <div className="mb-4">
                          <input className="form-control txt-field px-4 py-2 w-full" type="text" name="name" placeholder="Your name" />
                          <input className="form-control txt-field px-4 py-2 w-full mt-4" type="email" name="email" placeholder="Email address" />
                          <input className="form-control txt-field text-black px-4 py-2 w-full mt-4" type="tel" name="phone" placeholder="Phone number" />
                      </div>
                      <div className="mb-4">
                          <select className="block appearance-none w-full text-black bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                              <option>From Destination</option>
                              <option value="1">Destination One</option>
                              <option value="2">Destination Two</option>
                              <option value="3">Destination Three</option>
                          </select>
                      </div>
                      <div className="mb-4">
                          <select className="block appearance-none w-full text-black bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                              <option>To Destination</option>
                              <option value="1">Destination One</option>
                              <option value="2">Destination Two</option>
                              <option value="3">Destination Three</option>
                          </select>
                      </div>
                      <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          customInput={<CustomInput />}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15} 
                          timeCaption="Time"
                          dateFormat="MMMM d, yyyy h:mm aa"
                      />
                      <div className="form-group">
                          <button className="btn bg-yellow-500 text-white w-full py-2 mb-4 uppercase">Make reservation</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Booking;
