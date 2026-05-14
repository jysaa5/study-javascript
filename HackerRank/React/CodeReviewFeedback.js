import React, { useState } from "react";

const INITIAL_ASPECTS = [
  { name: "Readability", upvote: 0, downvote: 0 },
  { name: "Performance", upvote: 0, downvote: 0 },
  { name: "Security", upvote: 0, downvote: 0 },
  { name: "Documentation", upvote: 0, downvote: 0 },
  { name: "Testing", upvote: 0, downvote: 0 },
];
const FeedbackSystem = () => {
  const [aspects, setAspects] = useState(INITIAL_ASPECTS);

  const handleVote = (name, type) => {
    setAspects((prev) => prev.map((aspect) => (aspect.name === name ? { ...aspect, [type]: aspect[type] + 1 } : aspect)));
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {aspects.map((aspect, id) => (
          <div className="pa-10 w-300 card" key={id}>
            <h2>{aspect.name}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button className="py-10 px-15" data-testid={`upvote-btn-${id}`} onClick={() => handleVote(aspect.name, "upvote")}>
                👍 Upvote
              </button>
              <button className="py-10 px-15 danger" data-testid={`downvote-btn-${id}`} onClick={() => handleVote(aspect.name, "downvote")}>
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${id}`}>
              Upvotes: <strong>{aspect.upvote}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${id}`}>
              Downvotes: <strong>{aspect.downvote}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
