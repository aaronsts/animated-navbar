import banner from "../assets/banner-image.jpg";

// React
import { useState } from "react";

// Components
import Card from "../components/Card";

// Assets
import hand1 from "../assets/hand-1.jpg";
import hand2 from "../assets/hand-2.jpg";

const Home = (props) => {
  const [cardContent, setCardContent] = useState([
    {
      title: "First title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisltellus, rutrum et hendrerit nec, ullamcorper sed dolor. Morbi a convallis neque. Integer tincidunt urna non egestas vehicula. S hendrerit blandit enim, eu consectetur nulla finibus sit amet. Nunc venenatis arcu eget viverra pretium. Donec sollicitudin ultricie mollis. Duis fermentum pulvinar nunc vel tincidunt.",
      image: hand1,
    },
    {
      title: "Second title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisltellus, rutrum et hendrerit nec, ullamcorper sed dolor. Morbi a convallis neque. Integer tincidunt urna non egestas vehicula. S hendrerit blandit enim, eu consectetur nulla finibus sit amet. Nunc venenatis arcu eget viverra pretium. Donec sollicitudin ultricie mollis. Duis fermentum pulvinar nunc vel tincidunt.",
      image: hand2,
    },
  ]);
  return (
    <div className="home-container" id="home">
      <div className="banner">
        <img src={banner} alt="abstract image" id="banner-image" />
      </div>
      <div class="content">
        {cardContent.map((content, index) => {
          return <Card content={content} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
