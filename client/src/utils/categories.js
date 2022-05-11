import { GET_SERVICES, GET_HEALTHS, GET_SIZES, GET_SOCIABILITIES} from '../utils/queries';

  const { loading: loadingServices, data: dataServices} = useQuery(GET_SERVICES);
  const servicesList = dataServices?.services || []

  const services = []
  servicesList.map(service =>{
    services.push({label: service.name, value: service._id})
  })

  const {loading: loadingHealths, data : dataHealth} = useQuery(GET_HEALTHS);
  const healthsList = dataHealth?.healths || []


  const healths = []
  healthsList.map(health =>{
    healths.push({label: health.name, value: health._id})
  })

  const {loading: loadingSizes, data : dataSize} = useQuery(GET_SIZES);
  const sizesList = dataSize?.sizes || []


  const sizes = []
  sizesList.map(size =>{
    sizes.push({label: size.name, value: size._id})
  })

  const {loading: loadingSociabilities, data : dataSociability} = useQuery(GET_SOCIABILITIES);
  const sociabilitiesList = dataSociability?.sociabilities || []
  console.log()


  const sociabilities = []
  sociabilitiesList.map(sociability =>{
    sociabilities.push({label: sociability.name, value: sociability._id})
  })

  module.exports= {sizes, sociabilities, healths, }