/**
  * Функция-обертка над XMLHttpRequest, осуществляющая запрос
  * url - урл, по которому будет осуществляться запрос
  * callback - функция, которая вызовется при успешном выполнении
  * и первым параметром получит объект-результат запроса
  */
function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };
  
  // Ищем ноду для вставки результата запроса
  const resultNode = document.querySelector('.j-result');
  // Ищем кнопку, по нажатии на которую будет запрос
  const btnNode = document.querySelector('.j-btn-request');
  //Ищем значение поля input
  
  
  /**
    * Функция обработки полученного результата
    * apiData - объект с результатом запроса
    */
  function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
    
    // console.log('end cards', cards);
      
    resultNode.innerHTML = cards;
  }
  
  
  let myKey1 = localStorage.getItem('myKey1');
  let myKey2 = localStorage.getItem('myKey2');
  if (myKey1 != null && myKey2 != null)
    useRequest(`https://picsum.photos/v2/list?page=${myKey1}&limit=${myKey2}`, displayResult);
  
  
  // Вешаем обработчик на кнопку для запроса
  btnNode.addEventListener('click', () => {
    var value = Number(document.querySelector('.input1').value);
    var limit = Number(document.querySelector('.input2').value);
    if (value<11 && value>0 && limit>0 && limit<11)
      {
      useRequest(`https://picsum.photos/v2/list?page=${value}&limit=${limit}`, displayResult);
      localStorage.setItem('myKey1', `${value}`);
      localStorage.setItem('myKey2', `${limit}`);
      }
    else if ((value>11 || value<0) && (limit>0 && limit<11))
      resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10"
    else if ((limit>11 || limit<0) &&  (value<11 && value>0))
      resultNode.innerHTML = "Лимит вне диапазона от 1 до 10"
    else
      resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  });