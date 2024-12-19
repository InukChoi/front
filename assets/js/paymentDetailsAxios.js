window.onload=async()=>{
    axios
    .post('https://d682c2b0-d4d3-442d-a0d1-7d6d298ea66b.mock.pstmn.io/paymentDetails')
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
};