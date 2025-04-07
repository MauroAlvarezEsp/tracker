'use client';

import { BulbOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) 
      document.documentElement.classList.add("dark");
    else
      document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <BulbOutlined onClick={() => setDarkMode(!darkMode)}/>
  );
}
