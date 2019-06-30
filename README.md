#Typescript && Angular

### para subir o servidor faça a instalação do node.

### para validar versão
    node -v

###para instalação global do angular
    npm install -g @angular/cli    

##para validar a instalação 
    ng -v

## Para iniciar um projeto padrão angular 
    ng new package --prefix=prefix_componets
    
###Anotações
Você pode importa bibliotecas e utilizá-la ela de maneira tipada

###Exemplo
    npm install --save-dev @types/lodash@4.17.11
Assim os codigos da lib vem de maneira tipada somente no ambiente de desenvolvimento

###Utilizar bibliotecas importadas
    import  * as _ from 'lodash'
###Exemplo
    console.log(_.pad("Typescript Examples",70,"="))

    
##Para gerar component 
    ng generate component {nomeDoComponent} --spec={deseja realizar teste ? true : false}

###Escrita de forma reduzida
    ng g c header --spec=false

###Para subir o servidor node
####Vá na pasta que esta o seu projeto
    ng serve ou npm start
    
###Link para acesso
    http://localhost:4200/