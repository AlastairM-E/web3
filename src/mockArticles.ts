function createArticle(title: string, content: string): { title:string; content: string; } {
  return { title, content };
}

const articles = [
  createArticle(
    'Title 1',
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam molestias quia dolore nobis? Non quibusdam reiciendis placeat deserunt asperiores, 
            recusandae sequi sed iusto minus ratione debitis nam quae repellendus beatae.`,
  ),
  createArticle(
    'Title 2',
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Minima doloremque molestias asperiores ipsum quo, pariatur facere ex non mollitia rerum quia iure aspernatur quam enim quos. 
        Facilis consequatur modi nam.`,
  ),
  createArticle(
    'Title 3',
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ea laborum a accusamus facilis minima magni eligendi, nostrum nam quos ad ratione neque quod ducimus molestiae, 
        doloribus quae natus recusandae itaque!`,
  ),
];

export {
  articles,
};

// const [monetization, setMonetization] = useState();
// const [amount, setAmount] = useState(0);
// useEffect(() => {
//   function progressEventHandler(event) {
//     setMonetization(event);
//     setAmount(
//        amount + (monetization.detail.amount / 10 ** (monetization.detail.assetScale + 1))
//      );
//   }

//   document
//     .monetization
//     .addEventListener('monetizationprogress', progressEventHandler);

//   return () => {
//     document.monetization.removeEventListener('monetizationprogress', progressEventHandler);
//   };
// });
/* RENDER */
