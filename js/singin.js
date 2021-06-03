const $el = document.getElementById('tabs-swipe-demo')

document.addEventListener('DOMContentLoaded', function () {
    const elems = document.getElementById('birthdate');
    const instances = M.Datepicker.init(elems, {
        container: document.documentElement
    });
});


const instance = M.Tabs.init($el, {
    duration: 300,
    swipeable: true,
});
instance.select('test-swipe-1');