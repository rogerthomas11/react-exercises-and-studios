export default function BookList() {
   let pageTitle = "Some Great Books";
   let book1 = "https://i.thriftbooks.com/api/imagehandler/l/D0A1B8C00BBE8E205A957155795383C3817B5128.jpeg";
   let book2 = "https://images.bwbcovers.com/067/The-Death-and-Life-of-Great-American-Cities-9780679741954.jpg";
   let book3 = "https://i.thriftbooks.com/api/imagehandler/l/3634D27F68D3C35CED5093CC9B60AD8FBA183309.jpeg";
   
   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Photo of the cover of the book 'Field Guide to Urban Gardening' by Kevin Espiritu" />
         <img src={book2} alt="Photo of the cover of the book 'The Death and Life of Great American Cities' by Jane Jacobs" />
         <img src={book3} alt="Photo of the cover of the book 'Can I Say' by Travis Barker with Gavin Edwards" />
      </div>      
   );
}