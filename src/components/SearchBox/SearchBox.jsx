import React from 'react'
import { useId } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/slice"; 

import s from "./SearchBox.module.css"

const SearchBox = () => {
  
   const filterId = useId();
  const dispath = useDispatch();

  const onFilter = (filter) => {
    dispath(setFilter(filter));
  };

  return (
    <div className={s.form}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        name="filter"
        id={filterId}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};


export default SearchBox