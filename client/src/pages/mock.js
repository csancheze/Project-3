<Button onClick={(e) => deletePet(e, pets._id)}>Delete</Button>

  
const deletePet = async (e, dogId) => {
  console.log(petId, petSitterId, petOwnerId)
  try {
    const mutationResponse = await DeletePet({
      variables: {
        dogId: petId,
      },
    });
    if (mutationResponse) {
      alert("Pet deleted!");
      window.location.assign("/profile-petowner");
    }
  } catch (e) {
    console.error(e);
  }
}