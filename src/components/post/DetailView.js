import { Box , makeStyles, Typography } from '@material-ui/core';
import { Edit , Delete } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
    container: {
        padding:'0 100px',
        [theme.breakpoints.down('md')] : {
            padding: 0
        }

    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit:'cover'
    },
    icons : {
        float:'right'
    },
    icon:  {
        margin : 5,
        border:'1px solid #878787',
        padding: 5,
        borderRadius: 10
    },
    heading: {
        fontSize : 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 50px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }
}))

const DetailView = () => {
    const classes = useStyle();
    const url = 'https://addicted2success.com/wp-content/uploads/2022/01/The-Art-of-Winning-How-to-Live-All-Possibilities-of-Life.jpg';
    return (
       <Box className={classes.container}>
           <img src={url} alt="banner" className={classes.image} />
           <Box className={classes.icons}>
               <Link to='/update'><Edit className={classes.icon} color="primary"/></Link>
               <Delete className={classes.icon}/>
           </Box>
           <Typography className={classes.heading}> The Art of Winning – Living All Possibilities in Life </Typography>

            <Box className={classes.subheading}>
                <Typography>Author : <span style={{fontWeight: 600}}>  SEHGALNOTES </span></Typography>
                <Typography style={{marginLeft: 'auto'}}> 3 January 2022 </Typography>

            </Box>

            <Typography> “Winning” – the word has a multitude of meanings. 

To some, it may mean to be at the top in every sense, ahead of everyone; and to some, it may mean chasing perfection.  

But what happens when you reach the “pinnacle” of Success? 

How do you stay a winner when you’re already at the top, and there’s nowhere else to go? How do you maintain that winning streak that syncs your flow through life? And most importantly how do you reap the possibilities created through ‘The Winning’?

“You and your organization, are most vulnerable when you are most successful.” – Robin Sharma, The Greatness Guide 

A real win is when you truly feel happy from within, and not vulnerable – Which can only happen when you can ‘Stop Worrying and Start Living.’

The art of winning lies in knowing how to build yourself to a level where you are capable of giving what you have gained to others. This translates to using the knowledge, experience, skills, or wealth you’ve gained to create better opportunities for others. 

You may question the need to create better opportunities for others. 

After all, when the win is yours, the opportunities should also be for you! 

So Why Give your gains to others?

Two friends were playing in a garden. One of them told the other about his collection of marbles. The other responded by telling the first about some homemade sweets in his possession.

The marble owner immediately suggested to the sweet owner that there be an exchange – marbles for sweets. The sweet owner agreed. 

The sweet owner went and packed all the sweets he had in a box and returned. Meanwhile, the marble owner kept some of the beautiful and bigger marbles at home and brought the remaining marbles for his friend. 

Both the friends exchanged their possessions and went back home.

However, that night, the sweet owner, who lost his sweets to win marbles slept peacefully. But the marble owner, who had the homemade sweets, as well as the beautiful and bigger marbles still in his possession, kept thinking about the exchange. 

He was wondering whether his friend had hidden some sweets like him. The whole night he kept thinking about it and lost sleep. 

To me, the winner in this situation, and others is the one who got a good night’s sleep with a clear conscience. Moreover, sleep is what keeps us charged and helps us win more battles in life. 

And if that statement sounds naïve and vague, then maybe these pointers will help illuminate the ‘Art of Winning’ further:

The Power of Thought 

You master the art of winning when you realize the power of your thoughts. It is however very difficult to manage thoughts, as they happen at the subtler level, therefore mind management becomes even more crucial. A mind is an amazing machine that can transform itself into any form per its dominant thought process.

Take for example how you embark on a new job search. First, you realize you do not like what you’re currently doing, followed almost immediately by the consideration that you could be doing something you like better instead. Continuing along these lines, you become convinced that you do need to find a new job, and then you begin an active search. 

Thoughts are powerful. Through regular meditation, you gradually learn to identify the relationship between thoughts and behavior. It helps in harnessing the power of your thoughts and allows you to grow into a better version of yourself. 

Living in Harmony 

There is an inexplicable thrill to winning, but it also brings along the fear of losing, and the result is your mind losing the peace. 

If you only think of winning in terms of defeating others, you may never be able to create harmony around you. But when you look at winning as a way to share your abundance, you can create an environment of harmony around. 

Think like a king, when you define “winning.” In ancient Hindu scriptures, kings were defined as compassionate and exalted. They were conceived as being above the competition, and thus beyond nominal ideas of winning. 

When you are beyond competition, there is no conflict. There is harmony around. 

So being compassionate and living in harmony is the second step towards learning the art of winning. 

Finding Your Rhythm

Apart from being compassionate, the other most important rule of harmony is finding your rhythm, which could easily translate to being confident in yourself. 

When you are a lover of wisdom, you automatically generate a feeling of confidence, strength, and awareness. 

Learning the art of winning is like American New Thought leader and teacher Christian D. Larson says:

“To give so much time to improving yourself that you have no time to criticize others.” 

Being Before the Happening

A real victory cannot be savored unless you’ve consumed the bitter taste of defeat. And this can only happen when you are centered. 

You may feel overjoyed after winning a tournament or getting a big project, but that kind of joy may be short-lived if you lose focus. There is a singular kind of joy in being involved in events and activities and another kind of joy in solitary repose. 

If you can comprehend the space of being where both yes and no can simultaneously be right, you are privy to a whole new dimension of infinite possibilities.

The true art of winning is when you are awake and aware of this truth. 

Summarizing It:

The art of winning is a very personal thing. For some, it’s about the pursuit of happiness and finding joy in every moment; for others, success means following their passions to create something that has never been done before. There are as many ways to win in life, as people are living on this planet—but what we can all agree on is that when you find your rhythm and learn how-to live-in harmony with yourself, you will have won against any odds. </Typography>
       
       </Box>
    )
}


export default DetailView;