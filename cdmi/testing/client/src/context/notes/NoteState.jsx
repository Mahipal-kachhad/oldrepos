import { createContext } from "react";

const NoteContex = createContext();

const NoteState = (props) => {
  const state = {
    "name":"mahipal",
    "class":"10a"
  };

  return (
    <NoteContex.Provider value={state}>
        {props.children}
    </NoteContex.Provider>
  );
};

export default NoteState;
