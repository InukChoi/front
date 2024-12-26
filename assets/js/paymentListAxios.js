//판매내역
const payList =  () => {
    axios  //프로미스 기반으로 동삭하기 때문에 await을 앞에 붙혀준다.
       .post('https://d682c2b0-d4d3-442d-a0d1-7d6d298ea66b.mock.pstmn.io/payList')
       .then((response) => {
           console.log(response.data); // 응답 데이터
           return response.data;
       })
       .catch((error) => {
           console.error('Error fetching data:', error);
       });
};

//구매내역
const orderList = () => {
    axios  //프로미스 기반으로 동삭하기 때문에 await을 앞에 붙혀준다.
       .post('https://d682c2b0-d4d3-442d-a0d1-7d6d298ea66b.mock.pstmn.io/orderList')
       .then((response) => {
           console.log(response.data); // 응답 데이터
           return response.data;
       })
       .catch((error) => {
           console.error('Error fetching data:', error);
       });
};



const paymentList =async () => {
   await axios  //프로미스 기반으로 동삭하기 때문에 await을 앞에 붙혀준다.
       Promise.all([
           payList(),
           orderList()
       ])
       .then((values) => {
           console.log(values);
           return values;
       })
       .catch((error) => {
           console.log('Error fetching data:', error);
       });
};

const response=paymentList();