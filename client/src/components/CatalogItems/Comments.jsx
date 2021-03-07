import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Moment from 'react-moment';

const Comments = (props) => {
  const {id, type} = props;
  const [comments, setComments] = useState();
  const [message, setMessage] = useState("");

  useEffect(async () => {
    loadComments();
  },[])

  const loadComments = async () => {
    await axios.get(`/api/catalog/comments/${type}/${id}`).then(res => {
      console.log("Comments", res.data.reverse());
      setComments(res.data);
    }, (error) => { console.log("Error", error) });
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.length) {
      const msg = message;
      await axios.post(`/api/catalog/comments/${type}/${id}`, {message:msg})
      .then(res => {
        setMessage("");
        loadComments();
      }, (error) => { console.log("Error", error) });

    } 
  }

  return (
    <>
      <div className="comments" >
        <div className="item">
          <img className="avatar" src="https://lh3.googleusercontent.com/a-/AOh14GhM5eNTab42P72Otaj46AR8epYVUdh-AHHDYIE3o3Y=s96-c" />
          <div className="ps-3 w-100">
            <form>
              <div className="form-floating">
                <textarea onChange={handleChange} name="message" className="form-control" placeholder="Leave a comment here" value={message} ></textarea>
                <label>Comments</label>
              </div>
              <div className="col-auto">
                <button onClick={handleSubmit} type="submit" className={message.length? "btn btn-danger mt-2" : "btn btn-danger mt-2 disabled"}>
                  Leave a comment <i className="bi bi-chat-quote-fill ms-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        {comments
          ?(
            comments.length
            ? (
            comments.map((data, index) => (
              <div className="item" key={index} >
                <div className="ps-3 w-100">
                  <p>{data.message}</p>
                  <div className="user">
                    <img src={data.user[0].avatar} />
                    <p>
                      {data.user[0].name} &nbsp;|&nbsp; <Moment fromNow date={new Date(data.createdAt)} />
                    </p>
                  </div>
                </div>
              </div>
            ))
            ) : (
              <div className="item">
                No comments found.
              </div> 
            )
          ) : (
            <div className="item">
              Loading comments...
            </div>
          )
        }
      </div>
    </>
  );
}

export default Comments;