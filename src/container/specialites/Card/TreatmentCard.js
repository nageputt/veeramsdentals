import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        <Button size="small" variant="contained" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </div>
  );
}