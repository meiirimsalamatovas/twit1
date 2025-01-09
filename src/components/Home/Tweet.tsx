import { COMMENTS, LIKES, RETWEETS, SHARE } from '../../assets/icons.tsx';
import React from 'react';


interface TweetProps {
  img: string;
  authorName: string;
  authorUsername: string;
  content: string;
  retweets: number;
  replies: number;
  likes: number;
}

const Tweet: React.FC<TweetProps> = ({ img, authorName, authorUsername, content, retweets, replies, likes }) => {
  return (
    <div className="mt-3 mx-3">
      <p className="mx-5" style={{ fontSize: 13, fontWeight: '600' }}>
        You might like! <span>See more</span>
      </p>
      <div className="d-flex">
        <img src={img} style={{ width: 50, height: 50, borderRadius: 50 }} alt="author" />
        <div className="mx-3">
          <p>
            {authorName} <span>{authorUsername}</span>
          </p>
          <p>{content}</p>
        </div>
      </div>
      <div className="d-flex m-auto justify-content-between" style={{ width: '80%' }}>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{COMMENTS}</div>
          <p className="px-1">{replies}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{RETWEETS}</div>
          <p className="px-1">{retweets}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{LIKES}</div>
          <p className="px-1">{likes}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{SHARE}</div>
          <p className="px-1">{replies}</p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
