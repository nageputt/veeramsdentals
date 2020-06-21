import React, { Component } from 'react';
import GridDynamicRenderer from '../../components/Grid/GridDynamicRenderer';

class Specialites extends Component {
    state = {
      cardDetails: [
          { 'imageUrl'    : 'https://c7.alamy.com/comp/W7HF4E/periodontics-word-cloud-concept-W7HF4E.jpg', 
            'name'        : 'PERIODONTICS', 
            'description' : 'A periodontist is a dentist who specializes in the prevention, diagnosis, and treatment of periodontal disease, and in the placement of dental implants. Periodontists are also experts in the treatment of oral inflammation. Periodontists receive extensive training in these areas, including three additional years of education beyond dental school.'
          },
          { 'imageUrl'    : 'https://www.endoatl.com/files/2019/03/New.Logo-Long.jpg', 
            'name'        : 'ENDODONTICS', 
            'description' : 'Endodontics is a branch of dentistry that deals with dental pulp tissue in the tooth roots and tissues surrounding them. the disinfection of infected pulp tissue in the tooth roots (Root Canals). Root Canal Treatment or Endodontic treatment primarily focuses on the disinfection of the root canals and safeguarding the natural tooth.'
          },
          { 'imageUrl'    : 'https://image.shutterstock.com/image-vector/vector-illustration-sketch-orthodontic-treatment-600w-267611429.jpg', 
            'name'        : 'ORTHODONTICS', 
            'description' : 'Orthodontics and Dentofacial Orthopedics, as the specialty is called, is the branch of dentistry that specializes in the diagnosis, prevention and treatment of dental and facial irregularities. The technical term for these problems is malocclusion, which means bad bite for the man kind to the person of US.'
          },
          { 'imageUrl'    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmMbxEKSX1h_U81chVX_hV2oL29OzBhhMUSIU64hrkSd_EqIf7&usqp=CAU',
            'name'        : 'PEDODONTIST',
            'description' : 'Pedodontist or Pediatric dentist is a dentist qualified to handle kids. Pediatric dental specialist is trained to examine the oral health of children and treat all the anomalies pertaining to teeth from infancy up to adolescence. Pediatric dentist undergoes extensive training in postgraduate program of 3 years.'
          },
          { 'imageUrl'    : 'https://i.ytimg.com/vi/nfi_-09Io5A/maxresdefault.jpg',
            'name'        : 'PROSTHODONTICS',
            'description' : 'Prosthodontics is a recognized dental specialty that deals with the replacement of missing or deficient teeth and/or related craniofacial tissues. Where bone, gums and teeth are destroyed, a prosthodontist can re-create the form and function that has been lost and help restore quality for their entire time of life.'
          }
      ]
    }
    render () {
        return (
            <div>
                {/*<SpecialitesTab/>*/}
                <GridDynamicRenderer 
                    gridDetails={this.state.cardDetails} isSpecialites={true}/>
            </div>
        );
    }
}


export default Specialites;