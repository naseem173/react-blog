import "./post.css";


export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1500043357865-c6b8827edf10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
}
