const getBooksInfo = async () => {
    try{
        const response = await axios.get("https://33b74478-d8fd-4866-bc92-abc827b6c0fe.mock.pstmn.io/api/test2");
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

console.log(getBooksInfo());