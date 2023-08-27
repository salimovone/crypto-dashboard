import React from "react";
import { Chrono } from "react-chrono";

class EducationTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }

  render() {
    const items = [
      {
        title: "16 Jan",
        cardTitle: "Title 01",
        cardDetailedText:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
      },
      {
        title: "28 Feb",
        cardTitle: "Title 02",
        cardDetailedText:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
      },
      {
        title: "20 Mar",
        cardTitle: "Title 03",
        cardDetailedText:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
      },
      {
        title: "20 May",
        cardTitle: "Title 04",
        cardDetailedText:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
      },
      {
        title: "9 Jul",
        cardTitle: "Title 05",
        cardDetailedText:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
      },
      {
        title: "30 Aug",
        cardTitle: "Title 06",
        cardDetailedText:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
      },
      {
        title: "15 Sept",
        cardTitle: "Title 07",
        cardDetailedText:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
      },
      {
        title: "01 Nov",
        cardTitle: "Title 07",
        cardDetailedText:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.",
      },
    ];

    return (
      <div className="transaction_card p-5 mt-5">
        <div style={{ width: "100%", height: "400px" }}>
          <Chrono
            items={items}
            mode={this.state.matches ? "HORIZONTAL" : "VERTICAL"}
            slideShow={false}
            itemWidth={"250"}
            hideControls={true}
            cardHeight={100}
            borderLessCards={true}
            theme={{
              primary: "#621AFF",
              secondary: "#fff",
              cardBgColor: "#f7f8fa",
              cardForeColor: "#010606",
              titleColor: "#fff",
            }}
          ></Chrono>
        </div>
      </div>
    );
  }
}

export default EducationTimeline;
