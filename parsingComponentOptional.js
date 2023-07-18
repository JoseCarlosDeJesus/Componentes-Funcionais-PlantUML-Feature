const featureModelParser = require("feature-model-parser");

let myDiagram = `@startsalt ExampleOptional
{
    !include https://raw.githubusercontent.com/JoseCarlosDeJesus/PLANTUML-features/main/EstudoDeCasoFeature/definitivefeature.puml

    !$myControlVariable = 1
$optional("Optional",0,"%chr(34)","caixa de entrada fantasma","%chr(34)",$myControlVariable)
}
@endsalt`;

let myComponent = featureModelParser.parse(myDiagram);

console.log(myComponent);