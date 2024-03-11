import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h3 className = {classes.choresHeading}>Today's Chores</h3>
         <ul>
            <li className = {classes.choresText}>Take out the trash</li>
            <li className = {classes.choresText}>Do the dishes</li>
            <li className = {classes.choresText}>Empty the litter box</li>
         </ul>
      </div>

   );
}