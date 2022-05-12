import React  from "react";
import { Button, Modal } from "react-bootstrap";
import { ADD_EVENT } from "../utils/mutations";
import { useMutation} from "@apollo/client";

const ModalPetSitter = ({
  show,
  onHide,
  petSitter,
  petOwnerId,
  daysOfEvent,
  dogsId,
  price,
  ratings,
  services,
  socials,
  sizes,
  healths
}) => {

  const [AddEvent, { error }] = useMutation(ADD_EVENT);
  // const [average, setAverage] = useState({})

  const makeReservation = async () =>{
    try {
      const addEvent = await AddEvent({
        variables: {
          petOwner: petOwnerId,
          petSitter: petSitter._id,
          daysOfEvent: daysOfEvent,
          pets: [dogsId],
          price: price
        },
      });
      console.log(addEvent);
      if (addEvent) {
        alert("Reservation Created");
        window.location.assign("/profile-petowner");
      }
   } catch (e) {
    alert("Failed to make reservation!");
    console.error(e, error);
  }
  };



  // const getAverage = () => {
  //   console.log(petSitter.ratings)
  //   let total = 0;
  //   for(let i = 0; i < petSitter.ratings.length; i++) {
  //       total += average[i];
  //   }
  //   let avg = total / petSitter.ratings.length;
  //   setAverage(avg)
  // }

  // useEffect(() => {
  //   getAverage()
  // }, [petSitter]);

  

  // AddEvent($petOwner: ID!, $petSitter: ID!, $daysOfEvent: String!, $pets: [ID!], $price: Float)

  return (
    
    <Modal show={show} onHide={onHide}>
      
      <Modal.Header closeButton>
        <Modal.Title>{petSitter.name}</Modal.Title>
      </Modal.Header>
  
      <Modal.Body>


        <h1>Rating: {ratings}</h1>
        <h3>{petSitter.description}</h3>
        <h2>Services offered:</h2>
        {services}
        <h2>Sizes allowed:</h2>
        {sizes}
        <h2>Prepared for:</h2>
        {healths} 
        {socials}

     
        <h4>Price for reservation: ${price} MXN</h4>



      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button id="submit-button" onClick={makeReservation}>
          Make a Reservation
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPetSitter;
