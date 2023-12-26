import { useEffect, useState } from "react";
import comments from "../data/comments";
import Comment from "./comment";

export default function CommentList() {
  const [list, setlist] = useState(comments.slice(0, 3));
  const [showMore, setShowMore] = useState(true);
  useEffect(() => {
    setlist(showMore ? comments.slice(0, 3) : comments);
  }, [showMore]);
  return (
    <section className="mt-10 w-full md:w-4/5 mx-auto">
      <h3 className="text-left text-3xl mb-3">comments</h3>
      {list.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <div></div>
      <button
        aria-label="commentList-btn"
        onClick={() => setShowMore((oldState) => !oldState)}
      >
        {showMore ? "Show More Comments" : "Show Less Comments"}
      </button>
    </section>
  );
}
