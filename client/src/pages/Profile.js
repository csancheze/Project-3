import { DateRangePicker } from 'rsuite';
import { /*useMutation,*/ useQuery } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/loginUser.css';
import { Form, Input, Button, Checkbox } from 'antd';

import { GET_SERVICES, GET_HEALTHS, GET_SIZES, GET_SOCIABILITIES } from '../utils/queries';
// import { GET_SIZES, GET_SERVICES, GET_HEALTHS, GET_SOCIABILITIES, QUERY_ME_PETSITTER } from '../utils/queries';
// import { UPDATE_AVAILABILTY, UPDATE_PETSITTER, ADD_DAYSOFF } from '../utils/mutations';



const Profile = () => {

  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log('Success:', values);
  };


  const changeAvailability = (e) => {
    e.preventDefault();

  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const onChangeTextArea = e => {
    console.log('Change:', e.target.value);
  };

  const { loading: loadingServices, data: dataServices } = useQuery(GET_SERVICES);
  const servicesList = dataServices?.services || []

  const services = []
  servicesList.map(service => {
    services.push({ label: service.name, value: service._id })
  })

  const { loading: loadingHealths, data: dataHealth } = useQuery(GET_HEALTHS);
  const healthsList = dataHealth?.healths || []


  const healths = []
  healthsList.map(health => {
    healths.push({ label: health.name, value: health._id })
  })

  const { loading: loadingSizes, data: dataSize } = useQuery(GET_SIZES);
  const sizesList = dataSize?.sizes || []


  const sizes = []
  sizesList.map(size => {
    sizes.push({ label: size.name, value: size._id })
  })

  const { loading: loadingSociabilities, data: dataSociability } = useQuery(GET_SOCIABILITIES);
  const sociabilitiesList = dataSociability?.sociabilities || []
  console.log()


  const sociabilities = []
  sociabilitiesList.map(sociability => {
    sociabilities.push({ label: sociability.name, value: sociability._id })
  })


  return (
    <Container className='container'>
      <Row>

      <div className="dates">
          <DateRangePicker onChange={(ev) => console.log(ev)}/>
        </div>

        <Button id='available' type="primary" htmlType="button" onClick={changeAvailability}>
          Change availability
        </Button>


        <Col sm={12} md={12} lg={12}>
          <Form
            name="basic"
            className='form'
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Description"
            >
              <TextArea
                name="description"
                value="hola"
                showCount
                maxLength={100}
                style={{ height: 120 }}
                onChange={onChangeTextArea}
              />
            </Form.Item>
            <Form.Item
              label="Rate per Night"
              name="ratePetNight"
              rules={[
                {
                  required: true,
                  message: 'Please enter your rate!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            {loadingServices ? (
              <div>Loading...</div>
            ) : (
              <Form.Item>
                <p>Services</p>
                <Checkbox.Group
                  options={services}
                  defaultValue={['Apple']}
                  onChange={onChange}
                />

              </Form.Item>)}
            {loadingHealths ? (
              <div>Loading...</div>
            ) : (
              <Form.Item>
                <p>Healths</p>
                <Checkbox.Group
                  options={healths}
                  defaultValue={['Apple']}
                  onChange={onChange}
                />
              </Form.Item>)}
            {loadingSizes ? (
              <div>Loading...</div>
            ) : (
              <Form.Item>
                <p>Sizes</p>
                <Checkbox.Group
                  options={sizes}
                  defaultValue={['Apple']}
                  onChange={onChange}
                />
              </Form.Item>)}

            {loadingSociabilities ? (
              <div>Loading...</div>
            ) : (
              <Form.Item>
                <p>Sociability</p>
                <Checkbox.Group
                  options={sociabilities}
                  defaultValue={['Apple']}
                  onChange={onChange}
                />
              </Form.Item>)}



            <Form.Item
              label="Image"
              name="image"
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button id='submit-button' type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            {/* <NavLink id="message" to="/signup-user"> Don't have an account? Sign up</NavLink> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;