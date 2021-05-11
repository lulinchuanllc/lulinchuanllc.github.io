$('.highlight').append($(
    `
        <button class="copy-code">复制</button>
    `
))
$('.copy-code').click(function(){
    var text = $(this).parent('.highlight').find('.code .line').map((i, e) => $(e).text()).toArray().join('\n')
    var ta = document.createElement('textarea')
    document.body.appendChild(ta)
    ta.style.position = 'absolute'
    ta.style.left = 0
    ta.style.top = 0
    ta.value = text
    ta.select()
    ta.focus()
    var result = document.execCommand('copy')
    document.body.removeChild(ta)
    if(result) {
        $(this).text('复制成功')
    } else {
        $(this).text('复制失败')
    }
    setTimeout(() => {
        $(this).text('复制')
    }, 2000)
})