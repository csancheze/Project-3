import { Sociability } from "../../../server/models";


const { loading: loadingServices, data: dataServices} = useQuery(GET_SERVICES);
const servicesList = dataServices?.services || []

console.log(servicesList)



const { loading: loadingPetOwner, data: dataPetOwner } = useQuery(QUERY_ME_PETOWNER);
console.log(dataPetOwner)
const { loading: loadingPetSitters, data: dataPetSitters } = useQuery(SEARCH_PETSITTERS, {
  variables: {
    services: [servicesList[0]._id],
    size: dataPetOwner.me.petOwner.pet[0].size._id,
    health: dataPetOwner.me.petOwner.pet[0].health._id,
    sociability: dataPetOwner.me.petOwner.pet[0].sociability._id,
    daysStart: "2022-05-10",
    daysEnd: "2022-06-11"
  }
});
const petSittersResult = dataPetSitters || []

console.log(petSittersResult)