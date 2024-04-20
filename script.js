
let modalQtd;



//---------------------------------- EXIBE INFORMAÇÃO DAS PIZZAS ----------------------------------------//

pizzaJson.map((item, index) => {
    //clonando o pizza-item
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);


    pizzaItem.setAttribute('data-key', index);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault();

        modalQtd = 1

        let key = event.target.closest('.pizza-item').getAttribute('data-key');

        document.querySelector('.pizzaBig img').src = pizzaJson[key].img;
        document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');

        document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
            //fará que o tamanho grande sempre seja selecionada por padrão ao usuário clicar em uma pizza
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
            //size.querySelector('span').innerHTML = '123';
        });

        //definindo sempre 1 para qntd de pizza
        document.querySelector('.pizzaInfo--qt').innerHTML = modalQtd;

        document.querySelector('.pizzaWindowArea').style.opacity = 0;

        document.querySelector('.pizzaWindowArea').style.display = 'flex';

        setTimeout(() => {

            document.querySelector('.pizzaWindowArea').style.opacity = 1;
        }, 200);

        //console.log(pizzaJson[key]);
    })

    //append = cria um elemento dentro do local epecificado sempre na última posição, ou seja, não subtitui os elementos que já estava dentro
    document.querySelector('.pizza-area').append(pizzaItem);

})

//---------------------------------- EXIBE INFORMAÇÃO DAS PIZZAS ----------------------------------------//

//Evento modal

function closeModal() {
    document.querySelector('.pizzaWindowArea').style.opacity = 0;

    setTimeout(() => {
        document.querySelector('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

document.querySelectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

//---------------------------------- QUANTIDADE DE PIZZAS ----------------------------------------//

document.querySelector('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQtd++;

    document.querySelector('.pizzaInfo--qt').innerHTML = modalQtd
});

document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', ()=>{

    document.querySelector('.pizzaInfo--qt').innerHTML = modalQtd

    if (modalQtd > 1) {
        modalQtd--
    }
});

