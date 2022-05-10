const {loading: loadingSociabilitys, data : dataSociability} = useQuery(GET_SOCIABILITES);
const sociabilitysList = dataSociability?.sociabilitys || []


const sociabilitys = []
sociabilitysList.map(sociability =>{
  sociabilitys.push({label: sociability.name, value: sociability._id})
})

{loadingSociabilitys ? (
    <div>Loading...</div>
    ) : (
      <div>
<p>Sociability</p>
<Checkbox.Group
  options={sociabilitys}
  defaultValue={['Apple']}
  onChange={onChange}
/>
</div> )}

