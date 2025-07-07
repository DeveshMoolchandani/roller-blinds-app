import React, { useState } from 'react';
import axios from 'axios';

const endpoint = "/api/submit";





export default function RollerBlindsForm() {
  const [formData, setFormData] = useState({
    timestamp: new Date().toISOString(),
    customer: '',
    address: '',
    phone: '',
    email: '',
    room: '',
    widthTop: '',
    widthMiddle: '',
    widthBottom: '',
    heightLeft: '',
    heightMiddle: '',
    heightRight: '',
    controlSide: '',
    rollType: '',
    motorised: 'No',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(endpoint, formData);
      alert("Form submitted successfully!");
    } catch (err) {
      alert("Error submitting form");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <input name="customer" placeholder="Customer Name" onChange={handleChange} /><br />
      <input name="address" placeholder="Address" onChange={handleChange} /><br />
      <input name="phone" placeholder="Phone" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="room" placeholder="Room" onChange={handleChange} /><br />

      <input name="widthTop" placeholder="Width Top" onChange={handleChange} /><br />
      <input name="widthMiddle" placeholder="Width Middle" onChange={handleChange} /><br />
      <input name="widthBottom" placeholder="Width Bottom" onChange={handleChange} /><br />
      <input name="heightLeft" placeholder="Height Left" onChange={handleChange} /><br />
      <input name="heightMiddle" placeholder="Height Middle" onChange={handleChange} /><br />
      <input name="heightRight" placeholder="Height Right" onChange={handleChange} /><br />

      <select name="controlSide" onChange={handleChange}>
        <option value="">Control Side</option>
        <option value="Left">Left</option>
        <option value="Right">Right</option>
      </select><br />

      <select name="rollType" onChange={handleChange}>
        <option value="">Roll Type</option>
        <option value="Standard">Standard</option>
        <option value="Reverse">Reverse</option>
      </select><br />

      <select name="motorised" onChange={handleChange}>
        <option value="No">Motorised: No</option>
        <option value="Yes">Motorised: Yes</option>
      </select><br />

      <input type="file" accept="image/*" onChange={handlePhoto} /><br />

      <button type="submit">Submit</button>
    </form>
  );
}
