import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Empty, PageHeader, Form, Input, Progress, Card } from "antd";
import logo from "./images/bar2.png";
import "./App.css";
function App() {
  const {
    searchText,
    onChange,
    getVideoComments,
    error,
    errorMessage,
    videoIdStr,
    positiveNumbers,
    negativeNumbers,
    seeResults,
  } = useContext(AppContext);
  console.log(positiveNumbers, negativeNumbers);
  return (
    <main className="App">
      <header>
        <PageHeader
          ghost={true}
          className="site-page-header"
          subTitle="YouTube Video Comments Analytics"
          avatar={{
            src: `${logo}`,
          }}
        />
      </header>
      <br />
      <section className="wrapper">
        <div className="video_details">
          {videoIdStr ? (
            <iframe
              width="350px"
              height="220px"
              src={`https://www.youtube.com/embed/${videoIdStr}`}></iframe>
          ) : (
            <Empty
              description="No video uploaded.."
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              imageStyle={{
                width: "350px",
                height: "220px",
                backgroundColor: "white",
              }}
            />
            )}
          <br />
          <br/>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              link: "",
            }}>
            <Form.Item
              label="Video Link"
              name="link"
              rules={[
                {
                  required: true,
                  message: "Please enter a url",
                },
              ]}>
              <Input.Search
                type="url"
                placeholder="Enter a YouTube video url..."
                style={{ width: "500px" }}
                value={searchText}
                onChange={(e) => onChange(e.target.value)}
                onSearch={getVideoComments}
              />
            </Form.Item>
            {error && (
              <p style={{ color: "red", fontStyle: "italic" }}>
                {errorMessage}
              </p>
            )}
          </Form>
        </div>
        {seeResults ? (
          <div className="video_analytics">
            <br />
            <h2>Results: </h2>
            <div className="keywords">
              <p>
                <b style={{ color: "#2f54eb" }}>Positive Keywords:</b> Great,
                Thanks, Thank you, Enjoyed it, Helpful
              </p>
              <p>
                <b style={{ color: "#f5222d" }}>Negative Keywords:</b> dislike,
                thumbs down, did not help, not useful, not helpful
              </p>
            </div>
            <Card
              style={{
                width: 400,
                border: "2px solid #eee",
                marginBottom: "10px",
              }}
              hoverable={true}>
              <div className="progress_wrapper">
                <Progress
                  type="dashboard"
                  percent={`${
                    positiveNumbers.length ? positiveNumbers.length + 0 : 0
                  }`}
                  strokeColor="#2f54eb"
                  trailColor="#adc6ff"
                />
                <Progress
                  type="dashboard"
                  percent={`${
                    negativeNumbers.length ? negativeNumbers.length + 0 : 0
                  }`}
                  strokeColor="#f5222d"
                  trailColor="#ffccc7"
                />
              </div>
            </Card>
            {positiveNumbers.length > negativeNumbers.length ? (
              <h3>Majority of the comments are positive for this video</h3>
            ) : (
              <h3>
                Majority of the comments seem to be negative for this video
              </h3>
            )}
            <br />
            <br />
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default App;
