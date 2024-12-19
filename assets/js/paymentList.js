const $sell = document.getElementById('sell');
const $buy = document.getElementById('buy');
const $left = document.getElementById('left');
const $right = document.getElementById('right');
const $sellMenu = document.getElementById('sell-menu');
const $buyMenu = document.getElementById('buy-menu');

const optionON = (op) => {
    const $all = op.querySelector('#status-all');
    const $ing = op.querySelector('#status-ing');
    const $fin = op.querySelector('#status-fin');

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
};

const optionOFF = (op) => {
    const $all = op.querySelector('#status-all');
    const $ing = op.querySelector('#status-ing');
    const $fin = op.querySelector('#status-fin');

    $all.classList.add('on');
    $ing.classList.remove('on');
    $fin.classList.remove('on');
};

optionON($left);

$sell.addEventListener('click', () => {
    $sell.classList.add('on');
    $left.classList.add('add');
    $buy.classList.remove('on');
    $right.classList.remove('add');

    $sellMenu.classList.add('on');
    $buyMenu.classList.remove('on');

    optionON($left);
    optionOFF($right);
});

$buy.addEventListener('click', () => {
    $buy.classList.add('on');
    $right.classList.add('add');
    $sell.classList.remove('on');
    $left.classList.remove('add');

    $sellMenu.classList.remove('on');
    $buyMenu.classList.add('on');

    optionON($right);
    optionOFF($left);
});