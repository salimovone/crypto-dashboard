import React from "react";
import StikyNoteComponent from "../../../components/StikyNoteComponent";
import Navbar from "../../../components/Navbar";
import { useState } from "react";

const StickyNotes = () => {
  const colors = ["#CEE8D3", "#F0EED5", "#EABBC7", "#E4E3FC", "#E2DAFC"];
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState("");

  const addNote = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    setNotes([
      ...notes,
      {
        id: Date.now(),
        bgColor: color,
      },
    ]);

    // console.log(color);
  };
  const removeNote = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-xl font-bold text-left text-[var(--main-color)]">
          Sticky Notes
        </h1>
        <div className="p-5 transaction_card mt-5">
          <div className="flex justify-between items-center">
            <h1 className="text-base font-bold text-left">Sticky Note</h1>
            <div className="">
              <button
                onClick={() => {
                  addNote();
                }}
                className="rounded-lg bg-[var(--primary-color)] text-white transition-all py-[6px] px-4 
              hover:bg-[var(--light-red-color)] "
              >
                Add new note
              </button>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {notes.map((item) => {
              console.log(item.bgColor, "regbery");
              return (
                <StikyNoteComponent
                  key={item.id}
                  color={item.bgColor}
                  onClose={() => {
                    removeNote(item.id);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNotes;
