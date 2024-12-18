const getUserInfo = async () => {
    try{
        const response = await axios.post("https://f1e8f15e-347b-4505-af07-9aeb8e9ff91b.mock.pstmn.io/api/login", {id: "user-id-1", pw:"qwer1234"});
        console.log(response);
        if(response.data.result === "success") {
            console.log("로그인 성공");
        } else {
            console.log("로그인 실패");
        }
        return response.data;
    } catch (error) {
        console.error(error);
    }
    
};

console.log(getUserInfo());