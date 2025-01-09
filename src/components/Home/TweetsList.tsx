
import Tweet from './Tweet';

interface Tweet {
    id: string;
    content: string;
    img: string;
    authorName: string;
    authorUsername: string;
    minutes?: number;
    replies: number;
    retweets: number;
    likes: number;
}

interface TweetsListProps {
    tweets: Tweet[];
    deleteTweet: (id: string) => void;
}

export default function TweetsList({ tweets, deleteTweet }: TweetsListProps) {
    return tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet} />
    ));
}