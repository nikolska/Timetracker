const apikey = '359852fb-e782-4974-b7af-9aab4855f102';
const apihost = 'https://todo-api.coderslab.pl';

function apiListTasks() {
    return fetch(
    apihost + '/api/tasks',
    {
        headers: { Authorization: apikey }
    }
    ).then(
    function(resp) {
        if(!resp.ok) {
            alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny');
        }
        return resp.json();
    }
    )
}

function renderTask(taskId, title, description, status) {
    console.log('Zadanie o id =', taskId);
    console.log('tytuł to:', title);
    console.log('opis to:', description);
    console.log('status to:', status);
}

document.addEventListener('DOMContentLoaded', function() {

    apiListTasks().then(
        function(response) {
          // "response" zawiera obiekt z kluczami "error" i "data" (zob. wyżej)
          // "data" to tablica obiektów-zadań
          // uruchamiamy funkcję renderTask dla każdego zadania jakie dał nam backend
          response.data.forEach(
            function(task) { renderTask(task.id, task.title, task.description, task.status); }
          );
        }
      );

});
