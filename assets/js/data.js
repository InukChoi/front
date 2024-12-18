const books = [
    {
        imgSrc: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932024639.jpg",
        alt: "서랍에 저녁을 넣어두었다. -한강",
        title: "「서랍에 저녁을 넣어두었다」한강",
        description: "문학과지성사 · 2013년 11월 15일",
        price: "10,000원",
    },
    {
        imgSrc: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936434595.jpg",
        alt: "채식주의자 한강",
        title: "「채식주의자」한강",
        description: "창비 · 2022년 03월 28일",
        price: "12,000원",
    },
    {
        imgSrc: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936434120.jpg",
        alt: "「소년이 온다」한강",
        title: "「소년이 온다」한강",
        description: "창비 · 2014년 05월 19일",
        price: "11,000원",
    },
];


const bookListElement = document.getElementById("book-list");

books.forEach((book) => {
    const article = document.createElement("article");
    article.className = "rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300";

    article.innerHTML = `
    <a href="#">
      <div class="relative flex items-end overflow-hidden rounded-xl">
        <img src="${book.imgSrc}" alt="${book.alt}" />
        <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <button class="text-sm">찜하기</button>
        </div>
      </div>
      <div class="mt-1 p-2">
        <h2 class="text-slate-700">${book.title}</h2>
        <p class="mt-1 text-sm text-slate-400">${book.description}</p>
        <div class="mt-3 flex items-end justify-between">
          <p class="text-lg font-bold text-blue-500">${book.price}</p>
          <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <img src="./assets/img/white-star.svg" alt="찜" />
            <button class="text-sm">찜하기</button>
          </div>
        </div>
      </div>
    </a>
  `;

    bookListElement.appendChild(article);
});