const armazenar = (data) => {
    for(let key=0;key < respostas.length;key++){
        if(respostas[key].idQuest === data.idQuest) {
            respostas[key].valueQuest = data.valueQuest;
            return;
        }
    }
    respostas.push(data);
 };

const addActionInRadio = (arrayTagsRadios) => {
    for (let key = 0; key < arrayTagsRadios.length; key++) {
        arrayTagsRadios[key].addEventListener("change", (e) => {
         armazenar({idQuest:e.path[0].name,valueQuest:e.path[0].value});
        });
    }
 }

const calcular = () => {
    let total = 0;
    for(let key=0;key<respostas.length;key++) {
        total += parseInt(respostas[key].valueQuest);
    }
    //if(total>3)alert('Lascoo');
    console.log(total);
    return total;
}

const res1 = document.getElementsByName('botao1');
const res2 = document.getElementsByName('botao2');
const res3 = document.getElementsByName('botao3');
const res4 = document.getElementsByName('botao4');
const res5 = document.getElementsByName('botao5');
const res6 = document.getElementsByName('botao6');
const res7 = document.getElementsByName('botao7');
const res8 = document.getElementsByName('botao8');
const res9 = document.getElementsByName('botao9');
const res10 = document.getElementsByName('botao10');
const res11 = document.getElementsByName('botao11');
const res12 = document.getElementsByName('botao12');
const res13 = document.getElementsByName('botao13');
const res14 = document.getElementsByName('botao14');
const res15 = document.getElementsByName('botao15');
const res16 = document.getElementsByName('botao16');
const res17 = document.getElementsByName('botao17');
const res18 = document.getElementsByName('botao18');
const res19 = document.getElementsByName('botao19');
const res20 = document.getElementsByName('botao20');
const res21 = document.getElementsByName('botao21');
let respostas = [];

 addActionInRadio(res1);
 addActionInRadio(res2);
 addActionInRadio(res3);
 addActionInRadio(res4);
 addActionInRadio(res5);
 addActionInRadio(res6);
 addActionInRadio(res7);
 addActionInRadio(res8);
 addActionInRadio(res9);
 addActionInRadio(res10);
 addActionInRadio(res11);
 addActionInRadio(res12);
 addActionInRadio(res13);
 addActionInRadio(res14);
 addActionInRadio(res15);
 addActionInRadio(res16);
 addActionInRadio(res17);
 addActionInRadio(res18);
 addActionInRadio(res19);
 addActionInRadio(res20);
 addActionInRadio(res21);

