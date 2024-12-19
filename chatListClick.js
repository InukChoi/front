document.addEventListener("DOMContentLoaded", () => {
  const chatListContainer = document.querySelector(".chat-list");
  const chatMessagesContainer = document.getElementById("chatMsgScreen");

  axios.get("https://72fe67fb-06cb-478f-b472-e8cfc2559991.mock.pstmn.io/api/chatting/{id}")
    .then(response => {
      const chats = response.data;

      // 채팅 목록 렌더링
      chatListContainer.innerHTML = chats.map(chat => {
        const lastMessage = chat.messages && chat.messages.length > 0
          ? chat.messages[chat.messages.length - 1].content
          : "메시지가 없습니다.";

        return `
          <div 
            class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md chat-item"
            data-id="${chat.id}"
          >
            <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
              <img src="${chat.avatar}" alt="${chat.title} 이미지" class="w-12 h-12 rounded-full" />
            </div>
            <div class="flex-1">
              <h2 class="text-lg font-semibold">${chat.title}</h2>
              <p class="text-gray-600">${lastMessage}</p>
            </div>
          </div>
        `;
      }).join('');

      // 채팅방 클릭 이벤트 추가
      addChatItemClickEvent(chats);
    })
    .catch(error => {
      console.error("채팅 목록 데이터를 가져오는 중 오류 발생:", error);
    });

  // 클릭 이벤트 추가 함수
  function addChatItemClickEvent(chats) {
    const chatItems = document.querySelectorAll(".chat-item");

    chatItems.forEach(item => {
      item.addEventListener("click", () => {
        const chatId = item.dataset.id;
        const chatData = chats.find(chat => chat.id == chatId);

        if (chatData) {
          // 채팅 메시지 렌더링
          chatMessagesContainer.innerHTML = chatData.messages.map(message => `
            <div class="flex mb-4 ${message.sender === 'user' ? '' : 'justify-end'}">
              <div class="${message.sender === 'user' ? 'bg-indigo-200 text-gray-700' : 'bg-indigo-500 text-white'} rounded-lg p-3 max-w-96">
                <p>${message.content}</p>
              </div>
            </div>
          `).join('');
        }
      });
    });
  }
});

