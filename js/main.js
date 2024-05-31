let input=$('input')

  input.on('focus',function (){
    $(this).css({
        width:'+=50px',
        boxShadow:'2px 2px 2px green, -2px -2px  green'
    })
})
input.on('blur',function (){
    $(this).css({
        width:'-=50px',
        boxShadow: '2px 2px 2px darkcyan, -2px -2px  blue',
    })
})

$('form').on('submit',function (e){
    e.preventDefault()
})
