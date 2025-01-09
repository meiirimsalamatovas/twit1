import kzImg from '../../assets/images/kz.png';
import nfactorialImg from '../../assets/images/nfactorial.png';
import Tweet from './Tweet';

export default function TweetsList() {
  const tweet = [
    {
      authorName: 'Free KZ today',
      authorUsername: '@kz',
      img: kzImg,
      content: 'UPDATE...',
      retweets: 1000,
      replies: 200,
      likes: 300,
    },
    {
      authorName: 'NFactorial',
      authorUsername: '@kz',
      img: nfactorialImg,
      content: 'UPDATE...',
      retweets: 2000,
      replies: 300,
      likes: 6600,
    },
    {
      authorName: 'NFactorial',
      authorUsername: '@kz',
      img: nfactorialImg,
      content: 'Успей купить курсы',
      retweets: 2000,
      replies: 300,
      likes: 6600,
    },
  ];

  return tweet.map((item, index) => <Tweet {...item} key={index} />);
}
