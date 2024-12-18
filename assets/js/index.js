const categories = [
    {
        id: 1,
        name: '국내도서',
        subcategories: [
            {
                id: 11,
                name: '소설',
                subcategories: [
                    {id: 111, name: '한국소설'},
                    {id: 112, name: '영미소설'},
                ],
            },
            {
                id: 12,
                name: '시/에세이',
                subcategories: [
                    {id: 121, name: '한국 시'},
                    {id: 122, name: '해외 시'},
                ],
            },
            {
                id: 13,
                name: '가정/육아',
                subcategories: [
                    {id: 131, name: '결혼/가정'},
                    {id: 132, name: '임신/출산'},
                    {id: 133, name: '육아'},
                    {id: 134, name: '자녀교육'},
                    {id: 135, name: '살림의지혜'},
                    {id: 136, name: '홈인테리어'},
                ],
            },
            {
                id: 14,
                name: '요리',
                subcategories: [
                    {id: 141, name: '요리에세이'},
                    {id: 142, name: '테마별요리'},
                    {id: 143, name: '베이킹/간식'},
                ],
            },
        ],
    },
    {
        id: 2,
        name: '해외도서',
        subcategories: [
            {
                id: 21,
                name: '문학',
                subcategories: [
                    {id: 211, name: '소설'},
                    {id: 212, name: '시/에세이'},
                ],
            },
            {
                id: 22,
                name: '비문학',
                subcategories: [
                    {id: 221, name: '과학/기술'},
                    {id: 222, name: '종교'},
                ],
            },
        ],
    },
];

// 초기 렌더링 함수
function renderInitialCategories() {
    const level1 = document.getElementById('level1');
    categories.forEach(category => {
        const button = createCategoryButton(category, category.subcategories, 'level2');
        level1.appendChild(button);
    });
}

// 버튼 생성 함수
function createCategoryButton(category, subcategories, nextLevelId) {
    const button = document.createElement('button');
    button.innerText = category.name;
    button.className =
        'w-36 h-12 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 text-sm';

    button.addEventListener('click', () => {
        const nextLevel = document.getElementById(nextLevelId);
        if (!subcategories || subcategories.length === 0) {
            alert(`${category.name} 선택`);
            return;
        }

        // 다음 레벨의 UI 업데이트
        nextLevel.innerHTML = '';
        nextLevel.classList.remove('hidden');
        subcategories.forEach(subcategory => {
            const subButton = createCategoryButton(
                subcategory,
                subcategory.subcategories,
                nextLevel.nextElementSibling?.id
            );
            nextLevel.appendChild(subButton);
        });

        // 이후 단계의 모든 UI 숨기기
        let nextElement = nextLevel.nextElementSibling;
        while (nextElement) {
            nextElement.innerHTML = '';
            nextElement.classList.add('hidden');
            nextElement = nextElement.nextElementSibling;
        }
    });

    return button;
}

// 카테고리 메뉴 표시/숨기기
function toggleCategoryMenu() {
    const menu = document.getElementById('category-container');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

// 이벤트 핸들러 등록
document.getElementById('toggle-button').addEventListener('click', toggleCategoryMenu);

// 초기화
renderInitialCategories();