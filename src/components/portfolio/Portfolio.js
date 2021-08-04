import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      // case "featured":
      //   setData(featuredPortfolio);
      //   break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "prochainement":
        setData(contentPortfolio);
        break;

      default:
        setData(webPortfolio);
    }
  }, [selected]);

  const list = [
    // {
    //   id: "featured",
    //   title: "Featured",
    // },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "prochainement",
      title: "Prochainement",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={item.id === selected}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
