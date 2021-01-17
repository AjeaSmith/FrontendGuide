import { Empty, PageHeader } from "antd";
import logo from "./images/bar2.png";
import "./App.css";
function App() {
  return (
    <main className="App">
      <header>
        <PageHeader
          ghost={true}
          className="site-page-header"
          // title=""
          subTitle="YouTube Video Comments Analytics"
          avatar={{
            src: `${logo}`,
          }}
        />
      </header>
      <section className="wrapper">
        <div className="video_details">
          <Empty
            description="No video uploaded.."
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            imageStyle={{
              width: "200px",
              height: "120px",
              backgroundColor: "white",
            }}
          />
        </div>
        <div className="video_analytics"></div>
      </section>
    </main>
  );
}

export default App;
