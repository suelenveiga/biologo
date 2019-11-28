var perg = ['(Enem/2018) A polinização, que viabiliza o transporte do grão de pólen de uma planta até o estigma de outra, pode serrealizada biótica ou abioticamente. Nos processos abióticos, as plantas dependem de fatores como o vento e a água. A estratégia evolutiva que resulta em polinização mais eficiente quando esta depende do vento é o(a):','(Enem/2018) O deserto é um bioma que se localiza em regiões de pouca umidade. A fauna é, predominantemente, composta por animais roedores, aves, répteis e artrópodes. Uma adaptação, associada a esse bioma, presente nos seres vivos dos grupos citados é o(a):','(Enem/2018) A utilização de extratos de origem natural tem recebido a atenção de pesquisadores em todo o mundo, principalmente nos países em desenvolvimento que são altamente acometidos por doenças infecciosas e parasitárias. Um bom exemplo dessa utilização são os produtos de origem botânica que combatem insetos. O uso desses produtos pode auxiliar no controle da:','(Enem/2018) Para serem absorvidos pelas células do intestino humano, os lipídios ingeridos precisam ser primeiramente emulsificados. Nessa etapa da digestão, torna-se necessária a ação dos ácidos biliares, visto que os lipídios apresentam uma natureza apolar e são insolúveis em água. Esses ácidos atuam no processo de modo a:','(Enem/2018) No ciclo celular atuam moléculas reguladoras. Dentre elas, a proteína p53 é ativada em resposta a mutações no DNA, evitando a progressão do ciclo até que os danos sejam reparados, ou induzindo a célula à auto destruição. A ausência dessa proteína poderá favorecer a:','(Enem 2018 - Dia 2) Para serem absorvidos pelas células do intestino, os lipídios ingeridos precisam ser primeiramente emulsificados. Nessa etapa da digestão, torna-se necessária a ação dos ácidos biliares, visto que os lipídios apresentam uma natureza apolar e são insolúveis em água. Esses ácidos atuam no processo de modo a','(ENEM-2019) Um alimento orgânico deve apresentar em sua embalagem o selo de uma instituição certificadora, garantindo ao consumidor que, além de ser um alimento isento de agrotóxicos, também é produzido com técnicas planejadas e controladas. A técnica de produção desses alimentos causa menor impacto aos recursos naturais, contribuindo para melhorar a qualidade de vida das pessoas. Nesse sistema de produção de alimentos vegetais, o controle de insetos é manejado por meio do(a)',''];
var res = ['Aumento do número de estames.','Eliminação de excretas nitrogenadas de forma concentrada.','Leishmaniose.','Agir como detergentes.','Proliferação celular exagerada, resultando na formação de um tumor.','Agir como detergentes.','Emprego da compostagem.','',''];
var alternativa = [['Diminuição do cálice.','Alongamento do ovário.','Aumento do número de estames.'],['Respiração realizada por pulmões foliáceos.','Capacidade de controlar a temperatura corporal.','Eliminação de excretas nitrogenadas de forma concentrada.'],['Leishmaniose.','Leptospirose.','Aids.'],['Hidrolisar os lipídios.','Agir como detergentes.','Tornar os lipídios anfifílicos.'],['Redução da síntese de DNA, acelerando o ciclo celular.','Saída imediatada do ciclo celular, antecipando a proteção do DNA.','Proliferação celular exagerada, resultando na formação de um tumor.'],['Hidrolisar os lipídios.','Agir como detergentes.','Tornar os lipídios anfifílicos.'],['Prática de adubação verde.','Emprego da compostagem.','Controle da irrigação do solo.'],['','','']['','','']]
var vet = ['1','2','3'];
document.getElementById('jogo').addEventListener('click',function(){
    var posi = 0;
    var pontos = 0;
    document.getElementById('pergunta').textContent = perg[0];
    document.getElementById('seguir').style.display = 'block';

    for(let j=0; j<3; j++){
        document.getElementById('inlineRadio'+vet[j]).style.display = 'block';
        document.getElementById('ll'+vet[j]).style.display = 'block';
        document.getElementById('inlineRadio'+vet[j]).value = alternativa[posi][j];
        document.getElementById('l'+vet[j]).textContent = alternativa[posi][j];

        document.getElementById('inlineRadio'+vet[j]).addEventListener('click',function(){            
            if(document.getElementById('inlineRadio'+vet[j]).value == res[posi]){
                console.log('igual');
                pontos +=1;
                document.getElementById('v'+vet[j]).style.display = 'block';
        }
        if(document.getElementById('inlineRadio'+vet[j]).value !== res[posi]){
            console.log('diferente');
            console.log(document.getElementById('inlineRadio'+vet[j]).value);
            console.log(res[posi]);
            document.getElementById('x'+vet[j]).style.display = 'block';
            for(let w=0; w<3; w++){
                if(document.getElementById('inlineRadio'+vet[w]).value == res[posi]){
                    document.getElementById('v'+vet[w]).style.display = 'block'; 
                }
            }
        }  
        });
        
}
                document.getElementById('seguir').addEventListener('click',function(){
                    posi++;
                    console.log(posi);
                    for(let q=0; q<3; q++){
                            document.getElementById('v'+vet[q]).style.display = 'none'; 
                            document.getElementById('x'+vet[q]).style.display = 'none';
                            document.getElementById('inlineRadio'+vet[q]).value = alternativa[posi][q];
                            document.getElementById('l'+vet[q]).textContent = alternativa[posi][q];
                    }
                    document.getElementById('pergunta').textContent = perg[posi];
                    
                    if (posi == 6){
                        for(let qq=0; qq<3; qq++){
                            document.getElementById('v'+vet[qq]).style.display = 'none'; 
                            document.getElementById('x'+vet[qq]).style.display = 'none';
                            document.getElementById('inlineRadio'+vet[qq]).style.display = 'none';
                            document.getElementById('ll'+vet[qq]).style.display = 'none';
                    }
                    document.getElementById('pergunta').textContent = 'Obrigado por participar sua pontuaçao foi de : '+pontos+' pontos.';
                    document.getElementById('seguir').style.display = 'none';

                    }
                });
})

