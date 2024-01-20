import Paragrafo from "./Paragrafo"

function App(){
let urlEu="https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/345229570_1590913798086998_7763990040410748593_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHPIC6ke7fyiys50FqHlPh88CJ_OGGlerXwIn84YaV6tSjddM2tYrj6Wb1ogLO8kRoWrAQ1HdbXQBrUO61Rqubh&_nc_ohc=JEEg43d3xWIAX-O52OX&_nc_ht=scontent.fcpq5-1.fna&oh=00_AfAXBQlY2H2DzNvLmAD-eGtVx58GVvIBSGFJDJTUiUGHPw&oe=65B1E047"

let urlVovoFa="https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/310978918_2912524615716466_867394300293147749_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEUTdr4Cc5_Dh5W3kMEBWFb_CHEeWC0IPb8IcR5YLQg9gRsMcm5ithtmiv9FSBPHO8ls1hHaYud2lp78c8ZeC36&_nc_ohc=okOuTnh5-QMAX-_LQHn&_nc_ht=scontent.fcpq5-1.fna&oh=00_AfBioV6_hAqWQWQ0LzkbaBd1aDYvZhii50OSp1qy4F3hoQ&oe=65B06856"

let urlVovoDavi="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/34830180_1846711675631104_272786017352679424_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGjrpB4XA1iZYg_D-HOZ6yM4qGt91Fyeebioa33UXJ55iLP7bQ-IDqfqn8iT8ZldmEo2pYvYDxvs9zyn-a2cdvk&_nc_ohc=gpItYVzbsL0AX8-XSc1&_nc_ht=scontent.fcpq5-1.fna&oh=00_AfCAt-S1O9EhoR4b-uo6_8kXoFR5czq6SjUdaWuEyDh5-g&oe=65D39C4D"


  return( 
    <div>
      <Paragrafo cor='blue' nome = "Eduardo Andrade" paragrafo={false} url={urlEu} />
      <Paragrafo cor='purple' nome = "vovo fatima" paragrafo={false} url={urlVovoFa} />
      <Paragrafo cor='pink' nome = "vovo davi" paragrafo={true} url={urlVovoDavi} />
    </div>
  )
}
export default App