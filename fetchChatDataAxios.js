const getChat = async () => {
  try {
    const response = await axios.get("https://72fe67fb-06cb-478f-b472-e8cfc2559991.mock.pstmn.io/api/chatting", {});
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }

};
getChat();

const send = () => {
  const inputField = document.querySelector('input[type="text"]');
  const messageContent = inputField.value;

  const chatId = 1; // 채팅방 ID
  const sender = "user"; // 발신자 
  axios
    .post("https://72fe67fb-06cb-478f-b472-e8cfc2559991.mock.pstmn.io/api/chatting", {
      id: chatId, // 채팅방 ID
      message: {
        sender: sender, // 발신자
        content: messageContent, // 메시지 내용
      },

    }, {
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log('POST Response:', response.data);
      if (response.data.status === "success") {
        console.log("전송 성공");
      } else {
        console.log("전송 실패");
      }
      inputField.value = "";
    })
    .catch((error) => { console.error('Error:', error); });
}


document.getElementById("sendMsg").addEventListener("click", send);





// document.getElementById("sendMsg").addEventListener("click", async () => {
//   const inputField = document.querySelector('input[type="sendText"]');
//   const message = inputField.value;

//   if (!message.trim()) {
//     alert("메시지를 입력하세요!");
//     return;
//   }

//   try {
//     const response = await axios.post("https://72fe67fb-06cb-478f-b472-e8cfc2559991.mock.pstmn.io/api/chatting", {
//       message: message,
//     }, {
//       headers: { "Content-Type": "application/json" },
//     });

//     console.log("Message Sent:", response.data);

//     // 메시지가 성공적으로 전송되었으면 화면에 추가
//     const chatArea = document.querySelector("#chatMsgScreen");
//     const outgoingMessage = `
//       <div class="relative flex justify-end mb-4 cursor-pointer">
//         <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
//           <p>${message}</p>
//         </div>
//         <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
//           <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=Me" alt="My Avatar" class="w-8 h-8 rounded-full" />
//         </div>
//       </div>
//     `;
//     chatArea.insertAdjacentHTML("beforeend", outgoingMessage);

//     // 입력 필드 초기화
//     inputField.value = "";
//   } catch (error) {
//     console.error("Error Sending Message:", error);
//     alert("메시지를 전송하는 중 오류가 발생했습니다.");
//   }
// });

