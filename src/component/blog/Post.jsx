import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Container>
        <Row className="mb-3">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </Row>
        <Row>
            <h1>Comments...({comment.length})</h1>
            {comment.map((val,idx)=>{
                return (
                    <Col key={idx} className="col-12 mb-4">
                        <div className="p-3 post-bg rounded-3">
                            <h4>Name : {val.name}</h4>
                            <p>Email : {val.email}</p>
                            <p>Comment : {val.body}</p>
                        </div>
                    </Col>
                )
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Post;
