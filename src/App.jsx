import "./App.css";
import Card from "./components/Card";
import ColotnImg from "../images/image-colton.jpg";
import IreneRobertsImg from "../images/image-irene.jpg";
import AnneWallaceImg from "../images/image-anne.jpg";
import Ratings from "./components/Ratings";
const cardsData = [
  {
    imgSrc: ColotnImg,
    title: "Colton Smith Verified Buyer",
    description: `We needed the same printed design as the
                  one we had ordered a week prior. Not only did they find the original
                  order, but we also received it in time. Excellent!`,
  },
  {
    imgSrc: IreneRobertsImg,
    title: "Irene Roberts Verified Buyer",
    description: `Customer service is always excellent and
                  very quick turnaround. Completely delighted with the simplicity of the
                  purchase and the speed of delivery.`,
  },
  {
    imgSrc: AnneWallaceImg,
    title: "Anne Wallace Verified Buyer",
    description: `Put an order with this company and can only praise them for the very high
                  standard. Will definitely use them again and recommend them to
                  everyone!`,
  },
];

const ratingsData = [
  {
    stars: 5,
    text: " Rated 5 Stars in Reviews",
  },
  {
    stars: 5,
    text: " Rated 5 Stars in Report Guru",
  },
  {
    stars: 5,
    text: " Rated 5 Stars in BestTech",
  },
];

function App() {
  return (
    <>
      <main className="wrapper">
        <div className="wrapper__first-row">
          <div className="title">
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <Ratings ratingsData={ratingsData} />
        </div>
        <div className="wrapper__second-row">
          {cardsData.map((item, index) => (
            <Card
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
