// 백엔드에서 JSON 데이터를 받아오는 함수
async function fetchBooks() {
    try {
        // 데이터를 가져옵니다 (백엔드 URL은 적절히 변경)
        const response = await fetch('https://bb0cce1c-1c03-43eb-bb2c-705cff9645b8.mock.pstmn.io/api/index');
        if (!response.ok) {
            throw new Error('네트워크 응답이 올바르지 않습니다');
        }

        // JSON 데이터를 파싱
        const data = await response.json();

        // book-list 섹션에 동적으로 추가
        renderBooks(data.books);
    } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
    }
}

// 데이터를 받아서 HTML을 생성하는 함수
function renderBooks(books) {
    const bookListElement = document.getElementById("book-list");

    books.forEach((book) => {
        const article = document.createElement("article");
        article.className = "rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300";

        article.innerHTML = `
            <div>
                <div class="flex flex-col justify-between h-full">
                <div>
                     <div class="relative flex items-end overflow-hidden rounded-xl"
                         style="max-width: 18rem; max-height: 22rem; min-height: 22rem;">
                         <img src="${book.imgSrc}" alt="${book.alt}"
                             style="width: 100%; height: 22rem; object-fit: cover;"/>
                    </div>
                    <h2 class="mt-2 text-slate-700 truncate">${book.author} ${book.title}</h2>
                    <p class="mt-1 text-sm text-slate-400 truncate">${book.publisher}, ${book.publication_date}</p>
                </div>   
                    <div class="mt-1 p-2">
                        <div class="mt-3 flex items-end justify-between">
                            <p class="text-lg font-bold text-blue-500">${book.price}원</p>
                            <div id="wishBtn" class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <img id="starIcon" src="./assets/img/white-star.svg" alt="찜"/>
                                <button class="text-sm">찜하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            </div>

        `;

        bookListElement.appendChild(article);
    });
}

// 데이터를 가져와 화면에 표시
fetchBooks();


// const books = [
//     {
//         imgSrc: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932024639.jpg",
//         alt: "서랍에 저녁을 넣어두었다. -한강",
//         title: "「서랍에 저녁을 넣어두었다」",
//         author: "한강",
//         publisher: "문학과지성사",
//         publication_date: "2013년 11월 15일",
//         price: "10,000",
//     },
//     {
//         imgSrc: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936434595.jpg",
//         alt: "채식주의자 한강",
//         title: "「채식주의자」",
//         author: "한강",
//         publisher: "창비",
//         publication_date: "2022년 03월 28일",
//         price: "12,000",
//     },
//     {
//         imgSrc: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936434120.jpg",
//         alt: "「소년이 온다」한강",
//         title: "「소년이 온다」",
//         author: "한강",
//         publisher: "창비",
//         publication_date: "2014년 05월 19일",
//         price: "11,000",
//     },
//     {
//         imgSrc: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954682152.jpg",
//         alt: "「작별하지 않는다」한강" ,
//         title: "「작별하지 않는다」",
//         author: "한강",
//         publisher: "문학동네",
//         publication_date: "2021년 09월 09일",
//         price: "8,000",
//     },
//     {
//         imgSrc: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788954651134.jpg",
//         alt: "「흰」한강" ,
//         title: "「흰」",
//         author: "한강",
//         publisher: "문학동네",
//         publication_date: "2018년 04월 25일",
//         price: "10,000",
//     },
// ];
//
//
// const bookListElement = document.getElementById("book-list");
//
// books.forEach((book) => {
//     const article = document.createElement("article");
//     article.className = "rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300";
//
//     article.innerHTML = `
//     <a href="#">
//       <div class="relative flex items-end overflow-hidden rounded-xl">
//         <img src="${book.imgSrc}" alt="${book.alt}" />
//         <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
//             <path stroke-linecap="round" stroke-linejoin="round"
//               d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//           </svg>
//           <button class="text-sm">찜하기</button>
//         </div>
//       </div>
//       <div class="mt-1 p-2">
//         <h2 class="text-slate-700">${book.title}</h2>
//         <p class="mt-1 text-sm text-slate-400">${book.description}</p>
//         <div class="mt-3 flex items-end justify-between">
//           <p class="text-lg font-bold text-blue-500">${book.price}</p>
//           <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//             <img src="./assets/img/white-star.svg" alt="찜" />
//             <button class="text-sm">찜하기</button>
//           </div>
//         </div>
//       </div>
//     </a>
//   `;
//
//     bookListElement.appendChild(article);
// });