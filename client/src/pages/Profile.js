import { DateRangePicker } from "rsuite";
// import { useState } from 'react';
import { useMutation, useQuery } from "@apollo/client";
import { Container, Row, Col, Card, ListGroup} from "react-bootstrap";
import "../styles/profile.css";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";

import {
  GET_SERVICES,
  GET_HEALTHS,
  GET_SIZES,
  GET_SOCIABILITIES,
  QUERY_ME_PETSITTER,
} from "../utils/queries";

// import { GET_SIZES, GET_SERVICES, GET_HEALTHS, GET_SOCIABILITIES, QUERY_ME_PETSITTER } from '../utils/queries';
import {
  UPDATE_AVAILABILTY,
  UPDATE_PETSITTER,
  ADD_DAYSOFF,
  UPDATE_EVENT_STATUS,
  DELETE_EVENT,
  DELETE_DAYSOFF
} from "../utils/mutations";


const Profile = () => {
  const dateFormat = (date) => {
    let stringDate = new Date(parseInt(date)).toDateString();
    return stringDate;
  };

  const [updateAvailability] = useMutation(UPDATE_AVAILABILTY);
  const [UpdatePetSitter] = useMutation(UPDATE_PETSITTER);
  const [UpdateDaysOff] = useMutation(ADD_DAYSOFF);
  const [UpdateEventStatus] = useMutation(UPDATE_EVENT_STATUS)
  const [DeleteEvent] = useMutation(DELETE_EVENT)
  const [DeleteDaysOff] = useMutation(DELETE_DAYSOFF)


  const { TextArea } = Input;
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const mutationResponse = await UpdatePetSitter({
        variables: {
          description: values.description,
          ratePerNight: values.ratePerNight,
          // image: baseImage,
        },
      });
      console.log(mutationResponse);
      if (mutationResponse) {
        alert("Profile updated");
        window.location.assign("/profile");
      }
    } catch (e) {
      console.error(e);
    }

  };

  const changeAvailability = async (e) => {
    const mutationResponse = await updateAvailability({
      variables: {
        availability: petSitter.availability,
      },
    });
    if (mutationResponse) {
      alert("Availability updated");
      window.location.assign("/profile");
    }
  };

  const onChangeDaysOff = async (date) => {
    console.log(date);
    try {
      const mutationResponse = await UpdateDaysOff({
        variables: {
          start: date[0],
          end: date[1],
        },
      });
      if (mutationResponse) {
        alert("Days off added");
      }
    } catch (err) {
      console.error("el error" + err);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeServices = async (checkedValues) => {
    console.log("checked = ", checkedValues);
    const mutationResponse = await UpdatePetSitter({
      variables: {
        services: checkedValues,
      },
    });
    return mutationResponse;
  };

  const onChangeHealths = async (checkedValues) => {
    console.log("checked = ", checkedValues);
    const mutationResponse = await UpdatePetSitter({
      variables: {
        healthReady: checkedValues,
      },
    });
    return mutationResponse;
  };

  const onChangeSizes = async (checkedValues) => {
    console.log("checked = ", checkedValues);
    const mutationResponse = await UpdatePetSitter({
      variables: {
        sizes: checkedValues,
      },
    });
    return mutationResponse;
  };

  const onChangeSociability = async (checkedValues) => {
    console.log("checked = ", checkedValues);
    const mutationResponse = await UpdatePetSitter({
      variables: {
        socialReady: checkedValues,
      },
    });
    return mutationResponse;
  };

  function arrayOfIds(array) {
    if (!array) return ["empty"];
    const newArray = [];
    for (let x = 0; x < array?.length; x++) {
      newArray.push(array[x]._id);
    }
    if (newArray) {
      return newArray;
    } else {
      return ["empty"];
    }
  }

  const onChangeTextArea = (e) => {
    console.log("Change:", e.target.value);
  };

  const { loading: loadingPetSitter, data: dataPetSitter } =
    useQuery(QUERY_ME_PETSITTER); // 400ms

  const petSitter = dataPetSitter?.me.petSitter || [];
 

  const { loading: loadingServices, data: dataServices } =
    useQuery(GET_SERVICES);
  const servicesList = dataServices?.services || [];

  const services = [];
  servicesList.map((service) => {
    services.push({ label: service.name, value: service._id });
  });

  const { loading: loadingHealths, data: dataHealth } = useQuery(GET_HEALTHS);
  const healthsList = dataHealth?.healths || [];

  const healths = [];
  healthsList.map((health) => {
    healths.push({ label: health.name, value: health._id });
  });

  const { loading: loadingSizes, data: dataSize } = useQuery(GET_SIZES);

  const sizesList = dataSize?.sizes || [];

  const sizes = [];
  sizesList.map((size) => {
    sizes.push({ label: size.name, value: size._id });
  });

  const { loading: loadingSociabilities, data: dataSociability } =
    useQuery(GET_SOCIABILITIES);
  const sociabilitiesList = dataSociability?.sociabilities || [];
  console.log();

  const sociabilities = [];
  sociabilitiesList.map((sociability) => {
    sociabilities.push({ label: sociability.name, value: sociability._id });
  });

  
const changeToConfirmed =  async (e, id) => {
  try {
    const mutationResponse = await UpdateEventStatus({
      variables: {
        eventId: id,
        status: "Confirmed"
      },
    });
    console.log(mutationResponse);
    if (mutationResponse) {
      alert("Status Updated");
      window.location.assign("/profile");
    }
  } catch (e) {
    console.error(e);
  }
}

const changeToRejected = async (e ,id) => {
  try {
    const mutationResponse = await UpdateEventStatus({
      variables: {
        eventId: id,
        status: "Rejected"
      },
    });
    console.log(id)
    console.log(mutationResponse);
    if (mutationResponse) {
      alert("Status Updated");
      window.location.assign("/profile");
    }
  } catch (e) {
    console.error(e);
  }
}

const deleteEvent = async (e, eventId, petSitterId, petOwnerId) => {
  try {
    const mutationResponse = await DeleteEvent({
      variables: {
        eventId: eventId,
        petSitterId: petSitterId,
        petOwnerId: petOwnerId
      },
    });
    if (mutationResponse) {
      alert("Event deleted!");
      window.location.assign("/profile");
    }
  } catch (e) {
    console.error(e);
  }
}

const deleteDaysOff = async (e, daysId) => {
  console.log(daysId)
  try {
    const mutationResponse = await DeleteDaysOff({
      variables: {
        rangeId: daysId
      }
    });
    if (mutationResponse) {
      alert("Days off Deleted!");
      window.location.assign("/profile");
    }
  } catch (e) {
    console.error(e);
  }
}

  //Function to upload image
  // const [baseImage, setBaseImage] = useState("")

  // const uploadImage = async (e) =>{
  //   const file = e.target.files[0]
  //   const base64 = await convertBase64(file)
  //   setBaseImage(base64);
  //   console.log(base64);
  // };

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = (() => {
  //       resolve(fileReader.result);
  //     });

  //     fileReader.onerror = ((error) => {
  //       reject(error);
  //     });
  //   });
  // };

  return (
    <Container cclassName='p-5 mr-0 ml-0'>
    
    {loadingPetSitter ? (<div>Loading</div>) : (

    <Row>
    <div id='availability'>
    <div>
    <Button id='submit-button' type="primary" htmlType="button" onClick={changeAvailability}>
          Change availability
    </Button>
    { petSitter.availability ? (<p id="availability-status-available">Current status: Available</p>) : (<p id="availability-status-notAvailable">Current status: Not available</p>)}
    </div>


    <div className='pt-2' >
      <label>Days Off: </label>
     <DateRangePicker 
     onOk={onChangeDaysOff} />
    </div>

    {petSitter.daysOff.map(days => (
        <div className='pt-2'>
          Unavailable from <span>{dateFormat(days.start)}</span> to 
          <span> {dateFormat(days.end)}</span>
          <ListGroup.Item>
          <Button onClick={(e) => deleteDaysOff(e, days._id)}>Delete</Button>
          </ListGroup.Item>
        </div>
      ))}
    </div>
    <Col xl={6} lg={6} md={12} sm={12}>
    <Form
      name="basic"
      className='profile-form'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <Form.Item
    label= "Description"
    name="description"  
    onChange={onChangeTextArea} 
    initialValue= {petSitter.description}
    >
    <TextArea 
  
      />
    </Form.Item>
   
    <Form.Item
        label="Rate per Night"
        name="ratePerNight"
       
        rules={[
          {
            required: true,
            message: 'Please enter your rate!',
          },
        ]}
      >
      <InputNumber  placeholder= {petSitter.ratePerNight}     
    />
      </Form.Item>

      {loadingServices ? (
          <div>Loading...</div>
          ) : (
      <Form.Item>
      <p>Services</p>
      
      <Checkbox.Group
        options={services}
        name="services"
        defaultValue={arrayOfIds(petSitter.services)}
        onChange={onChangeServices}
      />
         
         </Form.Item> )}
      {loadingHealths ? (
          <div>Loading...</div>
          ) : (
      <Form.Item>
      <p>Healths</p>
      <Checkbox.Group
        options={healths}
        name="health"
        defaultValue={arrayOfIds(petSitter.healthReady)}
        onChange={onChangeHealths}
      />
      </Form.Item> )}
      {loadingSizes ? (
        <div>Loading...</div>
            ) : (
        <Form.Item>
        <p>Sizes</p>
     
        <Checkbox.Group
          options={sizes}
          name="sizes"
          defaultValue={arrayOfIds(petSitter.sizes)}
          onChange={onChangeSizes}
        />
        </Form.Item> )}

        {loadingSociabilities ? (
        <div>Loading...</div>
              ) : (
          <Form.Item>
          <p>Sociability</p>
          <Checkbox.Group
            options={sociabilities}
            name = "sociabilities"
            defaultValue={arrayOfIds(petSitter.socialReady)}
            onChange={onChangeSociability}
          />
         </Form.Item> )}



      {/* <Form.Item
        label="Image"
        name="image"
      >
        <Input />
      </Form.Item> */}
      <Form.Item>
        <Button id='submit-button' style={{display: "inline-block"}} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>



  

      {/* <NavLink id="message" to="/signup-user"> Don't have an account? Sign up</NavLink> */}
    </Form>
    
    </Col>
    <Col className=  "pb-3" xl={6} lg={6} md={12} sm={12}>
    <h4 className="pb-3">Your events:</h4>
    <div id='event-container'>
                {
               petSitter.eventsOffered.map(event => (
                <div className='pb-3'>
                  <Card>
                    <Card.Header className="d-flex justify-content-center"></Card.Header>
                    <ListGroup>
                      <ListGroup.Item >Username: {event.petOwner.name}</ListGroup.Item>
                      <ListGroup.Item>Pet name: {event.pets[0]? (<span>{event.pets[0].name}</span>): (<span>Pet Deleted</span>)}</ListGroup.Item>
                      <ListGroup.Item>Start Date: {dateFormat(event.daysOfEvent.start)}</ListGroup.Item>
                      <ListGroup.Item>End Date: {dateFormat(event.daysOfEvent.end)}</ListGroup.Item>
                      <ListGroup.Item>Price: {event.price}</ListGroup.Item>
                      <ListGroup.Item>Status: {event.status}</ListGroup.Item>
                      <ListGroup.Item>Rating:  {event.petsRating[0]}</ListGroup.Item>
                      <ListGroup.Item>My Rating: {event.petSitterRating}</ListGroup.Item>
                      <ListGroup.Item> 
                  { event.status === "Reserved" ? (
                  <div>
                    <Button onClick={(e) => changeToConfirmed(e, event._id)}>Confirm</Button>
                    <Button onClick={(e) => changeToRejected(e, event._id)}>Reject</Button>
                    </div>) : (<span></span>)}
                  { event.status === "Paid" ? ( <a href={`mailto:${event.contactInfo}`} rel="noreferrer" target="_blank">Contact Client Soon!</a>) : (<span></span>)}
                  { event.status === "Confirmed" ? (<p>Wait for Payment</p>) : (<span></span>)}
                  { event.status === "Rejected" ? (<Button onClick={(e) => deleteEvent(e, event._id, event.petSitter._id, event.petOwner._id)}>Delete</Button>) : (<span></span>)}
                  </ListGroup.Item>
                    </ListGroup>
                  </Card>
                 
                </div>
                   ))}
                   </div>
                  
    </Col>
    </Row>
      )}
    </Container>
  );
};

export default Profile;
