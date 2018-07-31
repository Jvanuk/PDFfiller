var year = prompt('Сколько вам лет?');
  if (year < 18)
    {
      alert ('Bye Kid');
      throw "stop"
    }
var name = prompt('Введите ваше имя');
if (name == '')
    {
    alert('Вeдите имя правильно!');
    }
    else
      {
        var anket = confirm('Добрый день, ' + name + ' хотите добавить еще информацию о себе?');
        if (anket == true )
          {
            var mulo = prompt ('Введите ваш имейл')
            alert('Поздравляем ' + name + ' Вам ' + year + ' лет и ваш имейл ' + mulo)
          }
else alert('Поздравляем ' + name + ' Вам ' + year + ' лет!')
    }
