import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledRounded from '@material-ui/icons/PlayCircleFilledRounded';
import { green } from '@material-ui/core/colors';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles({
  root: {
    boxShadow: `0 2px 1px rgba(0,0,0,0.09), 
              0 4px 2px rgba(0,0,0,0.09), 
              0 8px 4px rgba(0,0,0,0.09), 
              0 16px 8px rgba(0,0,0,0.09),
              0 32px 16px rgba(0,0,0,0.09)`          
  },
  media: {
    height: 200,
  },
});



export default function TreatmentCard(props) {
  const classes = useStyles();
  const imageUrl = props.imageUrl;
  const treatmentName = props.name; 
  const treatmentDescription = props.description;  
  let [isOpen,setOpen] = useState(false);
  let [videoId,setVideoId] = useState();
  let [severity,setSeverity] = useState('error');
  let [content,setContent] = useState('');
  let [show,setShowToaster] = useState(false);
  const errorMap = {
      500 : {
            severity : 'error',
            content : 'Server Error occured'
      },
      404 : {
        severity : 'error',
        content : 'Video not found'
      }
  }
  
  const getVideoId = async (cardId) =>{
       axios.get("https://react-burger-b72df.firebaseio.com/treatments.json",{
      }).then(response =>{
        setVideoId(response['data'][cardId]["videourl"]);
        setOpen(true);
        
      }).catch(error => {
        setSeverity("error");
          setContent("Video not found");
           setShowToaster(true);
      });
    
    // try{
    //   const response = await axios.get("specialites/getVideoUrl",{
    //     params: {
    //       cardId: cardId
    //     }
    //     });
    //       setOpen(true);
    //       setVideoId(response.data[0]['videoId']);
    //   }catch(error){
    //       severity = errorMap[error.response.status]['severity'];
    //       content = errorMap[error.response.status]['content'];
    //       setSeverity(severity);
    //       setContent(content);
    //       setShowToaster(true);
    //     };
        
      
  };

  return (
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={treatmentName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {treatmentName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {treatmentDescription}
           </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="play" onClick={getVideoId.bind(this,props.id)}>
          <PlayCircleFilledRounded  style={{ color: green[500],fontSize:40 }} />
        </IconButton>
      </CardActions>
    </Card>
    <ModalVideo channel='youtube' isOpen={isOpen}  videoId={videoId} onClose={setOpen.bind(this,false)}/>
    <Snackbar anchorOrigin={{vertical: 'bottom',horizontal: 'left',}} open={show}  autoHideDuration={6000} onClose={setShowToaster.bind(false)}>
            <Alert  severity={severity}>{content}</Alert>
        </Snackbar>
  </div>
  );
}