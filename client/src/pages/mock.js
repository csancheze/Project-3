const { loading, data } = useQuery(QUERY_ME_PETOWNER);
const user = data.me.user || []
const petOwner = data.me.petOwner|| []
console.log(petSitter)