document.getElementById('jogo2').addEventListener('click',function(){
    var posi2 = 0;
    var pontos2 = 0;
    document.getElementById('pergunta2').textContent = perg[0];
    document.getElementById('seguir2').style.display = 'block';


    for(let j=0; j<3; j++){

        document.getElementById('inlineRadio2'+vet[j]).style.display = 'block';
        document.getElementById('ll2'+vet[j]).style.display = 'block';
        document.getElementById('inlineRadio2'+vet[j]).value = alternativa[posi2][j];
        document.getElementById('l2'+vet[j]).textContent = alternativa[posi2][j];

        document.getElementById('inlineRadio2'+vet[j]).addEventListener('click',function(){            
            if(document.getElementById('inlineRadio2'+vet[j]).value == res[posi2]){
                console.log('igual');
                pontos2 +=1;
                document.getElementById('v2'+vet[j]).style.display = 'block';
        }
        if(document.getElementById('inlineRadio2'+vet[j]).value !== res[posi2]){
            console.log('diferente');
            console.log(document.getElementById('inlineRadio2'+vet[j]).value);
            console.log(res[posi2]);
            document.getElementById('x2'+vet[j]).style.display = 'block';
            for(let w=0; w<3; w++){
                if(document.getElementById('inlineRadio2'+vet[w]).value == res[posi2]){
                    document.getElementById('v2'+vet[w]).style.display = 'block'; 
                }
            }
        }  
        });
        
}
                document.getElementById('seguir2').addEventListener('click',function(){
                    posi2++;
                    console.log(posi2);
                    for(let q=0; q<3; q++){
                            document.getElementById('v2'+vet[q]).style.display = 'none'; 
                            document.getElementById('x2'+vet[q]).style.display = 'none';
                            document.getElementById('inlineRadio2'+vet[q]).value = alternativa[posi2][q];
                            document.getElementById('l2'+vet[q]).textContent = alternativa[posi2][q];
                    }
                    document.getElementById('pergunta2').textContent = perg[posi2];
                    
                    if (posi2 == 6){
                        for(let qq=0; qq<3; qq++){
                            document.getElementById('v2'+vet[qq]).style.display = 'none'; 
                            document.getElementById('x2'+vet[qq]).style.display = 'none';
                            document.getElementById('inlineRadio2'+vet[qq]).style.display = 'none';
                            document.getElementById('ll2'+vet[qq]).style.display = 'none';
                    }
                    document.getElementById('pergunta2').textContent = 'Obrigado por participar sua pontuaçao foi de : '+pontos2+' pontos.';
                    document.getElementById('seguir2').style.display = 'none';

                    }
                });
})
