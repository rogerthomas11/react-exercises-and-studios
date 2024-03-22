import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setBoardName] = useState("no boards yet!"); 
   const boards = [
      {
         id: 1,
         label: "Vegetarian",
         name: "Vegetarian"
      },
      {
         id: 2,
         label: "Lunch",
         name: "Lunch"
      },
      {
         id: 3,
         label: "Dinner",
         name: "Dinner"
      }

   ];

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board, id) => {
            return (
               <option key={id} value={board.name}>{board.label}</option>
            );
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
