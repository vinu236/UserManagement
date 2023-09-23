import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  console.log(value);
  console.log("helloooooooooooooooo")
  useEffect(
    function () {
      console.log("called")
      alert("ff")
      localStorage.setItem(key, JSON.stringify(value));
      alert("yess")
    },
    [value, key]
  );
    console.log("vaigaaaaa")
  return [value, setValue];
}
