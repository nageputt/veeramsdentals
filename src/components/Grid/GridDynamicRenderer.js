import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TreatmentCard from '../Card/TreatmentCard';
import ProfileCard from '../Card/ProfileCard';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    padding: 20
  },
}));

export default function GridDynamicRenderer(props) {
  const classes = useStyles();
  let renderCard = null;
  if(props.isSpecialites){
    renderCard =  props.gridDetails.map( (objectValue, index) => (
               <Grid key={index} item xs={12} sm={6} md ={4} lg={4}>
               <TreatmentCard 
                    imageUrl={objectValue.imageUrl} 
                    name={objectValue.name}
                    description={objectValue.description}
                    id={index}/>
                </Grid>        
                ));
  } else {
    renderCard =  props.teamDetails.map( (objectValue, index) => (
               <Grid key={index} item xs={12} sm={6} md ={4} lg={4}>
               <ProfileCard
                    profileName = {objectValue.profileName}
                    designation = {objectValue.designation}
                    imageUrl = {objectValue.imageUrl}
                    />
                </Grid>        
                ));
  }
  return (
      <div className={classes.root}>
       <Grid container spacing={5}>
          {renderCard}
        </Grid>
      </div>  
  );
}
