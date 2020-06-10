import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { LocationOn} from '@material-ui/icons';
import ResponseForm from '../../components/contactus/ResponseForm';
import MapContainer  from '../../components/map/MapContainer';
import './Contactus.css';

class Contactus extends React.Component {
  render() {
   return(
     <div className="header-div">
      <div className = 'image-div'>
            <img width="100%" className = 'contactbanner'
              src="get-in-touch-banner.jpg"
            />
          </div>
       <Container component="main" maxWidth="s">
       <Grid container spacing={2}>
            <Grid item xs={12} sm={1}>
            </Grid>
            <Grid item xs={12} sm={7}>
            <div class="sec2innercont">
						<div class="sec2addr">
							<p>45 BC, a Latin professor at Hampden-Sydney College in Virginia</p>
							<p><span class="collig">Phone :</span> +91 976885083</p>
							<p><span class="collig">Email :</span> vivek.mengu016@gmail.com</p>
							<p><span class="collig">Fax :</span> +91 9768850839</p>
					   	</div>
					     </div>
               <MapContainer/>
            </Grid>
            <Grid item xs={12} sm={4}>
            <ResponseForm/>
            </Grid>
            </Grid>
       </Container>
       
        
      </div>
   );
  }
  
  
  }
  
  export default Contactus;