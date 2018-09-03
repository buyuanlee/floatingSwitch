//方法一
$('#btn').click(function () {
    $('#chatBox').toggleClass('active')
        setTimeout(function () {
            $(document).one('click',function () {
                $('#chatBox').removeClass('active')
            })
        },0)
    $('#box').click(function (event) {
        event.stopPropagation()
    })
})

//方法二
// btn.addEventListener('click', function () {
//         chatBox.classList.toggle('active')
// })
//
// box.addEventListener('click', function (event) {
//     event.stopPropagation()
// })
//
// document.addEventListener('click', function () {
//     chatBox.classList.remove('active')
// })
