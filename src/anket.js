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
            var info = confirm('Добрый день, ' + name + ' хотите добавить еще информацию о себе?');
            if (info == true )
              {
                var email = prompt ('Введите ваш имейл')
                alert('Поздравляем ' + name + ' Вам ' + year + ' лет и ваш имейл ' + email)
              }
else alert('Поздравляем ' + name + ' Вам ' + year + ' лет!')
        }
