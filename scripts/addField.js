// Procurar o botão de adicionar novo horario

const buttonAddItem = document.querySelector("#add-item");

// Adicionar evento de clique ao botão
buttonAddItem.addEventListener('click', cloneFields);


// Executar a ação de clonar os campos

function cloneFields() {

    // Definir os campoa serem clonados
    const newScheduleItem = document.querySelector(".schedule-item").cloneNode(true);

    // Limpar o conteúdo dos campos
    const fieldsList = newScheduleItem.querySelectorAll("input");

    // Para cada elemnto, limpar o conteúdo
    fieldsList.forEach(function(field) {
        field.value = "";
    });

    // Onde colocar os campos clonados
    const scheduleItems = document.querySelector("#schedule-items");

    // Clonar os campos no local final do elmento pai
    scheduleItems.appendChild(newScheduleItem);

}