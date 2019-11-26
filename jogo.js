var perg = ['Podemos dizer que uma célula é eucarionte, pois:','O evolucionista Charles Darwin defendia a ideia de que:','O tubarão e os seres humanos pertencem a mesma categoria taxonômica. Que categoria é essa?','Sobre a biogênese, podemos afirmar que:','Sobre as relações ecológicas, o parasitismo é:','Sobre a malária, é correto afirmar:','Qual organela é responsável pela digestão e limpeza celular?','Podemos dizer que os seres primitivos eram formados por células:Podemos dizer que os seres primitivos eram formados por células:','A qual reino as plantas pertencem?'];
var res = ['Possui a envoltura nuclear','Os indivíduos mais adaptados irão sobreviver','Reino','Os seres vivos surgem de outros seres vivos','Uma espécie que vive à custa da outra podendo prejudicá-la, mas sem matá-la','É causada por um protozoário (Plasmodium)','Lisossomos','Procarionte','Metaphyta'];
var alternativa = [['Não possui a envoltura nuclear','Esta presente nas bacterias','Possui a envoltura nuclear'],['Os indivíduos mais adaptados irão sobreviver','Os seres vivos são imutáveis','O homem evoluiu do macaco'],['Familia','Reino','Especie'],['Seres vivos surgem da matéria bruta','Os seres vivos surgem de outros seres vivos','É conhecida como geração espontânea'],['Quando uma espécie mata a outra para se alimentar','Uma espécie que vive à custa da outra podendo prejudicá-la, mas sem matá-la','A relação entre duas espécies, em que uma prejudica a outra '],['É causada por um protozoário (Plasmodium)','É causada por uma bactéria','É transmitida pelo Aedes Aegypti'],['Mitocôndria','Ribossomos','Lisossomos'],['Complexa','Eucarionte','Procarionte']['Metaphyta','Protista ','Monera']]
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