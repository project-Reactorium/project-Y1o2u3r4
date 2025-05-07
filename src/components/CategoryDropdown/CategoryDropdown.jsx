import React from "react";

import { categoriesFilter } from "../../data/categories";
import styles from "./CategoryDropdown.module.css";
const CategoryDropdown = ({ selected, onChange }) => {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className={styles.dropdown}
    >
      <option value="">Select category</option>
      {categoriesFilter.map((cat, idx) => (
        <option key={idx} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
