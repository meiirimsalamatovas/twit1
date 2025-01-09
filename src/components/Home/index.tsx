import React from "react";
import NewTweet from './NewTweet';
import TweetsList from './TweetsList';
import kzImg from '../../assets/images/kz.png';
import nfactorialImg from '../../assets/images/nfactorial.png';
import profilePhoto from '../../assets/images/profilePhoto.jpeg';

interface Tweet {
    id: string;
    authorName: string;
    authorUsername: string;
    img: string;
    content: string;
    replies: number;
    retweets: number;
    likes: number;
    topic: string;
}

interface HomeState {
    content: string;
    searchQuery: string; 
    tweets: Tweet[];
    filteredTweets: Tweet[];
}

class Home extends React.Component<{}, HomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            content: "",
            searchQuery: "",
            tweets: [
                {
                    id: "0",
                    authorName: "Free KZ today",
                    authorUsername: "@kz",
                    img: kzImg,
                    content: "UPDATE: Alibek says he has not considered becoming finance minister again",
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
                    topic: "politics",
                },
                {
                    id: "1",
                    authorName: "nFactorial",
                    authorUsername: "@nfactorial",
                    img: nfactorialImg,
                    content: "Data analytics course starts today!",
                    replies: 10000000,
                    retweets: 1000000,
                    likes: 500,
                    topic: "education",
                },
                {
                    id: "2",
                    authorName: "nFactorial",
                    authorUsername: "@nfactorial",
                    img: nfactorialImg,
                    content: "Black friday! Успей купить курсы сегодня!",
                    replies: 10000000,
                    retweets: 1000000,
                    likes: 500,
                    topic: "education",
                },
            ],
            filteredTweets: [],
        };
    }

    onChangeTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            content: e.target.value,
        });
    };

    addToTweets = () => {
        const newTweet: Tweet = {
            id: this.state.tweets.length.toString(),
            authorName: "Meiirim",
            authorUsername: "@salamat",
            img: profilePhoto,
            content: this.state.content,
            replies: 0,
            retweets: 0,
            likes: 0,
            topic: "blabla",
        };

        this.setState({
            tweets: [...this.state.tweets, newTweet],
            content: "",
        });
    };

    deleteTweet = (id: string) => {
        this.setState({
            tweets: this.state.tweets.filter((item) => item.id !== id),
        });
    };

    filterTweetsByTopic = (topic: string) => {
        const filteredTweets = this.state.tweets.filter(item => item.topic === topic);
        this.setState({
            filteredTweets,
        });
    };
    
    onSearchChange = (e: { target: { value: string; }; }) => {
        this.setState({
            searchQuery: e.target.value,
            filteredTweets: this.state.tweets.filter(tweet =>
                tweet.content.toLowerCase().includes(e.target.value.toLowerCase())
            ),
        });
    };
    
    

    render() {
        const { filteredTweets, content, tweets, searchQuery } = this.state;
        const tweetsToDisplay = filteredTweets.length > 0 ? filteredTweets : tweets;

        return (
            <div className="w-50 mt-3">
                <h5 >Home</h5>
                
        
                <NewTweet 
                content={content} 
                onChangeTextInput={this.onChangeTextInput} 
                onTweet={this.addToTweets} />
                
                <input
                    type="text"
                    placeholder="Search tweets"
                    value={searchQuery}
                    onChange={this.onSearchChange}
                    className="form-control my-3"
                />

                <div className="filter-buttons mt-3">
                    <button onClick={() => this.filterTweetsByTopic('politics')}>Politics</button>
                    <button onClick={() => this.filterTweetsByTopic('education')}>Education</button>
                    <button onClick={() => this.filterTweetsByTopic('blabla')}>Blabla</button>
                    <button onClick={() => this.setState({ filteredTweets: [] })}>All</button>
                </div>

     
                <TweetsList tweets={tweetsToDisplay} deleteTweet={this.deleteTweet} />
            </div>
        );
    }
}

export default Home;
