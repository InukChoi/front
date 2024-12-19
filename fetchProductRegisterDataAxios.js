const getProduct = async () => {
  try{
      const response = await axios.get("https://72fe67fb-06cb-478f-b472-e8cfc2559991.mock.pstmn.io/api/productRegister", {id: "1", title:"자바의 정석"});
      console.log(response);
      return response.data;
  } catch (error) {
      console.error(error);
  }
  
};
getProduct();