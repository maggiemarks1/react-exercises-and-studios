export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://m.media-amazon.com/images/I/61Ufumdtf2L._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/81H1MhBbPbL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361666855i/5821978.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Hunger Games" />
         <img src={book2} alt="Divergent" />
         <img src={book3} alt="The Summer I turned Pretty" />
      </div>      
   );
}