import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Container className="mt-5">
        <Row>
          {data.map((val, idx) => {
            return (
              <Col className="col-12 col-md-6 col-lg-4 mb-4" key={idx}>
                <div className="mb-4 rounded-4 overflow-hidden h-100 post-bg">
                  <div>
                    <img className="w-100" src={require("../../images/blog/post-image.webp")} />
                  </div>
                    <div className="p-3">
                        <h1 className="fs-4"><span>{val.id}</span> {val.title} </h1>
                        <p className="fs-6">{val.body} <Link to={`/post/${val.id}`} className="text-primary">View More..</Link></p>
                    </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default PostList;
