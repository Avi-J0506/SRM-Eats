import React from 'react';
import Select from 'react-select';

function Dropdown(props) {
  const data = [
    {
      value: "Nelson Mandela",
      label: "Nelson Mandela"
    },
    {
      value: "Sannasi",
      label: "Sannasi"
    },
    {
      value: "M Block",
      label: "M Block"
    },
    {
      value: "Kalpana Chawla",
      label: "Kalpana Chawla"
    },
    {
      value: "Adhiyaman",
      label: "Adhiyaman"
    },
    {
      value: "Meenakshi",
      label: "Meenakshi"
    }
  ];
 
  // set value for default selection

  return (
    <div className="dropdown2 relative inline-block text-left w-full">
      <Select
        placeholder="Enter delivery location"
        value={data.find(obj => obj.value === props.selectedValue)} // set selected value
        options={data} // set list of the data
        onChange={props.handleChange} // assign onChange function
      />
    </div>
  );
}
 
export default Dropdown;