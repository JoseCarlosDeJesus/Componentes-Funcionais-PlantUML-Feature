const featureModelParser = require("feature-model-parser");

let myDiagram = `@startsalt ExampleButton
{
    !include https://raw.githubusercontent.com/JoseCarlosDeJesus/PLANTUML-features/main/EstudoDeCasoFeature/definitivefeature.puml

    $mandatory("ProductList",0,"[","Meu botao fofinho","]")

}
@endsalt`;

let myComponent = featureModelParser.parse(myDiagram);

console.log(myComponent);