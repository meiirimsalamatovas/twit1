import profilePhoto from '../../assets/images/profilePhoto.jpeg';


interface NewTweetProps {
    content: string;
    onChangeTextInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTweet: () => void;
}

export default function NewTweet({content, onChangeTextInput, onTweet}: NewTweetProps){
    return (
        <div className='p-3 d-flex flex-column' style={{borderBottom: '2px solid whitesmoke'}}>
            <div >
                <img src={profilePhoto} style={{width: 50, height: 50, borderRadius: 50}}/>
                <input onChange={onChangeTextInput} value={content} placeholder='Whats hapenning?' style={{border:'none', fontSize:18, outline: 'none'}} className='mx-3'/>
            </div>
            <button onClick={onTweet} style={{alignSelf:'flex-end',color:'white', backgroundColor: '#1D9BF0', borderRadius:20, height:40, width:75, border:'none'}}>Tweet</button>
        </div>
    )
}