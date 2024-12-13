
const $sell = document.getElementById('sell');
const $buy = document.getElementById('buy');

$sell.addEventListener('click', () => {
    if (!$sell.classList.contains('on')) {
        $sell.classList.add('on');
        $buy.classList.remove('on');
    }
});

$buy.addEventListener('click', () => {
    if (!$buy.classList.contains('on')) {
        $buy.classList.add('on');
        $sell.classList.remove('on');
    }
});


const $all = document.getElementById('status-all');
const $ing = document.getElementById('status-ing');
const $fin = document.getElementById('status-fin');

$all.addEventListener('click', () => {
    if (!$all.classList.contains('on')) {
        $all.classList.add('on');
        $ing.classList.remove('on');
        $fin.classList.remove('on');
    }
});

$ing.addEventListener('click', () => {
    if (!$ing.classList.contains('on')) {
        $ing.classList.add('on');
        $all.classList.remove('on');
        $fin.classList.remove('on');
    }
});

$fin.addEventListener('click', () => {
    if (!$fin.classList.contains('on')) {
        $fin.classList.add('on');
        $ing.classList.remove('on');
        $all.classList.remove('on');
    }
});