const featureModelParser = require("feature-model-parser");

let myDiagram = `@startsalt Navbar
{
    !include https://raw.githubusercontent.com/JoseCarlosDeJesus/PLANTUML-features/main/EstudoDeCasoFeature/definitivefeature.puml

    !$genericRule = 1

    $alternative("NavbarMobile",1,"{*","<&menu> | <&cart> %newline() <&menu> | Produtos | Meu Carrinho | - | Meu Perfil","}",$genericRule,"NavbarDesktop","{*","Produtos | <b>Meu Carrinho | Meu Perfil","}",0)

}
@endsalt`;



let myComponent = featureModelParser.parse(myDiagram);

console.log(myComponent);